import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <div
      className="hero bg-fixed"
      style={{ backgroundImage: "url(https://i.ibb.co/dkrYh7j/discount.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="container mx-auto px-5 py-20 md:py-24 xl:py-36 text-center lg:px-8 text-white">
        <div className="max-w-5xl mx-auto">
          <h1 data-aos="fade-up" data-aos-delay="100" className="mb-5 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-rajdhani font-bold uppercase">
            Discount up to 30% only this month for new member
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="mb-5 max-w-lg lg:max-w-2xl mx-auto">
            Explore iconic brands in technology, autos, and more, redefining
            innovation and excellence, all in one place for you.
          </p>
          <Link to="/brands">
            <button data-aos="fade-up" data-aos-delay="300" className="bg-white text-black hover:bg-brand-secondary duration-300 hover:text-white font-medium mx-auto  text-lg  py-3 px-6 rounded-md flex justify-center items-center">
              Get Discount
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discount;
