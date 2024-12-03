import { Link } from "react-router-dom";
import usericon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)

    return (
        <div className="flex justify-between items-center">
            <div>{user && user.displayName}</div>
            <div className="space-x-4 ">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="flex items-center gap-4">
                <div>
                    {
                        user && user?.email ? <img className="w-16 h-16 rounded-full" src={user.photoURL} alt="" /> : <img src={usericon} alt="" />
                    }
                </div>

                {
                    user ?
                        <Link to="/auth/login" onClick={logOutUser} className="bg-[#403F3F] text-base-100 px-5 py-2 shadow-xl rounded-sm font-semibold ">LogOut</Link>
                        :
                        <Link to="/auth/login" className="bg-[#403F3F] text-base-100 px-5 py-2 shadow-xl rounded-sm font-semibold ">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;