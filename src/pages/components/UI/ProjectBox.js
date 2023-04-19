export default function ProjectBox({
  title,
  text,
  stack,
  image,
  gitLink,
  liveLink,
}) {
  return (
    <div className="border-2 rounded-tl-2xl rounded-br-2xl flex flex-col justify-between items-center w-3/4 lg:w-1/3 ">
      <a href={liveLink} target="_blank" className="flex justify-center py-2">
        <img src={image} alt={title} className="w-2/3" />
      </a>
      <h3 className="">{title}</h3>
      <div className="h-1 bg-gradient-to-r from-[#13ADC7] to-[#945DD6] w-2/3 rounded-full"></div>
      <p className="p-4">{text}</p>
      <p>Stack: {stack}</p>
      <div className="flex justify-around w-full my-4">
        <a href={gitLink} target="_blank">
          <button className="bg-gradient-to-r from-[#13ADC7] to-[#945DD6] rounded-full px-4 py-2 font-medium ">
            Source code
          </button>
        </a>
        <a href={liveLink} target="_blank">
          <button className="bg-gradient-to-r from-[#13ADC7] to-[#945DD6] rounded-full px-4 py-2 font-medium ">
            Live demo
          </button>
        </a>
      </div>
    </div>
  );
}
