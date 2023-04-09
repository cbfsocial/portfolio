import GitHubIcon from "../icons/GitHubIcon";
import LogoIcon from "../icons/LogoIcon";
import LinkedInLogo from "../icons/LinkedInLogo";
import HeadHunterLogo from "../icons/HeadHunterLogo";

export default function NavBar() {
  return (
    <div className="bg-[#567189] w-screen h-screen flex flex-col items-center justify-between m-0 z-50">
      <div className="pt-8 text-center border-b-2 w-screen pb-6">
        <p className="text-4xl">Portfolio</p>
      </div>
      <p className="text-4xl">Projects</p>
      <p className="text-4xl">Technologies</p>
      <p className="text-4xl">About me</p>
      <div className="flex justify-around w-screen mb-4">
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
        >
          <HeadHunterLogo />
        </a>
      </div>
    </div>
  );
}
