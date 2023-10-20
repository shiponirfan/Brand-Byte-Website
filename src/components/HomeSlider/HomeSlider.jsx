import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const HomeSlider = () => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": ".4",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper group"
      >
        <SwiperSlide>
          <div
            className="hero min-h-home-h"
            style={{
              backgroundImage:
                "url(/src/assets/images/home_slider/home_slider1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="container mx-auto  px-6 lg:px-28 xl:px-8 text-white">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-4xl md:text-6xl font-rajdhani font-bold uppercase">
                  Discover Iconic Brands
                </h1>
                <p className="mb-5 max-w-lg">
                  Explore iconic brands in technology, autos, and more,
                  redefining innovation and excellence, all in one place for
                  you.
                </p>
                <Link to="/brands">
                  <button className="bg-brand-primary hover:bg-brand-secondary duration-300 text-white font-medium  text-lg  py-3 px-6 rounded-md flex justify-center items-center">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-home-h"
            style={{
              backgroundImage:
                "url(/src/assets/images/home_slider/home_slider2.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="container mx-auto px-6 lg:px-28 xl:px-8 text-white">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-4xl md:text-6xl font-rajdhani font-bold uppercase">
                  The Pinnacle of Innovation
                </h1>
                <p className="mb-5 max-w-lg">
                  Experience innovations zenith with global giants, setting
                  industry standards for cutting-edge excellence. Discover the
                  future of tech and autos.
                </p>
                <Link to="/brands">
                  <button className="bg-brand-primary hover:bg-brand-secondary duration-300 text-white font-medium  text-lg  py-3 px-6 rounded-md flex justify-center items-center">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-home-h"
            style={{
              backgroundImage:
                "url(/src/assets/images/home_slider/home_slider3.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="container mx-auto px-6 lg:px-28 xl:px-8 text-white">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-4xl md:text-6xl font-rajdhani font-bold uppercase">
                  Brand Excellence Unveiled
                </h1>
                <p className="mb-5 max-w-lg">
                  Unveil celebrated brands epitomizing excellence, creating new
                  benchmarks across various industries. Experience a world of
                  brand brilliance.
                </p>
                <Link to="/brands">
                  <button className="bg-brand-primary hover:bg-brand-secondary duration-300 text-white font-medium  text-lg  py-3 px-6 rounded-md flex justify-center items-center">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-home-h"
            style={{
              backgroundImage:
                "url(/src/assets/images/home_slider/home_slider4.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="container mx-auto px-6 lg:px-28 xl:px-8 text-white">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-4xl md:text-6xl font-rajdhani font-bold uppercase">
                  Legendary Names, Exceptional Choices
                </h1>
                <p className="mb-5 max-w-lg">
                  Choose legendary brands, the embodiment of quality and
                  reliability, offering exceptional choices for all. Elevate
                  your tech, auto, and more.
                </p>
                <Link to="/brands">
                  <button className="bg-brand-primary hover:bg-brand-secondary duration-300 text-white font-medium  text-lg  py-3 px-6 rounded-md flex justify-center items-center">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-home-h"
            style={{
              backgroundImage:
                "url(/src/assets/images/home_slider/home_slider5.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="container mx-auto px-6 lg:px-28 xl:px-8 text-white">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-4xl md:text-6xl font-rajdhani font-bold uppercase">
                  Your Gateway to Top Brands
                </h1>
                <p className="mb-5 max-w-lg">
                  Step into a realm of top-tier tech, electronics, and autos -
                  where excellence meets unparalleled choice. Explore the best
                </p>
                <Link to="/brands">
                  <button className="bg-brand-primary hover:bg-brand-secondary duration-300 text-white font-medium  text-lg  py-3 px-6 rounded-md flex justify-center items-center">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="absolute hidden lg:block top-1/2 -translate-y-1/2 -right-20 group-hover:right-6 rounded-md text-2xl cursor-pointer hover:bg-brand-primary hover:text-white duration-300 bg-white p-4 z-10 swiper-button-next">
          <HiOutlineArrowNarrowRight />
        </div>
        <div className="absolute hidden lg:block top-1/2 -left-20  -translate-y-1/2 group-hover:left-6 rounded-md text-2xl cursor-pointer hover:bg-brand-primary hover:text-white duration-300 bg-white p-4 z-10 swiper-button-prev">
          <HiOutlineArrowNarrowLeft />
        </div>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
