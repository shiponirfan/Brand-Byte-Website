import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Rating, Star } from "@smastrom/react-rating";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const AddProduct = () => {
  const [rating, setRating] = useState(0);
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");

  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#513de8",
    inactiveFillColor: "#c0b8ff",
  };
  const name = "Add Product";
  const breadCrumbs = (
    <li>
      <span>Add Product</span>
    </li>
  );
  const handleAddProduct = (e) => {
    e.preventDefault();
    const from = e.target;
    const carName = from.car_name.value;
    const price = from.price.value;
    const photoUrl = from.photo_url.value;
    const description = from.description.value;
    const addedProduct = {
      carName,
      price,
      description,
      photoUrl,
      brandName,
      category,
      rating,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          from.reset();
          setRating(0);
          Swal.fire({
            title: "Product Added Successfully",
            text: "Your Product Have Been Added",
            icon: "success",
            confirmButtonText: "Go Back",
            buttonsStyling: false,
          });
        }
      });
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Helmet>
        <title>Add Product | Brand Byte</title>
      </Helmet>
      <Breadcrumbs
        image={'https://i.ibb.co/cLhqKv6/home-slider3.jpg'}
        name={name}
        breadCrumbs={breadCrumbs}
      ></Breadcrumbs>
      <div className="container  mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center justify-between lg:px-8 py-16 lg:py-20 xl:py-24">
        <div className="lg:w-1/2">
          <form  data-aos="fade-right" data-aos-delay="100" onSubmit={handleAddProduct}>
            <div className="">
              <div className="flex justify-between gap-6">
                <div className="w-1/2">
                  <label
                    htmlFor="car_name"
                    className="label text-sm md:text-base font-bold"
                  >
                    Car Name
                  </label>
                  <input
                    required
                    type="text"
                    name="car_name"
                    id="car_name"
                    className="input input-bordered input-primary focus:outline-none w-full dark:bg-gray-900 dark:border-white"
                    placeholder="Enter Car Name"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="brand_name"
                    className="label text-sm md:text-base font-bold "
                  >
                    Brand Name
                  </label>
                  <select
                    required
                    onChange={(event) => setBrandName(event.target.value)}
                    defaultValue={brandName}
                    className="select select-primary w-full focus:outline-none dark:bg-gray-900 dark:border-white"
                    id="brand_name"
                  >
                    <option value="">Choose Car Brand</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Lamborghini">Lamborghini</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between gap-6">
                <div className="w-1/2">
                  <label
                    htmlFor="category"
                    className="label text-sm md:text-base font-bold"
                  >
                    Select Category
                  </label>
                  <select
                    required
                    onChange={(event) => setCategory(event.target.value)}
                    className="select select-primary w-full focus:outline-none dark:bg-gray-900 dark:border-white"
                    id="category"
                  >
                    <option value="">Choose Car Category</option>
                    <option value="Sedans">Sedans</option>
                    <option value="LuxuryCar">Luxury Car</option>
                    <option value="HybridVehicles">Hybrid Vehicles</option>
                    <option value="SUVsAndCrossovers">
                      SUVs and Crossovers
                    </option>
                    <option value="ElectricVehicles">
                      Electric Vehicles (EVs)
                    </option>
                    <option value="ClassicVintageCars">
                      Classic and Vintage Cars
                    </option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="price"
                    className="label text-sm md:text-base font-bold"
                  >
                    Price
                  </label>
                  <input
                    required
                    type="text"
                    name="price"
                    id="price"
                    className="input input-bordered input-primary focus:outline-none w-full dark:bg-gray-900 dark:border-white"
                    placeholder="$ Price"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-6">
                <div className="grow">
                  <label
                    htmlFor="photo_url"
                    className="label text-sm md:text-base font-bold"
                  >
                    Image URL
                  </label>
                  <input
                    required
                    type="text"
                    name="photo_url"
                    id="photo_url"
                    className="input input-bordered input-primary focus:outline-none w-full dark:bg-gray-900 dark:border-white"
                    placeholder="Past Car Photo URL"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-6">
                <div className="grow">
                  <label
                    htmlFor="description"
                    className="label text-sm md:text-base font-bold"
                  >
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="textarea textarea-primary w-full focus:outline-none dark:bg-gray-900 dark:border-white"
                    placeholder="Add Description"
                  ></textarea>
                </div>
              </div>
              <div className="grow flex items-center rounded-lg py-4 mb-2 gap-2 ">
                <label
                  htmlFor="car_name"
                  className="text-xs text-center  md:text-base font-bold"
                >
                  Give Rating Here
                </label>

                <Rating
                  style={{ maxWidth: 250 }}
                  itemStyles={myStyles}
                  value={rating}
                  onChange={setRating}
                />
              </div>
              <div>
                <button className="bg-brand-primary dark:hover:bg-yellow-400 dark:hover:text-black hover:bg-black duration-300 text-white font-medium  text-lg  py-3 px-6 rounded-md flex justify-center items-center w-full">
                  Add Product
                </button>
              </div>
            </div>
          </form>
        </div>
        <div  className="lg:w-1/2">
          <img data-aos="fade-left" data-aos-delay="200" src="https://i.ibb.co/ngq6yhF/black-bmw-6.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
