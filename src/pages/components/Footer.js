import GitHubIcon from "../icons/GitHubIcon";
import LinkedInLogo from "../icons/LinkedInLogo";

export default function Footer() {
  return (
    <div className="flex justify-between ml-4 px-4 pb-4">
      <div className="flex flex-col">
        <p>Email:</p>
        <email>guardian1324918@gmail.com</email>
      </div>
      <a href="https://github.com/cbfsocial" target="_blank" className="">
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/aleksander-kuznetsov-572243112/"
        target="_blank"
        className=""
      >
        <LinkedInLogo />
      </a>
    </div>
  );
}
