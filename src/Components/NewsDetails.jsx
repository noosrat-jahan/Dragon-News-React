import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";
import RightContent from "./MainContent/RightContent";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
    const news = useLoaderData()
    const DetailedNews = news.data[0]
    
    return (
        <div>
            <Header></Header>
            <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-5 mb-10">
                <section className="col-span-9">
                    <h1 className="font-semibold text-lg">Dragon News</h1>
                    <div className="border border-gray-300 p-5 rounded mt-4 space-y-5 shadow-md">
                        <img src={DetailedNews.image_url
                        } alt="" />
                        <h1 className="font-bold text-xl">{DetailedNews.title}</h1>
                        <p>{DetailedNews.details}</p>
                        <Link to={`/category/${DetailedNews.category_id}`} className="bg-[#D72050] p-2 text-white rounded-sm flex items-center
                         gap-3 w-1/3"><FaArrowLeft></FaArrowLeft> All news in this category</Link>
                    </div>
                </section>
                <section className="col-span-3">
                    <RightContent></RightContent>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;