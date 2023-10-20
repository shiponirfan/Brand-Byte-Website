import { useEffect } from "react";
import BrandShowcase from "../../components/BrandShowcase/BrandShowcase";
import Brands from "../../components/Brands/Brands";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Discount from "../../components/Discount/Discount";

const AllBrands = () => {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  return (
    <div>
      <ScrollToTopOnMount />
      <Brands></Brands>
      <Discount></Discount>
      <ChooseUs></ChooseUs>
      <BrandShowcase></BrandShowcase>
    </div>
  );
};

export default AllBrands;
