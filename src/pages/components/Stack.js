import SkillIndicator from "./UI/SkillIndicator";

export default function Stack() {
  return (
    <div className="h-screen mt-14 ">
      <h3 className="text-3xl pl-8 ">Technologies Stack</h3>
      <div className="flex flex-col gap-6">
        <SkillIndicator skillName={"HTML"} skillLevel={"Advanced"} />
        <SkillIndicator skillName={"CSS, TailWind"} skillLevel={"Advanced"} />
        <SkillIndicator skillName={"Javascript"} skillLevel={"Advanced"} />
        <SkillIndicator skillName={"React"} skillLevel={"Solid"} />
        <SkillIndicator skillName={"TypeScript"} skillLevel={"Beginner"} />
        <SkillIndicator skillName={"Figma"} skillLevel={"Beginner"} />
      </div>
      <div className="mt-14">
        <h3 className="text-2xl">Additional technologies and skills </h3>
        <div className="flex">
          <div className="w-2/3 h-8 flex flex-col pl-8">
            <span>Social:</span>
            <ul className="list-disc">
              <li>Quick learning</li>
              <li>B2 english</li>
              <li>Teamwork</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>Technical</span>
            <ul className="list-disc">
              <li>RWD</li>
              <li>Git</li>
              <li>Network knowledge</li>
              <li>SRE knowledge</li>
              <li>k8s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
