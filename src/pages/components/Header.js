import GitHubIcon from "../icons/GitHubIcon";
import LogoIcon from "../icons/LogoIcon";
import LinkedInLogo from "../icons/LinkedInLogo";
import HeadHunterLogo from "../icons/HeadHunterLogo";
import NavBarIcon from "../icons/NavBarIcon";
import CloseIcon from "../icons/CloseIcon";
import NavBar from "./NavBar";
import { useState } from "react";

export default function Header() {
  const [openNavOpen, SetOpenNavOpen] = useState(false);
  return (
    <div
      className="
    lg:flex
    lg:justify-between
    lg:sticky
    lg:top-0
    lg:pt-8
    lg:px-4
    lg:bg-[#162950]
    lg:relative
    "
    >
      <span
        className="lg:hidden w-12 h-12 fixed right-8 top-8 cursor-pointer"
        onClick={() => SetOpenNavOpen((prev) => !prev)}
      >
        {openNavOpen ? (
          <CloseIcon fill="black" stroke="yellow" />
        ) : (
          <NavBarIcon />
        )}
      </span>
      {openNavOpen && <NavBar />}
      <div className="max-lg:hidden lg:flex lg:justify-between lg:w-3/4 lg:pl-16">
        <p className="">Projects</p>
        <p className="">Technologies</p>
        <p className="">About me</p>
      </div>
      <div className="max-lg:hidden lg:flex lg:justify-between lg:gap-8 lg:mb-4">
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
