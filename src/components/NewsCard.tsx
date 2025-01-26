import React from "react";
import { News } from "../types/news";
import default_bg from '../assets/default_bg.jpg';
import { Link } from "react-router";

interface NewsCardProps {
    news: News
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {

    return (
        <div className="group relative w-full min-h-auto rounded-xl overflow-hidden shadow-md hover:scale-105 transition-all duration-200 cursor-pointer">
            <div className=" relative h-48 w-full rounded-xl overflow-hidden shadow-lg">
                <img
                    src={news.urlToImage ? news.urlToImage : default_bg}
                    alt="background image"
                    className="w-full object-cover  opacity-85 h-full"
                />
            </div>
            <p className=" text-wrap text-[9px] font-bold p-3 overflow-hidden text-ellipsis md:text-[11px]">{news.title}</p>
            {
                news.url ? (
                    <p className=" p-3 text-xs">
                        <Link to={news.url} target="_blank" className="underline hover:font-bold">View Article</Link>
                    </p>
                ) : ''
            }
        </div>
    )
}

export default NewsCard;