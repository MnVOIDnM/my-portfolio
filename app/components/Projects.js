import Image from "next/image";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const Projects = [
    {
      image: "/pref-quiz-app-image.png",
      title: "都道府県クイズアプリ",
      description:
        "Vite + Chakra UI + Firebase。\n初めて自作したサイト。\nFirebaseの認証機能がiPadでうまく動作せず断念し、更新停止",
      URL: "http://pref-quiz.miyacode.jp/",
      githubURL: "https://github.com/MnVOIDnM/pref-quiz-app",
    },
    {
      image: "/capital-quiz-app-image.png",
      title: "県庁所在地クイズアプリ",
      description:
        "Vite + Chakra UI + Firebase。\n都道府県アプリと同じ作りなので、どれくらいの早さでつくれるか試したもの。",
      URL: "http://capital-quiz.miyacode.jp/",
      githubURL: "https://github.com/MnVOIDnM/capital-quiz-app",
    },
    {
      image: "/cols-calc-app-image.png",
      title: "筆算練習アプリ",
      description:
        "Vite + Chakra UI\n手書きのアプリが作りたくて勢いで作ったがすぐ飽きて更新停止。\nいつか手書き文字認識に対応させて作り直したい。",
      URL: "https://cols-calc-app.vercel.app/",
      githubURL: "https://github.com/MnVOIDnM/cols-calc-app",
    },
    {
      image: "/typing-game-image.png",
      title: "タイピングゲーム",
      description:
        "Next.js + tailwindcss\nタイピングゲームがどのように動いているか気になって作ってみた。",
      URL: "https://typing-game-rouge.vercel.app/",
      githubURL: "https://github.com/MnVOIDnM/typing-game",
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
            className="w-80 rounded-lg border shadow-md p-3 flex flex-col gap-3"
          >
            <Image
              className="relative rounded-lg"
              width={300}
              height={200}
              alt={project.title}
              src={project.image}
            />
            <h3 className="text-center text-lg">{project.title}</h3>
            <p className=" text-gray-600 text-sm whitespace-pre-wrap">
              {project.description}
            </p>
            <div className="flex justify-start items-center gap-4">
              <a
                href={project.githubURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-7 h-7" />
              </a>
              <a
                href={project.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center py-1 px-4 rounded-full text-white text-lg bg-blue-400 hover:bg-blue-600 transition duration-500 ease-in-out cursor-pointer"
              >
                Visit
                <BsBoxArrowUpRight className="w-3 h-3 ml-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
