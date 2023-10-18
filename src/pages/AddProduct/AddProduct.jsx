import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import image from "../../assets/images/home_slider/home_slider3.jpg"
const AddProduct = () => {
    const name = "Add Product";
    const breadCrumbs = (
        <li>
            <span>Add Product</span>
        </li>
    );
    return (
        <div>
            <Breadcrumbs image={image} name={name} breadCrumbs={breadCrumbs}></Breadcrumbs>
        </div>
    );
};

export default AddProduct;