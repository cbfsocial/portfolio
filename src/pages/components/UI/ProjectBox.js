export default function ProjectBox({
  title,
  text,
  stack,
  image,
  gitLink,
  demo,
}) {
  return (
    <div className="border-2 rounded-tl-2xl rounded-br-2xl flex flex-col justify-between items-center w-3/4 lg:w-1/3 ">
      <a href={demo} target="_blank" className="flex justify-center py-2">
        <img src={image} alt={title} className="w-2/3" />
      </a>
      <h3 className="">{title}</h3>
      <div className="h-1 bg-gradient-to-r from-[#13ADC7] to-[#945DD6] w-2/3 rounded-full"></div>
      <p className="p-4">{text}</p>
      <p>Stack: {stack}</p>
      <a href={gitLink} target="_blank" className="my-4">
        <button className="bg-gradient-to-r from-[#13ADC7] to-[#945DD6] rounded-full px-8 py-2 text-xl font-medium lg:w-1/3 ">
          Source code
        </button>
      </a>
    </div>
  );
}
