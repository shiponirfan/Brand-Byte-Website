import { useEffect, useState } from "react";
import BrandsCard from "./BrandsCard";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("https://brand-shop-server-side-ejgxztk9l-shipon-irfans-projects.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);
  return (
    <div className="dark:bg-gray-900">
    <div className="container  mx-auto py-10 md:py-16 xl:py-24 px-6 lg:px-8">
      <div className="text-center dark:text-white lg:w-3/4 xl:w-1/2 mx-auto">
        <h2 data-aos="fade-up" data-aos-delay="100" className="font-rajdhani text-3xl md:text-6xl font-bold uppercase">
          Explore Our Exquisite{" "}
          <span className="text-brand-primary dark:text-yellow-400">Brands Collection</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" className="md:text-lg md:px-10 mt-2">
          Discover a curated selection of prestigious brands, embodying quality,
          innovation, and style. Explore excellence in every product.
        </p>
      </div>
      <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 md:mt-20">
        {brands.map((brand) => (
          <BrandsCard key={brand._id} brand={brand}></BrandsCard>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Brands;
