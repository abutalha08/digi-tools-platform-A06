import React from 'react';
import userImg from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import rocketImg from "../../assets/rocket.png";

const GettingStarted = () => {
    return (
        <div>
            <div className='text-center space-y-3 mb-8'>
                <h2 className='font-extrabold text-5xl text-[#101727]'>Get Started in 3 Steps</h2>
                <p className='text-[16px] font-normal text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className=' bg-base-100 rounded-lg shadow-2xl text-center space-y-4 py-16  relative'>

                    <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-3 rounded-full w-10 h-10 text-base flex items-center justify-center absolute right-4 top-4'>01</p>
                    <img src={userImg} alt="User Image" className='mx-auto' />
                    <h4 className='font-bold text-2xl text-[#101727]'>Create Account</h4>
                    <p className='text-[16px] font-normal text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>

                </div>
                <div className=' bg-base-100 rounded-lg shadow-2xl text-center space-y-4 py-16 relative'>

                    <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-3 rounded-full w-10 h-10 text-base flex items-center justify-center absolute right-4 top-4'>02</p>
                    <img src={packageImg} alt="User Image" className='mx-auto' />
                    <h4 className='font-bold text-2xl text-[#101727]'>Choose Products</h4>
                    <p className='text-[16px] font-normal text-[#627382]'>Browse our catalog and select the tools that fit your needs</p>

                </div>
                <div className=' bg-base-100 rounded-lg shadow-2xl text-center space-y-4 py-16  relative'>

                    <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-3 rounded-full w-10 h-10 text-base flex items-center justify-center absolute right-4 top-4'>03</p>
                    <img src={rocketImg} alt="User Image" className='mx-auto' />
                    <h4 className='font-bold text-2xl text-[#101727]'>Start Creating</h4>
                    <p className='text-[16px] font-normal text-[#627382]'>Download and start using your premium tools immediately.</p>

                </div>

            </div>
        </div>
    );
};

export default GettingStarted;