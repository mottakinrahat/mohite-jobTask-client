import React from 'react';
import bgImage from '../../assets/Banner/banner BG.png'

const Banner = () => {
    return (
        <div>
            <div className="relative">
                <div className="h-screen w-[1280px] bg-cover bg-center" style={{ backgroundImage: `url('${bgImage}')` }}>
        
                    <div className="flex items-center justify-center h-screen">
                        <div className="max-w-md px-6 mr-[600px] text-white">
                            <h1 className="text-6xl text-pink-600 font-bold mb-6">Manage Your Task with Mohite Consultancy Services !</h1>
                            <p className="text-lg text-black mb-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-blue-600">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;