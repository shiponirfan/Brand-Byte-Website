import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout> ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/products/:brand_name',
                element: <Products></Products>,
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.brand_name}`)
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            },
        ],
    },    
]);

export default Routes;