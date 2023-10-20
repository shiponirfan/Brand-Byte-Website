import { useLoaderData } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useContext, useEffect } from "react";
import { Rating, Star } from "@smastrom/react-rating";
import { BsCheck } from "react-icons/bs";
import Discount from "../../components/Discount/Discount";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const ProductDetails = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    carName,
    price,
    photoUrl,
    brandName,
    description,
    category,
    rating,
  } = product;
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  const breadCrumbs = (
    <>
      <li>
        <span>Products</span>
      </li>
      <li>
        <span>{carName}</span>
      </li>
    </>
  );

  const handleAddToCart = () => {
    const userEmail = user.email;
    fetch(`http://localhost:5000/addToCart/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        const checkCartItem = data.find((item) => item._id === _id);
        if (checkCartItem) {
          Swal.fire({
            title: "Already Added To The Cart",
            text: "Go My Cart Page To Show All The Cart",
            icon: "warning",
            confirmButtonText: "Go Back",
            buttonsStyling: false,
          });
        } else {
          const productItem = { ...product, userEmail: user.email };
          fetch("http://localhost:5000/addToCart", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(productItem),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  title: "Successfully Added To Cart",
                  text: "Go My Cart Page To Show All The Cart",
                  icon: "success",
                  confirmButtonText: "Go Back",
                  buttonsStyling: false,
                });
              }
            });
        }
      });
  };

  return (
    <div>
      <ScrollToTopOnMount />
      <Breadcrumbs
        image={photoUrl}
        name={carName}
        breadCrumbs={breadCrumbs}
      ></Breadcrumbs>
      <div className="container mx-auto px-6 lg:px-8 py-10 md:py-16 lg:py-20 xl:py-24 gap-8 flex flex-col lg:flex-row justify-between">
        <div className="lg:w-2/3">
          <div className="overflow-hidden rounded-lg">
            <img
              className="rounded-lg w-full hover:scale-105  duration-500"
              src={photoUrl}
              alt={carName}
            />
          </div>
          <div className="my-8">
            <h2 className="font-bold text-4xl md:text-5xl font-rajdhani text-brand-primary">
              {carName}
            </h2>
            <div className="flex  items-center gap-8 ">
              <h4 className="font-medium text-lg  my-2">
                Brand: <span className="font-bold">{brandName}</span>
              </h4>
              <h4 className="font-medium text-lg  my-2">
                Category: <span className="font-bold">{category}</span>
              </h4>
              <h4 className="font-medium text-lg  my-2 flex flex-col md:flex-row md:items-center gap-3">
                Rating:{" "}
                <Rating
                  style={{ maxWidth: 120 }}
                  value={rating}
                  itemStyles={myStyles}
                  readOnly
                />
              </h4>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl">Car Description</h2>
            <p className="mt-2 text-sm">{description}</p>
          </div>
          {/* Features */}
          <div className="mt-8">
            <h2 className="font-bold text-2xl">Features</h2>
            <div className="flex flex-col md:flex-row md:gap-20 mt-2">
              <ul className="text-sm">
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />{" "}
                  FUEL CONSUMPTION: CITY: 24 MPG
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  FUEL CONSUMPTION: HIGHWAY: 31 MPG
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  MEMORIZED SETTINGS INCLUDING DOOR MIRROR(S)
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  MEMORIZED SETTINGS INCLUDING STEERING WHEEL
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  MEMORIZED SETTINGS FOR 3 DRIVERS
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  DRIVER SEAT MEMORY
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  REMOTE POWER DOOR LOCKS
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  POWER WINDOWS
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  CRUISE CONTROL
                </li>
              </ul>
              <ul className="text-sm">
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  4-WHEEL ABS BRAKES
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  FRONT VENTILATED DISC BRAKES
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  1ST AND 2ND ROW CURTAIN HEAD AIRBAGS
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  PASSENGER AIRBAG
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  SIDE AIRBAG
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  BLUETOOTH WIRELESS PHONE CONNECTIVITY
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  AUDIO SYSTEM SECURITY
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  DIGITAL AUDIO INPUT
                </li>
                <li className="flex items-center">
                  <BsCheck className="text-2xl font-bold text-brand-primary" />
                  IN-DASH SINGLE CD PLAYER
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div
            className="bg-brand-primary text-white text-center rounded-lg  mb-8 bg-center bg-cover"
            style={{
              backgroundImage:
                "url(/src/assets/images/home_slider/home_slider6.jpg)",
            }}
          >
            <div className="bg-black bg-opacity-80 py-12 rounded-lg">
              <del className="">$99,000</del>
              <h2 className="font-bold text-5xl font-rajdhani ">
                ${price.slice(0, 2)},{price.slice(2, 5)}
              </h2>
              <p className="mb-3">Taxes & Licensing included</p>
              <button
                onClick={handleAddToCart}
                className="bg-brand-primary hover:bg-white hover:text-brand-primary hover:scale-105 duration-300 mx-auto text-white font-medium  text-xl  py-5 px-14 rounded-md flex justify-center items-center"
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="flow-root mb-8 hover:border-brand-primary duration-300 rounded-lg border border-gray-100 py-4 shadow-sm">
            <dl className="-my-3 divide-y  divide-gray-100 text-base font-medium">
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold ">Brand</dt>
                <dd className="text-gray-700 sm:col-span-2">{brandName}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold ">Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{carName}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold ">Category</dt>
                <dd className="text-gray-700 sm:col-span-2">{category}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold ">Price</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  ${price.slice(0, 2)},{price.slice(2, 5)}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold ">Mileage</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  122,000.00 miles
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold ">Body Type</dt>
                <dd className="text-gray-700 sm:col-span-2">Minivan</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold ">Fuel Type</dt>
                <dd className="text-gray-700 sm:col-span-2">Petrol</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold ">Transmission</dt>
                <dd className="text-gray-700 sm:col-span-2">Automatic</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold ">Drive Type</dt>
                <dd className="text-gray-700 sm:col-span-2">All-Wheel Drive</dd>
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
                To begin the car buying process, you can browse our inventory
                online and filter by your preferences. Once you&apos;ve found a
                car you like, contact our sales team to schedule a test drive or
                ask any questions you may have.
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
                lease programs. Our finance experts can help you find the best
                solution tailored to your budget and credit situation.
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
                specific terms and coverage with our sales team. Additionally,
                we often offer certified pre-owned cars with extended warranties
                for added peace of mind.
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
                Absolutely! We accept trade-ins as part of your car purchase.
                Our team can assess your vehicle&apos;s value, and the trade-in
                value can be used as a down payment or to reduce the overall
                cost of your new car.
              </p>
            </details>
          </div>
        </div>
      </div>
      <Discount></Discount>
    </div>
  );
};

export default ProductDetails;
