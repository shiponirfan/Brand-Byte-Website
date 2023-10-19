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
    <div className="flex flex-col rounded-lg p-4 border group  hover:border-brand-primary duration-300  shadow-sm shadow-indigo-100">
      <div className="overflow-hidden rounded-md">
        <img
          alt={carName}
          src={photoUrl}
          className="h-56 w-full rounded-md object-cover group-hover:scale-125 duration-500"
        />
      </div>
      <div className="flex-grow flex flex-col  mt-6">
        <div className="space-y-1">
          <h2 className="font-bold font-rajdhani text-3xl">{carName}</h2>
          <h3 className="text-lg font-medium">
            Brand: <span className="text-brand-primary">{brandName}</span>
          </h3>
          <h3 className="text-lg font-medium">
            Category: <span className="text-brand-primary">{category}</span>
          </h3>
        </div>
        <div className="mt-4 flex items-center justify-around gap-6 flex-grow ">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 grow">
            <BiCategoryAlt className="text-xl text-brand-primary" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Category</p>

              <p className="font-medium">{category}</p>
            </div>
          </div>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 grow">
            <BiHeartCircle className="text-xl text-brand-primary" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Rating</p>

              <Rating
                style={{ maxWidth: 90 }}
                value={rating}
                itemStyles={myStyles}
                readOnly
              />
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 grow">
            <BiMoney className="text-xl text-brand-primary" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Price</p>

              <p className="font-medium">${price.slice(0, 2)},{price.slice(2, 5)}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-6 mt-6 ">
          <div className="flex-grow">
            <Link to={`/product/${_id}`}>
              <button className="bg-brand-primary w-full hover:bg-black hover:scale-105 duration-300 text-white font-medium  text-lg  py-3 px-6 rounded-md flex justify-center items-center">
                Show Details
              </button>
            </Link>
          </div>
          <div className="flex-grow">
            <Link to={`/updateProduct/${_id}`}>
              <button className="bg-brand-primary w-full hover:bg-black hover:scale-105 duration-300 text-white font-medium  text-lg  py-3 px-6 rounded-md flex justify-center items-center">
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
