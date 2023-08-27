const About = () => {
  const aboutMe = [
    {
      label: "Experiences",
      description:
        "(2016) 大阪大学工学部応用自然科学科 中退\n↓\n(2020) 別府大学短期大学部初等教育専攻 卒業\n↓\n(2020~) 別府大学明星小学校 教諭\n↓\n(2021~) プログラミング学習を開始",
    },
    {
      label: "Interests",
      description:
        "目標はフルスタックエンジニア。\nfirebase頼りなので、バックエンドの勉強もしたい。",
    },
    {
      label: "Skills",
      description:
        "HTML, CSS, Javascript, React, Tailwindcss, Chakra UI, Firebase\n↓--Leaning--↓\nNext.js, Typescript, Python, SQL, Github",
    },
  ];

  return (
    <section id="about" className="flex flex-col py-10 items-center w-full">
      <h1 className="leading-10 font-bold text-4xl">About me</h1>
      <div className="w-full flex justify-around flex-wrap p-5 gap-5">
        {aboutMe.map((item, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col text-white rounded-lg bg-gradient-to-br from-slate-600 to-slate-400 p-3 "
          >
            <h2 className="text-center text-4xl">{item.label}</h2>
            <p className="p-3 whitespace-pre-wrap">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
