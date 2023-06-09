import GitHubIcon from "../icons/GitHubIcon";
import LinkedInLogo from "../icons/LinkedInLogo";
import TelegramLogo from "../icons/TelegramLogo";

export default function Footer() {
  return (
    <div className="flex justify-between px-12 py-4">
      <div className="flex flex-col">
        <p>Email:</p>
        <a href="mailto:me@cbfscl.ru">me@cbfscl.ru</a>
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
        href="https://www.linkedin.com/in/aleksander-kuznetsov-572243112/"
        target="_blank"
        className="https://t.me/fsocial"
      >
        <TelegramLogo />
      </a>
    </div>
  );
}
