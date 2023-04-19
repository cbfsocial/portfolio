import ProjectBox from "./UI/ProjectBox";

export default function Projects() {
  return (
    <div className=" pt-10 lg:flex-row">
      <h1 className="w-screen text-3xl text-left pl-8 pb-8">Projects</h1>
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-around">
        <ProjectBox
          title="GymApp"
          text="GymApp for self usage. Can be used for tracking Gym activity. Counting
          reps, weights and dates of training"
          stack="NextJS, tailwind, HeadlessUI"
          image="/gymapp_prev.png"
          gitLink="https://github.com/cbfsocial/frontend-gym-app"
          liveLink="https://gymapp-beta.vercel.app"
        />
        <ProjectBox
          title="Keycodes"
          text="Apps allow checks key codes of any key, check if mouse dobleclicking, and check is all your key on keyboard works properly"
          stack="React, CSS, Feather"
          image="/keyboard_checker_prev.png"
          gitLink="https://github.com/cbfsocial/frontend-KeyboardChecker"
          liveLink="https://frontend-keyboard-checker.vercel.app"
        />
      </div>
      <div className="pt-2 justify-center flex">
        <a href="https://github.com/cbfsocial?tab=repositories" target="_blank">
          <button className="bg-gradient-to-r from-[#13ADC7] to-[#945DD6] rounded-full px-8 py-2 text-xl font-medium mt-6 ">
            All project
          </button>
        </a>
      </div>
    </div>
  );
}
