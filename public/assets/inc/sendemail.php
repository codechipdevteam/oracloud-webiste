<?php
require_once __DIR__ . '/app/settings.php';

// --- Honeypot: a hidden field real users never fill. Bots that populate it get
//     a decoy "success" and nothing is sent. The field name is deliberately not
//     one that browsers/password managers autofill. ---
if (!empty($_POST['contact_ref'])) {
	echo "<div class='alert alert-success' role='alert'>Thanks for contacting us.</div>";
	exit;
}

// --- Cloudflare Turnstile: verify the widget token before any mail work.
//     Enforced only when TURNSTILE_SECRET_KEY is present in .env, so the form
//     keeps working until the key is provisioned on the server. ---
$tsSecret = Env::get('TURNSTILE_SECRET_KEY');
if (!empty($tsSecret)) {
	$tsToken = isset($_POST['cf-turnstile-response']) ? (string) $_POST['cf-turnstile-response'] : '';
	$tsOk = false;
	if ($tsToken !== '') {
		$ch = curl_init('https://challenges.cloudflare.com/turnstile/v0/siteverify');
		curl_setopt_array($ch, [
			CURLOPT_POST => true,
			CURLOPT_POSTFIELDS => http_build_query([
				'secret' => $tsSecret,
				'response' => $tsToken,
				'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
			]),
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_TIMEOUT => 10,
		]);
		$tsBody = curl_exec($ch);
		curl_close($ch);
		if ($tsBody !== false) {
			$tsResult = json_decode($tsBody, true);
			$tsOk = is_array($tsResult) && !empty($tsResult['success']);
		}
	}
	if (!$tsOk) {
		http_response_code(400);
		echo "<div class='alert alert-danger captcha-failed' role='alert'>
        Spam check failed. Please try again.
      </div>";
		exit;
	}
}

try {

	// Content
	$name = isset($_POST['name']) ? preg_replace("/[^\.\-\' a-zA-Z0-9]/", "", $_POST['name']) : "";
	$senderEmail = isset($_POST['email']) ? trim($_POST['email']) : "";
	$phone = isset($_POST['phone']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['phone']) : "";
	$subject = isset($_POST['subject']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9\s]/", "", $_POST['subject']) : "";
	$message = isset($_POST['message']) ? preg_replace("/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message']) : "";

	// Require the real contact fields + a valid email address.
	if (empty($name) || empty($message) || !filter_var($senderEmail, FILTER_VALIDATE_EMAIL)) {
		http_response_code(400);
		echo "<div class='alert alert-danger' role='alert'>
        Please provide your name, a valid email, and a message.
      </div>";
		exit;
	}

	// Notify the site owner ONLY. We deliberately never send email TO the
	// submitter-supplied address — doing so would let this endpoint be abused to
	// mail arbitrary third parties (backscatter / spam amplification). The
	// submitter's address is attached as Reply-To so the owner can reply directly.
	$template = file_get_contents(__DIR__ . '/template/admin-template.html');
	if ($template === false) {
		throw new Exception('admin email template not found');
	}
	$template = str_replace('{{name}}', htmlspecialchars($name, ENT_QUOTES), $template);
	$template = str_replace('{{message}}', htmlspecialchars($message, ENT_QUOTES), $template);
	$template = str_replace('{{email}}', htmlspecialchars($senderEmail, ENT_QUOTES), $template);

	if (!empty($phone)) {
		$template = str_replace('{{phone}}', htmlspecialchars($phone, ENT_QUOTES), $template);
		$template = str_replace('class="phone-hide"', 'class=""', $template);
	}
	if (!empty($subject)) {
		$template = str_replace('{{subject}}', htmlspecialchars($subject, ENT_QUOTES), $template);
		$template = str_replace('class="subject-hide"', 'class=""', $template);
	}

	$mail->addAddress(Env::get('ADMIN_EMAIL'));
	$mail->addReplyTo($senderEmail, $name);
	$mail->Subject = 'New Contact Form Submission';
	$mail->Body = $template;
	$mail->AltBody = 'A new contact form submission has been received.';
	$mail->send();

	echo "<div class='alert alert-success' role='alert'>
        Thanks for contacting us.
      </div>";

} catch (Exception $e) {
	// Log server-side only; never leak SMTP/config details to the caller.
	error_log('sendemail.php mailer error: ' . $e->getMessage());
	http_response_code(500);
	echo "<div class='alert alert-danger' role='alert'>
        Message could not be sent. Please email us at connect@oracloud.in.
      </div>";

}
