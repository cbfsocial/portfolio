import GitHubIcon from "../icons/GitHubIcon";
import LinkedInLogo from "../icons/LinkedInLogo";

export default function NavBar() {
  return (
    <div className="bg-[#567189] w-screen h-screen flex flex-col items-center justify-between m-0 p-0 top-0 fixed z-10">
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
      </div>
    </div>
  );
}
