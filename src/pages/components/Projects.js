import ProjectBox from "./UI/ProjectBox";

export default function Projects() {
  return (
    <div className="h-screen pt-10 flex flex-col items-center gap-8">
      <h1 className="text-3xl w-screen text-left pl-8">Projects</h1>
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
  );
}
