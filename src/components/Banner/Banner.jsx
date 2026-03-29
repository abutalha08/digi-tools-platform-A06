import React from 'react';
import circleImg from "../../assets/Rectangle.png"
import playImg from "../../assets/Play.png";
import bannerImg from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row max-w-10/12 mx-auto mt-16 gap-12 items-center'>

            {/* For Content  */}
            <div className='space-y-4 flex flex-col justify-center'>

                <div className='inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e1e7ff] self-start'>
                    <img src={circleImg} alt="circleImg" className='w-2.5 h-2.5' />

                    <p className='text-sm bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'> New: AI-Powered Tools Available</p>
                </div>
                
                <div>
                    <h2 className='font-bold text-5xl sm:text-6xl mb-4'>Supercharge Your <br />Digital Workflow</h2>
                    <p className='text-[#627382] font-normal text-[16px] sm:text-[18px]'>Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />

                        Explore Products
                    </p>
                </div>

                <div className='flex gap-4'>
                    <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 sm:px-6 py-2 rounded-full shadow-md hover:scale-105 transition duration-300 text-sm sm:text-base'>Explore Products</button>

                    <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent px-4 sm:px-6 py-2 border border-purple-700 rounded-full shadow-md hover:scale-105 transition duration-300 text-sm sm:text-base'>
                        <img src={playImg} alt="Play Icon" />
                        Watch Demo</button>
                </div>



            </div>

            {/* For Image  */}
            <div className='w-full lg:w-1/2'>

                <img className='w-full object-contain' src={bannerImg} alt="" />

            </div>

        </div>
    );
};

export default Banner;