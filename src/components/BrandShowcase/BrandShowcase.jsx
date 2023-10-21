import { Link } from "react-router-dom";
const BrandShowcase = () => {
  return (
    <div className="bg-blue-600/10 dark:bg-blue-950 py-10 dark:text-white">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center ">
        <div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl lg:text-6xl font-bold font-rajdhani uppercase">
            <span className="text-brand-primary dark:text-yellow-400">Premier Auto</span> <br />{" "}
            Brand Showcase
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="max-w-lg mt-4 text-base">
            Explore an exclusive collection of the finest and most celebrated
            car brands, setting the benchmark for excellence and innovation.
          </p>
          <Link to="/brands">
            <button data-aos="fade-up" data-aos-delay="300" className="bg-brand-primary hover:bg-brand-secondary duration-300 text-white font-medium  text-lg mt-4 py-3 px-6 rounded-md flex justify-center items-center">
              More Details
            </button>
          </Link>
        </div>
        <div className="md:w-2/4 overflow-hidden">
          <img data-aos="fade-left" data-aos-delay="600" data-aos-offset="200" src="https://i.ibb.co/L1xWKmc/bmwcar.png" alt="BMW Car" />
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;
