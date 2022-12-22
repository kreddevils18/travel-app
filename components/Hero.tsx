const Hero = () => {
  return (
    <section className="pt-32 bg-gradient-to-b from-green-400 to-white">
      <div className="container mx-auto text-center">
        <h1 className="text-[4rem] font-bold leading-tight">
          Its a Gig World Out <br />
          Then, Go Explore
        </h1>
        <p className="font-light">
          We provide you always your dream places. We always make our customer
          happy by proving many choices.
        </p>
        <div className="py-4 flex items-center justify-center gap-x-5">
          <button
            type="button"
            className="bg-green-600 text-white px-4 py-2 rounded-3xl shadow-xl"
          >
            Get Started
          </button>
          <button
            type="button"
            className="bg-white shadow rounded-3xl px-4 py-2 shadow-xl"
          >
            Get Demo
          </button>
        </div>
        <div className="">
          <img src={'dashboard.png'} alt={''} className="w-2/3 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
