export default function SkillIndicator({ skillName, skillLevel }) {
  let indicatorWidht =
    skillLevel === "Beginner"
      ? "w-1/5"
      : skillLevel === "Solid"
      ? "w-2/4"
      : skillLevel === "Advanced"
      ? "w-4/5"
      : skillLevel === "Master"
      ? "w-4/4"
      : "w-4/4";

  return (
    <div className="flex flex-col">
      <div className="w-screen flex flex-col items-center">
        <div className="flex justify-between w-5/6">
          <span>{skillName}</span>
          <span>{skillLevel}</span>
        </div>
        <div className="w-5/6 bg-[#162950] rounded-full h-6">
          <div
            className={
              "bg-gradient-to-r from-[#13ADC7] to-[#945DD6] rounded-full h-6 " +
              indicatorWidht
            }
          ></div>
        </div>
      </div>
    </div>
  );
}
