import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import image from "../../assets/images/home_slider/home_slider3.jpg";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import { useEffect, useState } from "react";
const Products = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);
  const param = useParams();
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  const breadCrumbs = (
    <li>
      <span>{param.brand_name}</span>
    </li>
  );
  return (
    <div>
      <ScrollToTopOnMount />
      <Breadcrumbs
        image={image}
        name={param.brand_name}
        breadCrumbs={breadCrumbs}
      ></Breadcrumbs>
      {products.length > 0 ? (
        <div className="container mx-auto px-6 lg:px-8 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductsCard key={product._id} product={product}></ProductsCard>
          ))}
        </div>
      ) : (
        <div className="container mx-auto text-center py-24">
          <h2 className="font-bold text-5xl font-rajdhani text-brand-primary">
            No available products were found.
          </h2>
          <h4 className="font-medium text-3xl  my-2">
            If you wish, you can add a product.
          </h4>
          <div className="flex gap-6 mt-4 justify-center">
            <Link to={"/addProduct"}>
              <button className="bg-brand-primary  hover:bg-black hover:scale-105 duration-300 text-white font-medium  text-lg  py-3 px-6 rounded-md flex justify-center items-center">
                Add Product
              </button>
            </Link>
            <Link to="/updateProduct">
              <button className="bg-brand-primary  hover:bg-black hover:scale-105 duration-300 text-white font-medium  text-lg  py-3 px-6 rounded-md flex justify-center items-center">
                Update Product
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
