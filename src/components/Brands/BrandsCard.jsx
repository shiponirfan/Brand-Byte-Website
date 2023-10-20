import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandsCard = ({ brand }) => {
  const { brand_name, brand_image } = brand;

  return (
    <div className=" relative group flex flex-col my-4 text-white shadow-md rounded-xl bg-clip-border bg-gradient-to-t from-brand-primary via-purple-500 to-pink-500">
      <div className="relative lg:h-36 xl:h-56 mx-4 -mt-8 duration-300 group-hover:-mt-12 overflow-hidden shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-pink-400/50">
        <img
          className="w-full h-full object-cover group-hover:scale-125 duration-300"
          src={brand_image}
          alt={brand_name}
        />
      </div>
      <div className="p-6 text-center flex justify-between items-center">
        <h2 className="xl:text-4xl text-2xl font-rajdhani font-bold">
          {brand_name}
        </h2>
        <Link to={`/products/${brand_name}`}>
          <button className="bg-white hover:bg-slate-100 duration-300 text-black  font-medium  text-lg  py-2 xl:py-3 px-3 xl:px-6 rounded-md flex justify-center items-center ">
            Show Cars
          </button>
        </Link>
      </div>
    </div>
  );
};

BrandsCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandsCard;
