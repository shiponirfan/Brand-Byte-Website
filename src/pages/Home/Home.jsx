import BrandShowcase from "../../components/BrandShowcase/BrandShowcase";
import BrandShowcase2 from "../../components/BrandShowcase/BrandShowcase2";
import Brands from "../../components/Brands/Brands";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <Brands></Brands>
            <BrandShowcase></BrandShowcase>
            <ChooseUs></ChooseUs>
            <BrandShowcase2></BrandShowcase2>
        </div>
    );
};

export default Home;