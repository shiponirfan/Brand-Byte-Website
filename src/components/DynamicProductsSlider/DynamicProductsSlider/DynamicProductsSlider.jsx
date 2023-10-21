import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const DynamicProductsSlider = ({ bannerBrand }) => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => {
        const getBrand = data.find((brand) => brand.brand_name === bannerBrand);
        setBrands(getBrand);
      });
  }, [bannerBrand]);
  return (
    <div className="container flex mx-auto pt-10 md:pt-16 xl:pt-20  px-5 lg:px-8">
      <div className="md:w-3/5 w-full">
        <Swiper
          style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": ".4",
            "--swiper-pagination-bullet-size": "10px",
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
              className="hero h-[402px]"
              style={{
                backgroundImage: `url(${brands?.bannerImage1})`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero h-[402px]"
              style={{
                backgroundImage: `url(${brands?.bannerImage2})`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero h-[402px]"
              style={{
                backgroundImage: `url(${brands?.bannerImage3})`,
              }}
            ></div>
          </SwiperSlide>

          <div className="absolute top-1/2 -translate-y-1/2 -right-20 group-hover:right-6 rounded-md text-xl cursor-pointer hover:bg-brand-primary hover:text-white duration-300 bg-white p-3 z-10 swiper-button-next">
            <HiOutlineArrowNarrowRight />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -left-20  group-hover:left-6 rounded-md text-xl cursor-pointer hover:bg-brand-primary hover:text-white duration-300 bg-white p-3 z-10 swiper-button-prev">
            <HiOutlineArrowNarrowLeft />
          </div>
        </Swiper>
      </div>

      <div
        className="w-1/5 hidden xl:block bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/src/assets/images/home_slider/home_slider3.jpg)",
        }}
      >
        <div className="hero-overlay flex flex-col justify-center xl:justify-between h-full bg-opacity-80 text-white text-center p-8">
          <h2 className="font-bold font-rajdhani lg:text-3xl xl:text-5xl 2xl:text-6xl uppercase">
            Find The <span className="text-yellow-500">Right Car</span> For You
          </h2>
          <p>Explore Iconic Brands</p>
          <button className="border mt-4 font-rajdhani hover:scale-105 hover:bg-brand-secondary duration-300 text-white font-medium uppercase xl:text-2xl  py-3 px-6 rounded-md flex justify-center items-center">
            Shop Now
          </button>
        </div>
      </div>
      <div className="xl:w-1/5 md:block hidden bg-brand-primary p-8 ">
        <div className=" flex flex-col justify-center xl:justify-between h-full bg-opacity-80 text-white ">
          <h2  className="font-bold font-rajdhani xl:hidden text-2xl lg:text-4xl xl:text-5xl">
            EXTRA 20% OFF EVERYDAY
          </h2>
          <h2 className="font-bold font-rajdhani hidden xl:block lg:text-3xl xl:text-5xl">
            EXTRA <br /> 20% OFF <br /> EVERYDAY
          </h2>
          <h2 className="font-bold font-rajdhani hidden xl:block text-2xl">
            IF YOU SPEND $50,00+
          </h2>
          <p className="mt-2 ">Use the unique promo code sent to your email!</p>
          <button className=" mt-4 font-rajdhani hover:scale-105   bg-black duration-300 text-white font-medium uppercase xl:text-2xl border  border-black  py-3 px-6 rounded-md flex justify-center items-center">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};
DynamicProductsSlider.propTypes = {
  bannerBrand: PropTypes.string,
};
export default DynamicProductsSlider;
