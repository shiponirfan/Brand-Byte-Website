import { useEffect, useState } from "react";
import BrandsCard from "./BrandsCard";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);
  return (
    <div className="container mx-auto py-24 px-5 lg:px-8">
      <div className="text-center w-1/2 mx-auto">
        <h2 className="font-rajdhani text-6xl font-bold uppercase">
          Explore Our Exquisite{" "}
          <span className="text-brand-primary">Brands Collection</span>
        </h2>
        <p className="text-lg px-10 mt-2">
          Discover a curated selection of prestigious brands, embodying quality,
          innovation, and style. Explore excellence in every product.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {brands.map((brand) => (
          <BrandsCard key={brand._id} brand={brand}></BrandsCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
