
const BrandShowcase = () => {
    return (
        <div className="bg-blue-600/10 py-10">
      <div className="container mx-auto px-5 lg:px-8 flex justify-between items-center ">
        <div>
          <h2 className="text-6xl font-bold font-rajdhani uppercase">
            <span className="text-brand-primary">Premier Auto</span> <br />{" "}
            Brand Showcase
          </h2>
          <p className="max-w-lg mt-4 text-base">
            Explore an exclusive collection of the finest and most celebrated
            car brands, setting the benchmark for excellence and innovation.
          </p>
        </div>
        <div>
          <img src="/src/assets/images/bmwcar.png" alt="BMW Car" />
        </div>
      </div>
    </div>
    );
};

export default BrandShowcase;