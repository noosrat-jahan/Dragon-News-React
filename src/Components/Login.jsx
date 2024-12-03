import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {

    const { signInUser, setUser } = useContext(AuthContext)
    const [error, setError] = useState({});
    const location = useLocation()
   

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        

        signInUser(email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
                
                alert('Log in successful')
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                setError({ ...error, login: err.code })
                console.log('Error:', error.code, error.message);
            })
    }


    return (
        <div className="bg-white text-center w-6/12 mx-auto px-2 py-6">
            <h1 className="text-xl font-semibold text-[#403F3F]">Login your account</h1>
            <form onSubmit={handleSubmit} className="card-body w-[80%] mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email address</span>
                    </label>
                    <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered bg-[#F3F3F3]" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="Enter your password" className="input input-bordered bg-[#F3F3F3]" required />
                    {
                        error.login && (
                            <label className="label text-sm text-red-500">
                                {error.login}
                            </label>
                        )
                    }
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-accent text-gray-100 bg-black text-lg">Login</button>
                </div>
                <h1 className="mt-3"> Dont’t Have An Account ? <Link to="/auth/register" className="text-red-700">Register</Link></h1>
            </form>
        </div>
    );
};

export default Login;