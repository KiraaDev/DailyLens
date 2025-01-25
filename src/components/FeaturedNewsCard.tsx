import React from 'react'


const FeaturedNewsCard: React.FC = () => {
    
    return (
        <div className="relative w-full max-w-3xl h-90 rounded-xl overflow-hidden shadow-lg">

            {/* Background Image */}
            <img
                src={'https://gizmodo.com/app/uploads/2025/01/Disney-Experiences-Epcot-International-Festival-of-the-Arts-Artists-Instagram.jpg'}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Text Content */}
            <div className="relative z-20 p-5 flex flex-col justify-center h-full text-white">
                <div className=' absolute top-0 left-0 bg-red-500 px-3 font-black'>
                    <p>FEATURED NEWS</p>
                </div>
                <h2 className="text-2xl font-bold">{'sdf'}</h2>
                <p className="text-sm mt-2">{'sdf'}</p>
            </div>
        </div>
    )
}

export default FeaturedNewsCard
