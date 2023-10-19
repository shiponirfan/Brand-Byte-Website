import BrandShowcase from "../../components/BrandShowcase/BrandShowcase";
import Brands from "../../components/Brands/Brands";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Discount from "../../components/Discount/Discount";

const AllBrands = () => {
  return (
    <div>
      <Brands></Brands>
      <Discount></Discount>
      <ChooseUs></ChooseUs>
      <BrandShowcase></BrandShowcase>
    </div>
  );
};

export default AllBrands;
