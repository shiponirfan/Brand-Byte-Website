const BrandShowcase2 = () => {
  return (
    <div className="bg-blue-600/10 lg:py-24 md:py-20 py-14">
      <div className="container mx-auto px-6 lg:px-8 overflow-hidden relative lg:flex lg:items-center">
        <div className="">
          <h2 className="md:text-5xl px-14 lg:px-0 text-2xl text-center mb-8 lg:mb-0 lg:text-left lg:text-5xl xl:text-6xl font-bold font-rajdhani uppercase">
            WE MAKE YOUR VEHICLE
            <span className="text-brand-primary ml-2 lg:ml-0 ">
              PERFORM BETTER
            </span>
          </h2>
        </div>
        <div className="flex items-center gap-8 lg:pl-20">
          <img
            src="/src/assets/images/home_slider/home_slider6.jpg"
            className="w-1/2 rounded-lg"
            alt="Car"
          />
          <div>
            <img
              src="/src/assets/images/home_slider/home_slider4.jpg"
              className="mb-8 rounded-lg"
              alt="Car"
            />
            <img
              src="/src/assets/images/home_slider/home_slider3.jpg"
              className="rounded-lg"
              alt="Car"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase2;
