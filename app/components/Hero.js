function Hero() {
  return (
    <section
      id="home"
      className="w-full flex py-[40px] px-[30px] bg-hero-background bg-cover"
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          <span>Bridging</span>
          <br />
          <span className="whitespace-nowrap relativepr-10">
            Dreams and Reality
          </span>
          <br />
          <span>with Code.</span>
        </h1>
        <p className="text-white text-sm md:text-lg leading-8 pt-6 max-w-md">
          Turning dreams into reality, using code to seamlessly bridge our
          aspirations with everyday experiences.
        </p>
      </div>
    </section>
  );
}

export default Hero;
