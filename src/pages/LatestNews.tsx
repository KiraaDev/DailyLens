import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router"
import { Categories } from "../config/category"
import { News } from "../types/news";
import axios from 'axios'
import FeaturedNewsCard from "../components/FeaturedNewsCard";

const LatestNews: React.FC = () => {

    const [news, setNews] = useState<News[]>([])
    const [featuredNews, setFeaturedNews] = useState<News | null>(null)

    const [loading, isLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const categoryParam = searchParams.get('category');

    useEffect(() => {
        isLoading(true)
        setError('')
        setNews([])
        setFeaturedNews(null)
        if (!Categories.some(category => category.tag === categoryParam)) {
            navigate('/news/latest')
        }

        const getLatestNews = async () => {

            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?q=${categoryParam === null ? 'politics' : categoryParam}&from=2025-01-24&to=2025-01-24&sortBy=popularity&pageSize=30&page=1&apiKey=${import.meta.env.VITE_API_KEY}`);

                setNews(response.data.articles)
                setFeaturedNews(response.data.articles[0])
                console.log(response.data.articles[0])
            } catch (error) {
                console.error(error)
                setError('Failed to fetch data :(')
            } finally {
                isLoading(false)
            }
        }

        getLatestNews()
    }, [categoryParam])


    const changeCategory = (category: string) => {
        navigate(`/news/latest?category=${category}`)
    }

    return (
        <div className='min-h-full flex flex-col gap-5 w-[60%] '>
            <h1 className=" text-2xl lg:text-4xl">LATEST NEWS</h1>
            <div className="flex gap-5 flex-wrap">
                {Categories.map((category, index) => (
                    <button
                        onClick={() => changeCategory(category.tag)}
                        className={categoryParam === category.tag ? "text-xs border-[1px] border-[#af695c] text-[#af695c] px-3 rounded-xl cursor-pointer md:text-sm" : "text-xs border-[1px] px-3 rounded-xl cursor-pointer md:text-sm"}
                        key={index}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            {loading && (<p>Loading...</p>)}
            {error ? <p className=" text-red-800">{error}</p> : ''}
            {/* <div>
                {
                    news.length != 0 ? (
                        news.map((news, index) => (
                            <div key={index}>
                                <p>{news.author}</p>
                            </div>
                        ))
                    ) : ''
                }
            </div> */}
            {featuredNews &&
                <FeaturedNewsCard
                    news={featuredNews}
                />
            }
        </div>
    )
}

export default LatestNews
