import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import image from "../../assets/images/home_slider/home_slider2.jpg";
import MyCartCard from "./MyCartCard";
import Swal from "sweetalert2";
import Discount from "../../components/Discount/Discount";
const MyCart = () => {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/addToCart")
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, []);
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  const breadCrumbs = (
    <li>
      <span>My Cart</span>
    </li>
  );
  const handleCheckout = () => {
    Swal.fire({
      title: "Checkout Successfully",
      text: "Thanks for your support",
      icon: "success",
      confirmButtonText: "Go Back",
      buttonsStyling: false,
    });
  };
  return (
    <div>
      <ScrollToTopOnMount />
      <Breadcrumbs
        image={image}
        name={"My Cart"}
        breadCrumbs={breadCrumbs}
      ></Breadcrumbs>
      {cartItems.length > 0 ? (
        <div>
          <div className="container mx-auto px-6 flex gap-8 lg:px-8 py-24 ">
            <div className="w-2/3">
              {cartItems.map((cartItem) => (
                <MyCartCard
                  key={cartItem._id}
                  cartItem={cartItem}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                ></MyCartCard>
              ))}
            </div>
            <div className="w-1/3">
              <div
                className="bg-brand-primary text-white text-center rounded-lg  mb-8 bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url(/src/assets/images/home_slider/home_slider6.jpg)",
                }}
              >
                <div
                  onClick={handleCheckout}
                  className="bg-black bg-opacity-80 py-12 rounded-lg"
                >
                  <button className="bg-brand-primary hover:bg-white hover:text-brand-primary hover:scale-105 duration-300 mx-auto text-white font-medium  text-xl  py-5 px-14 rounded-md flex justify-center items-center">
                    Checkout
                  </button>
                </div>
              </div>
              <div className="flow-root mb-8 hover:border-brand-primary duration-300 rounded-lg border border-gray-100 py-4 shadow-sm">
                <dl className="-my-3 divide-y  divide-gray-100 text-base font-medium">
                  <div className="p-3 even:bg-gray-50 ">
                    <img
                      className="w-full p-2"
                      src="/src/assets/images/logo.png"
                      alt="logo"
                    />
                  </div>
                  <div className="grid p-3 text-center even:bg-gray-50">
                    <dt className="font-bold ">Our Brand</dt>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-2 text-center sm:gap-4">
                    <dt className="font-bold ">BMW</dt>
                    <dt className="font-bold ">Toyota</dt>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-2 text-center sm:gap-4">
                    <dt className="font-bold ">Audi</dt>
                    <dt className="font-bold ">Mercedes</dt>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-2 text-center sm:gap-4">
                    <dt className="font-bold ">Tesla</dt>
                    <dt className="font-bold ">Lamborghini</dt>
                  </div>
                </dl>
              </div>
              <div className="divide-y divide-gray-100 rounded-xl border hover:border-brand-primary border-gray-100 bg-white">
                <details
                  className="group p-6 [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-brand-primary">
                    <h2 className="text-lg font-medium">
                      How do I start the car buying process?
                    </h2>

                    <span className="relative h-5 w-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    To begin the car buying process, you can browse our
                    inventory online and filter by your preferences. Once
                    you&apos;ve found a car you like, contact our sales team to
                    schedule a test drive or ask any questions you may have.
                  </p>
                </details>

                <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-brand-primary">
                    <h2 className="text-lg font-medium">
                      What financing options are available?
                    </h2>

                    <span className="relative h-5 w-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    We offer a variety of financing options, including loans and
                    lease programs. Our finance experts can help you find the
                    best solution tailored to your budget and credit situation.
                  </p>
                </details>
                <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-brand-primary">
                    <h2 className="text-lg font-medium">
                      Do you provide warranties or guarantees?
                    </h2>

                    <span className="relative h-5 w-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    Yes, we provide warranties for most of our vehicles. These
                    warranties can vary, so it&apos;s essential to discuss the
                    specific terms and coverage with our sales team.
                    Additionally, we often offer certified pre-owned cars with
                    extended warranties for added peace of mind.
                  </p>
                </details>
                <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-brand-primary">
                    <h2 className="text-lg font-medium">
                      Can I trade in my current vehicle?
                    </h2>

                    <span className="relative h-5 w-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    Absolutely! We accept trade-ins as part of your car
                    purchase. Our team can assess your vehicle&apos;s value, and
                    the trade-in value can be used as a down payment or to
                    reduce the overall cost of your new car.
                  </p>
                </details>
              </div>
            </div>
          </div>
          <Discount></Discount>
        </div>
      ) : (
        <div className="container mx-auto text-center py-24">
          <h2 className="font-bold text-5xl font-rajdhani text-brand-primary">
          No available cart item were found.
          </h2>
          <h4 className="font-medium text-3xl  my-2">
          If you wish, you can add a product to cart.
          </h4>
          <div className="flex gap-6 mt-4 justify-center">
            <Link to={"/brands"}>
              <button className="bg-brand-primary  hover:bg-black hover:scale-105 duration-300 text-white font-medium  text-lg  py-3 px-6 rounded-md flex justify-center items-center">
                Show Product
              </button>
            </Link>
            <Link to="/">
              <button className="bg-brand-primary  hover:bg-black hover:scale-105 duration-300 text-white font-medium  text-lg  py-3 px-6 rounded-md flex justify-center items-center">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
