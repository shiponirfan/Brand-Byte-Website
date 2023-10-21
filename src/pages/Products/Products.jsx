import { Link, useLoaderData, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductsCard from "./ProductsCard";
import { useEffect } from "react";
import DynamicProductsSlider from "../../components/DynamicProductsSlider";
import BrandShowcase from "../../components/BrandShowcase/BrandShowcase";
import Discount from "../../components/Discount/Discount";
import { Helmet } from "react-helmet-async";

const Products = () => {
  const products = useLoaderData();
  const param = useParams();
  const bannerBrand = param.brand_name;

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
    <div className="dark:bg-gray-900 ">
      <Helmet>
        <title>{param.brand_name} - Brand Byte</title>
      </Helmet>
      <ScrollToTopOnMount />
      <Breadcrumbs
        image={"https://i.ibb.co/cLhqKv6/home-slider3.jpg"}
        name={param.brand_name}
        breadCrumbs={breadCrumbs}
      ></Breadcrumbs>

      {products.length > 0 ? (
        <div>
          <DynamicProductsSlider
            bannerBrand={bannerBrand}
          ></DynamicProductsSlider>
          <div className="container mx-auto dark:text-white px-6 lg:px-8 py-10 md:py-16 lg:py-20 xl:py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {products.map((product) => (
              <ProductsCard key={product._id} product={product}></ProductsCard>
            ))}
          </div>
          <BrandShowcase></BrandShowcase>
          <Discount></Discount>
        </div>
      ) : (
        <div className="container mx-auto px-6 lg:px-8 text-center py-24">
          <h2 className="font-bold text-2xl md:text-5xl font-rajdhani text-brand-primary dark:text-yellow-400">
            No available products were found.
          </h2>
          <h4 className="font-medium md:text-3xl  my-2 dark:text-white">
            If you wish, you can add a product.
          </h4>
          <div className="flex gap-6 mt-4 justify-center">
            <Link to={"/addProduct"}>
              <button className="bg-brand-primary dark:hover:bg-yellow-400 dark:hover:text-black hover:bg-black hover:scale-105 duration-300 text-white font-medium  md:text-lg  py-3 px-6 rounded-md flex justify-center items-center">
                Add Product
              </button>
            </Link>
            <Link to="/">
              <button className="bg-brand-primary dark:hover:bg-yellow-400 dark:hover:text-black hover:bg-black hover:scale-105 duration-300 text-white font-medium  md:text-lg   py-3 px-6 rounded-md flex justify-center items-center">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
