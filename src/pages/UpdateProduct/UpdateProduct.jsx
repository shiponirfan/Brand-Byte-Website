import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import image from "../../assets/images/home_slider/home_slider4.jpg";
import { Rating, Star } from "@smastrom/react-rating";
import { useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
const UpdateProduct = () => {
  const loadedProduct = useLoaderData();

  const [rating, setRating] = useState(loadedProduct.rating);
  const [brandName, setBrandName] = useState(loadedProduct.brandName);
  const [category, setCategory] = useState(loadedProduct.category);

  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#513de8",
    inactiveFillColor: "#c0b8ff",
  };
  const name = "Update Product";
  const breadCrumbs = (
    <li>
      <span>Update Product</span>
    </li>
  );
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const from = e.target;
    const carName = from.car_name.value;
    const price = from.price.value;
    const photoUrl = from.photo_url.value;
    const description = from.description.value;
    const updateProduct = {
      carName,
      price,
      description,
      photoUrl,
      brandName,
      category,
      rating,
    };

    fetch(`http://localhost:5000/product/${loadedProduct._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Product Update Successfully",
            text: "Your Product Have Been Updated",
            icon: "success",
            confirmButtonText: "Go Back",
            buttonsStyling: false,
          });
        }
      });
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Breadcrumbs
        image={image}
        name={name}
        breadCrumbs={breadCrumbs}
      ></Breadcrumbs>
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center justify-between lg:px-8 py-16 lg:py-20 xl:py-24">
        <div className="lg:w-1/2">
          <form onSubmit={handleUpdateProduct}>
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
                    defaultValue={loadedProduct.carName}
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="brand_name"
                    className="label text-sm md:text-base font-bold"
                  >
                    Brand Name
                  </label>
                  <select
                    required
                    onChange={(event) => setBrandName(event.target.value)}
                    defaultValue={loadedProduct.brandName}
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
                    defaultValue={loadedProduct.category}
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
                    className="label text-sm md:text-base font-bold "
                  >
                    Price
                  </label>
                  <input
                    required
                    type="text"
                    name="price"
                    id="price"
                    defaultValue={loadedProduct.price} 
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
                    defaultValue={loadedProduct.photoUrl}
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
                    defaultValue={loadedProduct.description}
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
                  Update Product
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2">
          <img src="/src/assets/images/bmwcar.png" alt="car" />
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
