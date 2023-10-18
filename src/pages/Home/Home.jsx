import BrandShowcase from "../../components/BrandShowcase/BrandShowcase";
import BrandShowcase2 from "../../components/BrandShowcase/BrandShowcase2";
import Brands from "../../components/Brands/Brands";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <Brands></Brands>
            <BrandShowcase></BrandShowcase>
            <BrandShowcase2></BrandShowcase2>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;