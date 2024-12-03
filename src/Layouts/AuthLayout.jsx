import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const AuthLayout = () => {
    return (
        <div className="bg-[#F3F3F3] font-poppins min-h-screen">
            <section className="w-11/12 mx-auto py-5">
                 <Navbar></Navbar>
            </section>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;