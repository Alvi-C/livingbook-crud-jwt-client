import { Outlet } from "react-router-dom";
import DashboardNav from "./components/DashboardNav";

const DashboardPage = () => {
    return (
        <div className="container-size min-h-screen">
            <DashboardNav />
            <Outlet/>
        </div>
    );
};

export default DashboardPage;