import React from 'react'
import { News } from '../../types/news'
import FeaturedNewsCard from '../FeaturedNewsCard';
import NewsCard from '../NewsCard';

interface NewsLayoutProps {
    featuredNews: News | null;
    news: News[]
}

const NewsLayout: React.FC<NewsLayoutProps> = ({ featuredNews, news }) => {

    news.shift()

    return (
        <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4'>
            <div className=' h-96 col-span-2 grid-flow-row lg:h-full md:col-span-3 lg:row-span-2'>
                <FeaturedNewsCard
                    news={featuredNews}
                />
            </div>
            {
                news.map((news, index) => (
                    <div
                        key={index}
                        className='rounded-xl '>
                        <NewsCard
                            news={news}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default NewsLayout
