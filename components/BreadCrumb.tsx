import Link from "next/link";

const Breadcrumb = ({ paths }: { paths: Array<{ href: string; label: string }> }) => {
  return (
    <div className="breadcrumb-area bg-gray text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <ul className="breadcrumb">
              <li>
                <Link href="/">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              {paths.map((path, index) => (
                <li
                  key={index}
                  className={index === paths.length - 1 ? "active" : ""}
                >
                  {index !== paths.length - 1 ? (
                    <Link href={path.href}>{path.label}</Link>
                  ) : (
                    path.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
