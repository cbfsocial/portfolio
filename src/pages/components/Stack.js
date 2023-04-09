import SkillIndicator from "./UI/SkillIndicator";

export default function Stack() {
  return (
    <div className="mt-14">
      <h3 className="text-3xl text-left pl-8 pb-10">Technologies Stack</h3>
      <div className="flex flex-col gap-6">
        <SkillIndicator skillName={"HTML"} skillLevel={"Advanced"} />
        <SkillIndicator skillName={"CSS, TailWind"} skillLevel={"Advanced"} />
        <SkillIndicator skillName={"Javascript"} skillLevel={"Advanced"} />
        <SkillIndicator skillName={"React"} skillLevel={"Solid"} />
        <SkillIndicator skillName={"TypeScript"} skillLevel={"Beginner"} />
        <SkillIndicator skillName={"Figma"} skillLevel={"Beginner"} />
      </div>
      <div className="mt-10">
        <h3 className="text-3xl text-left pl-8">Additional skills </h3>
        <div className="flex justify-around pt-6 text-lg">
          <div className="h-8 flex flex-col">
            <span>Social:</span>
            <ul className="list-disc pl-6">
              <li>Quick learning</li>
              <li>B2 english</li>
              <li>Teamwork</li>
              <li>Problem-solving</li>
              <li>Mentoring</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>Technical</span>
            <ul className="list-disc pl-6">
              <li>RWD</li>
              <li>Git</li>
              <li>CCNA</li>
              <li>SRE</li>
              <li>k8s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
