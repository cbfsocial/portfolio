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
        />
        <ProjectBox
          title="GymApp"
          text="GymApp for self usage. Can be used for tracking Gym activity. Counting
          reps, weights and dates of training"
          stack="NextJS, tailwind, HeadlessUI"
          image="/gymapp_prev.png"
          gitLink="https://github.com/cbfsocial/frontend-gym-app"
        />
      </div>
      <div className="pt-2 justify-center flex">
        <button className="bg-gradient-to-r from-[#13ADC7] to-[#945DD6] rounded-full px-8 py-2 text-xl font-medium mt-6 lg:w-1/3">
          All project
        </button>
      </div>
    </div>
  );
}
