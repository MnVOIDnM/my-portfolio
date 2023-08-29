const About = () => {
  const aboutMe = [
    {
      label: "Exp. & Edu.",
      description:
        "(2016) 国立大学（自然科学系学科） 中退\n↓\n(2020) 私立大学（教育系） 卒業\n↓\n(2020~) 私立小学校 教諭\n(2021~) プログラミング学習を開始\n↓\n",
    },
    {
      label: "Bio.",
      description:
        "フルスタックエンジニア目指してがんばってます。",
    },
    {
      label: "Skills",
      description:
        "HTML, CSS, Javascript, React, Recoil\nTailwindcss, Chakra UI\nFirebase\n↓--Leaning--↓\nNext.js, Typescript, Python, SQL, Github\nそろそろバックエンドの勉強をしっかり始めたい。",
    },
  ];

  return (
    <section id="about" className="flex flex-col py-10 items-center w-full">
      <h1 className="leading-10 font-bold text-4xl">About me</h1>
      <div className="w-full flex justify-around flex-wrap p-5 gap-3">
        {aboutMe.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:w-[500px] w-[400px] text-white rounded-lg bg-gradient-to-br from-slate-600 to-slate-400 p-3 "
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
