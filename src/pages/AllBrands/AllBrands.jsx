import { useEffect } from "react";
import BrandShowcase from "../../components/BrandShowcase/BrandShowcase";
import Brands from "../../components/Brands/Brands";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Discount from "../../components/Discount/Discount";
import { Helmet } from "react-helmet-async";

const AllBrands = () => {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  return (
    <div className="dark:bg-gray-900">
      <Helmet>
        <title>Brands | Brand Byte</title>
      </Helmet>
      <ScrollToTopOnMount />
      <Brands></Brands>
      <div data-aos="fade-up" data-aos-delay="350">
        <Discount></Discount>
      </div>
      <ChooseUs></ChooseUs>
      <BrandShowcase></BrandShowcase>
    </div>
  );
};

export default AllBrands;
