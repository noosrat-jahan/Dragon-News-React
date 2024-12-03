import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState({});

    const handleSubmit = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        if (name.length < 5) {
            setError({ ...error, name: "must be more than 5 character long" });
            return
        }
        const email = form.get("email")
        const photo = form.get("photo")
        const password = form.get("password")
        

        createNewUser(email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
                updateUserProfile({displayName: name, photoURL: photo})
                .then(()=>{
                    navigate("/")
                })
                .catch(error=>{
                    console.log(error);
                })
            })
            .catch(error => {
                console.log('Error: ', error.code, error.message);
            })
    }

    return (
        <div className="bg-white text-center w-6/12 mx-auto px-2 py-6">
            <h1 className="text-xl font-semibold text-[#403F3F]">Register your account</h1>
            <form onSubmit={handleSubmit} className="card-body w-[80%] mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Your Name</span>
                    </label>
                    <input
                        name="name"
                        type="text" placeholder="Enter your name" className="input input-bordered bg-[#F3F3F3]" required />
                </div>
                {
                    error.name && (
                    <label className="label text-xs text-red-500">
                        {error.name}
                    </label>
                )}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Photo URL</span>
                    </label>
                    <input
                        name="photo"
                        type="text" placeholder="Enter your photo URL" className="input input-bordered bg-[#F3F3F3]" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email address</span>
                    </label>
                    <input
                        name="email"
                        type="email" placeholder="Enter your email address" className="input input-bordered bg-[#F3F3F3]" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input
                        name="password" type="password" placeholder="Enter your password" className="input input-bordered bg-[#F3F3F3]" required />
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-3">
                        <input type="checkbox" className="checkbox" />
                        <span className="label-text text-[#706F6F]">Accept Term & Conditions</span>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-accent text-gray-100 bg-black text-lg">Register</button>
                </div>
                <h1 className="mt-3"> Already Have An Account ? <Link to="/auth/login" className="text-red-700">Login</Link></h1>
            </form>
        </div>
    );
};

export default Register;