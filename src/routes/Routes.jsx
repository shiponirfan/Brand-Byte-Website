import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import Login from "../pages/Login/Login";
import AllBrands from "../pages/AllBrands/AllBrands";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-side-ejgxztk9l-shipon-irfans-projects.vercel.app/product/${params.id}`),
      },
      {
        path: "/products/:brand_name",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-side-ejgxztk9l-shipon-irfans-projects.vercel.app/products/${params.brand_name}`),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails></ProductDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-side-ejgxztk9l-shipon-irfans-projects.vercel.app/product/${params.id}`),
      },
      {
        path: "/brands",
        element: <AllBrands></AllBrands>,
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
     
    ],
  },
]);

export default Routes;
