import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";


const CategoryWiseNews = () => {

    const { data: news } = useLoaderData()
    

    return (
        <div>
            <h1 className="mb-2 font-semibold text-lg">Dragon News Home</h1>
            <h1><span className="font-semibold">{news.length}</span> News Found in this category.</h1>
            <div className="space-y-5">
                {
                    news.map(singleNews=> <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryWiseNews;