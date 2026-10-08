"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LottieProps {
  src: string;
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottieAnimation({
  src,
  width = 300,
  height = 300,
  loop = true,
  autoplay = true,
}: LottieProps) {
  return (
    <DotLottieReact
      src={src}
      loop={loop}
      autoplay={autoplay}
      style={{
        width,
        height,
      }}
    />
  );
}
