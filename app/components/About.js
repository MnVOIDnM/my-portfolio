const About = () => {
  const interests = ["Full stack development", "AI", "Block chain"];

  return (
    <section id="about" className="flex flex-col py-10 items-center w-full">
      <h1 className="leading-10 font-bold text-4xl">About me</h1>
      <div className="w-full flex justify-around flex-wrap flex-1 p-5 gap-3">
        <div className="text-white rounded-lg bg-gradient-to-br from-slate-600 to-slate-400 p-2 ">
          <h2 className="text-5xl">Career</h2>
          <p className="p-3">An Elementary school teacer.</p>
        </div>
        <div className="text-white rounded-lg bg-gradient-to-br from-slate-600 to-slate-400 px-3 ">
          <h2 className="text-5xl pt-3">Interests</h2>
          <ul className="p-3">
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
        <div className="text-white rounded-lg bg-gradient-to-br from-slate-600 to-slate-400 p-2 ">
          <h2 className="text-5xl">Skills</h2>
          <p className="p-3">description</p>
        </div>
      </div>
    </section>
  );
};

export default About;
