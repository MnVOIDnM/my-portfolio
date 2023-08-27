import Image from "next/image";

export default function Projects() {
  const Projects = [
    {
      image: "/pref-quiz-app-image.png",
      title: "都道府県クイズアプリ",
      description: "Vite + Chakra UI + Firebase",
    },
    {
      image: "/capital-quiz-app-image.png",
      title: "県庁所在地クイズアプリ",
      description: "Vite + Chakra UI + Firebase",
    },
    {
      image: "/cols-calc-app-image.png",
      title: "筆算練習アプリ",
      description: "Vite + Chakra UI",
    },
  ];
  return (
    <section
      id="projects"
      className="flex flex-col py-10 items-center w-full bg-slate-100 "
    >
      <h1 className="font-bold text-4xl">Projects</h1>
      <div className="w-full flex flex-wrap flex-1 justify-around p-5 gap-3">
        {Projects.map((project) => (
          <div
            key={project.title}
            className="w-80 rounded-lg border shadow-md hover:shadow-2xl p-3 flex flex-col gap-3 transition duration-500 ease-in-out"
          >
            <Image
              className="relative rounded-lg"
              width={300}
              height={200}
              alt={project.title}
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
    </section>
  );
}
