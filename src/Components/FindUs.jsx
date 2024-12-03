import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const FindUs = () => {
    return (
        <div className="mt-4">
            <h2 className="font-semibold mb-3">Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <Link to="https://www.facebook.com/bbcnews/" target="blank" className="btn join-item justify-start"><span className="text-blue-700 mr-2"><FaFacebook></FaFacebook></span> Facebook</Link>
                <Link to="https://www.forbes.com/sites/shephyken/2022/10/09/the-power-of-instagram/" target="blank"className="btn join-item justify-start"><span className="text-pink-700 mr-2"><FaInstagram></FaInstagram></span> Instagram</Link>
                <Link to="https://help.x.com/en/using-x/how-to-post" target="blank" className="btn join-item justify-start"><span className="text-blue-400 mr-2"><FaTwitter></FaTwitter></span> Twitter</Link>
            </div>
        </div>
    );
};

export default FindUs;