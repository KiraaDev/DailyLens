import React from 'react'
import { News } from '../types/news'
import default_bg from '../assets/default_bg.jpg';

interface FeaturedNewsCardProps {
    news: News | null
}

const FeaturedNewsCard: React.FC<FeaturedNewsCardProps> = ({ news }) => {

    return (
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">

            {/* Background Image */}
            <img
                src={news?.urlToImage ? news.urlToImage : default_bg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-85"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Text Content */}
            <div className="relative z-20 p-5 flex flex-col justify-center h-full text-white">
                <div className=' absolute top-0 left-0 bg-red-500 px-3 font-black'>
                    <p>FEATURED NEWS</p>
                </div>
                <div className='absolute bottom-0 left-0 p-5'>
                    <div className='flex gap-5 lg:gap-10'>
                        <p className='text-xs'>{news?.author}</p>
                        <p className="text-xs">{news?.publishedAt ? new Date(news.publishedAt).toDateString() : "N/A"}</p>
                    </div>
                    <h2 className="text-sm font-bold lg:text-2xl">{news?.title}</h2>
                    <p className="hidden mt-2 md:text-sm md:block">{news?.description}</p>
                    {news?.url ?
                        <button className="mt-3 p-2 px-3 h-10 inline text-sm font-medium leading-5 shadow text-[#f9f4ed] transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-[#af695c] active:bg-[#af695c] hover:bg-[#814e45]">
                            <a href={news?.url} target='_blank'>View Article</a>
                        </button>
                        : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedNewsCard
