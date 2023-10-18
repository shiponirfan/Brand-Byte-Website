import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="font-public-sans">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;