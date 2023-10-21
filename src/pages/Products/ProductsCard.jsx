import PropTypes from "prop-types";
import { Rating, Star } from "@smastrom/react-rating";
import { BiCategoryAlt, BiHeartCircle, BiMoney } from "react-icons/bi";
import { Link } from "react-router-dom";
const ProductsCard = ({ product }) => {
  const { _id, carName, price, photoUrl, brandName, category, rating } =
    product;
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };
  return (
    <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col rounded-lg p-4 border group dark:hover:border-yellow-400 hover:border-brand-primary duration-300  shadow-sm shadow-indigo-100">
      <div className="overflow-hidden rounded-md">
        <img
          alt={carName}
          src={photoUrl}
          className="xl:h-56 h-40 w-full rounded-md object-cover group-hover:scale-125 duration-500"
        />
      </div>
      <div className="flex-grow flex flex-col  mt-6">
        <div className="space-y-1">
          <h2 className="font-bold font-rajdhani text-xl xl:text-3xl">
            {carName}
          </h2>
          <h3 className="xl:text-lg font-medium">
            Brand: <span className="text-brand-primary dark:text-yellow-400">{brandName}</span>
          </h3>
          <h3 className="xl:text-lg font-medium">
            Category: <span className="text-brand-primary dark:text-yellow-400">{category}</span>
          </h3>
        </div>
        <div className="mt-4 flex flex-col space-y-2 xl:space-y-0 xl:flex-row xl:items-center text-sm justify-around 2xl:gap-6 flex-grow xl:text-xs">
          <div className="sm:inline-flex flex items-center gap-2 sm:shrink-0 sm:items-center sm:gap-2 grow">
            <BiCategoryAlt className="2xl:text-xl text-lg text-brand-primary dark:text-yellow-400" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500 dark:text-white">Interior</p>

              <p className="font-medium">{category}</p>
            </div>
          </div>
          <div className="sm:inline-flex flex items-center gap-2 sm:shrink-0 sm:items-center sm:gap-2 grow">
            <BiHeartCircle className="text-xl text-brand-primary dark:text-yellow-400" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500 dark:text-white">Rating</p>

              <Rating
                style={{ maxWidth: 90 }}
                value={rating}
                itemStyles={myStyles}
                readOnly
              />
            </div>
          </div>

          <div className="sm:inline-flex flex items-center gap-2 sm:shrink-0 sm:items-center sm:gap-2 grow">
            <BiMoney className="text-xl text-brand-primary dark:text-yellow-400" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500 dark:text-white">Price</p>

              <p className="font-medium">
                ${price.slice(0, 2)},{price.slice(2, 5)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 xl:gap-6 mt-6 ">
          <div className="flex-grow">
            <Link to={`/product/${_id}`}>
              <button className="bg-brand-primary w-full dark:hover:bg-yellow-400 dark:hover:text-black hover:bg-black hover:scale-105 duration-300 text-white font-medium   2xl:text-lg  py-3 px-2 xl:px-6 rounded-md flex justify-center items-center">
                Show Details
              </button>
            </Link>
          </div>
          <div className="flex-grow">
            <Link to={`/updateProduct/${_id}`}>
              <button className="bg-brand-primary w-full dark:hover:bg-yellow-400 dark:hover:text-black hover:bg-black hover:scale-105 duration-300 text-white font-medium   2xl:text-lg  py-3 px-2 xl:px-6 rounded-md flex justify-center items-center">
                Update Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductsCard.propTypes = {
  product: PropTypes.object,
};

export default ProductsCard;
