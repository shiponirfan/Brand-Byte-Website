import BrandShowcase from "../../components/BrandShowcase/BrandShowcase";
import BrandShowcase2 from "../../components/BrandShowcase/BrandShowcase2";
import Brands from "../../components/Brands/Brands";
import Discount from "../../components/Discount/Discount";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import ChooseUs from "./../../components/ChooseUs/ChooseUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <Brands></Brands>
      <BrandShowcase></BrandShowcase>
      <ChooseUs></ChooseUs>
      <Discount></Discount>
      <BrandShowcase2></BrandShowcase2>
      <GetInTouch></GetInTouch>
      <ToastContainer />
    </div>
  );
};

export default Home;
