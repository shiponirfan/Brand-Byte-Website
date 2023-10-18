import BrandShowcase from "../../components/BrandShowcase/BrandShowcase";
import Brands from "../../components/Brands/Brands";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <Brands></Brands>
            <BrandShowcase></BrandShowcase>
        </div>
    );
};

export default Home;