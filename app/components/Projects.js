export default function Projects() {
  const Projects = [
    { image: "", title: "Project1", description: "description1" },
    { image: "", title: "Project2", description: "description2" },
    { image: "", title: "Project3", description: "description3" },
    { image: "", title: "Project4", description: "description4" },
  ];
  return (
    <div className="flex flex-col py-10 items-center w-full bg-slate-100 ">
      <h1 className="font-bold text-4xl">Projects</h1>
      <div className="w-full flex flex-wrap flex-1 justify-around p-5 gap-3">
        {Projects.map((project) => (
          <div
            key={project.title}
            className="w-80 rounded-lg border shadow-md hover:shadow-2xl p-3 flex flex-col gap-3 transition duration-500 ease-in-out"
          >
            <img
              className="relative w-[78px] h-[78px]"
              alt=""
              src={project.image}
            />
            <h3 className="text-center">{project.title}</h3>
            <p className=" text-gray-600">{project.description}</p>
            <a className="text-blue-400 hover:text-blue-800 cursor-pointer">
              View details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
