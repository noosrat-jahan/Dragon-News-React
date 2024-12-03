import { FaGithub, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {

    const {GoogleSignIn} = useContext(AuthContext)

    const handleGoogleLogin = ()=>{
        
        GoogleSignIn()
        .then((result)=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log('Error:', error.message);
        })
    }
    return (
        <div>
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className="*:w-full space-y-2">
                <button onClick={handleGoogleLogin} className="btn btn-outline text-blue-400"><FaGoogle /> Login with Google</button>
                <button className="btn btn-outline"><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;