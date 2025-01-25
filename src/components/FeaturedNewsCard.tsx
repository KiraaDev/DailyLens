import React from 'react'
import { News } from '../types/news'

interface FeaturedNewsCardProps {
    news: News
}

const FeaturedNewsCard: React.FC<FeaturedNewsCardProps> = ({ news }) => {

    return (
        <div className="relative w-full max-w-3xl h-90 rounded-xl overflow-hidden shadow-lg">

            {/* Background Image */}
            <img
                src={news.urlToImage}
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
                    <h2 className="text-2xl font-bold">{news.title}</h2>
                    <p className="text-sm mt-2">{news.description}</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedNewsCard
