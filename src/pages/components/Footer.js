import GitHubIcon from "../icons/GitHubIcon";
import LinkedInLogo from "../icons/LinkedInLogo";
import HeadHunterLogo from "../icons/HeadHunterLogo";

export default function Footer() {
  return (
    <div className="flex justify-between ml-4 mt-8">
      <div className="flex flex-col">
        <p>email:</p>
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
      <a
        href="https://hh.ru/resume/cc33ff8dff0324d1840039ed1f313939626759"
        target="_blank"
        className=""
      ></a>
    </div>
  );
}
