import React from 'react'
import cat from '../assets/cat.svg'

const NotFound: React.FC = () => {

    return (
        <>
            <div className="h-screen w-screen bg-[#f9f4ed] flex items-center justify-center text-[#2a2a2a]">
                <div className="container flex flex-col md:flex-row items-center justify-center px-5">
                    <div className="max-w-md">
                        <div className="text-5xl font-dark font-bold">404</div>
                        <p
                            className="text-2xl md:text-3xl font-light leading-normal"
                        >Sorry we couldn't find this page. </p>
                        <button className=" p-2 h-10 inline text-sm font-medium leading-5 shadow text-[#f9f4ed] transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-[#af695c] active:bg-[#af695c] hover:bg-[#814e45]">
                            <a href="/">
                                Back to homepage
                            </a>
                        </button>
                    </div>
                    <div className="max-w-lg">
                        <img src={cat} alt="cat" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default NotFound;
