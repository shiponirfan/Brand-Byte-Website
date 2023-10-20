import PropTypes from "prop-types";
import { Rating, Star } from "@smastrom/react-rating";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const MyCartCard = ({ cartItem, setCartItems, cartItems }) => {
  const { _id, carName, price, photoUrl, brandName, category, rating } =
    cartItem;
  const { user } = useContext(AuthContext);
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };
  const handleRemove = () => {
    const userEmail = user.email;
    fetch(`http://localhost:5000/addToCart/${_id}/${userEmail}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Remove Successfully",
            text: "Thanks for your support",
            icon: "success",
            confirmButtonText: "Go Back",
            buttonsStyling: false,
          });
          const remainingItems = cartItems.filter((item) => item._id !== _id);
          setCartItems(remainingItems);
        }
      });
  };
  return (
    <div className="flex gap-8 p-6 mb-4 items-center rounded-lg shadow-lg hover:shadow-brand-primary/50 duration-300 text-lg">
      <div className="w-64 h-32">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={photoUrl}
          alt={carName}
        />
      </div>
      <div className="space-y-1 w-2/5">
        <Link to={`/product/${_id}`}>
          <h2 className="font-bold text-brand-primary text-2xl font-rajdhani">
            {carName}
          </h2>
        </Link>
        <h2>
          Brand: <span className="font-bold">{brandName}</span>
        </h2>
        <h2>
          Brand: <span className="font-bold">{category}</span>
        </h2>
      </div>
      <div className="space-y-1 ">
        <h3 className="text-xl">
          Price:{" "}
          <span className="font-bold">
            ${price.slice(0, 2)},{price.slice(2, 5)}
          </span>
        </h3>
        <span className="flex items-center gap-2">
          <Rating
            style={{ maxWidth: 120 }}
            value={rating}
            itemStyles={myStyles}
            readOnly
          />
          ({rating}.0)
        </span>
      </div>
      <div className="justify-end ">
        <button
          onClick={handleRemove}
          className="bg-brand-primary hover:bg-black hover:scale-105 duration-300 text-white font-medium  text-lg  py-3 px-6 rounded-md flex justify-center items-center"
        >
          <BsFillTrashFill className="mr-1" /> Remove
        </button>
      </div>
    </div>
  );
};

MyCartCard.propTypes = {
  cartItem: PropTypes.object,
  setCartItems: PropTypes.func,
  cartItems: PropTypes.array,
};

export default MyCartCard;
