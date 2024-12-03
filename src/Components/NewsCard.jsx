import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";

const NewsCard = ({ singleNews }) => {
    
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-lg rounded-lg p-4">
                {/* Header */}
                <div className="flex items-center justify-between bg-[#F3F3F3] p-2">
                    <div className="flex items-center space-x-3">
                        <img
                            src={singleNews.author.img}
                            alt="Author"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <h2 className="text-sm font-semibold">{singleNews.author.name}</h2>
                            <p className="text-xs text-gray-500">
                                {new Date(singleNews.author.published_date).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                    <FaShareAlt className="cursor-pointer text-gray-500 hover:text-gray-700" />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-bold">
                    {singleNews.title}
                </h3>

                {/* Image */}
                <img
                    src={singleNews.thumbnail_url}
                    alt="News Thumbnail"
                    className="w-full h-48 object-cover rounded-lg mt-4"
                />

                {/* Description */}
                <p className="text-xs text-gray-500 mt-2">
                    {singleNews.details.slice(0, 100)}...
                </p>

                {/* Read More Link */}
                <Link to={`/news/${singleNews._id}`} className="text-blue-500 text-sm font-medium mt-2 block">
                    Read More
                </Link>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4">
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1">

                        <Rating 
                            emptySymbol={<FaStar className="text-yellow-200" />} 
                            fullSymbol={<FaStar className="text-orange-500" />}>
                        </Rating>

                        <span className="text-sm font-semibold">{singleNews.rating.number}</span>
                        <span className="text-xs bg-yellow-100 text-yellow-800 font-medium px-2 py-0.5 rounded-full">
                            {singleNews.rating.badge}
                        </span>
                    </div>

                    {/* Views */}
                    <div className="flex items-center space-x-1">
                        <FaEye className="text-gray-500" />
                        <span className="text-sm font-semibold">{singleNews.total_view}</span>
                    </div>
                </div>

                {/* Trending Badge */}
                {singleNews.others_info.is_trending && (
                    <div className="absolute top-8 right-14 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        Trending
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsCard;