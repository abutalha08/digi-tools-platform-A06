import React from 'react';

const StatsSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-14 my-16 place-items-center py-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>

            <div>
                <h3 className='font-extrabold text-6xl text-white mb-4'>50K+</h3>
                <p className='font-normal text-[24px] text-[#FFFFFF]'>Active Users</p>
            </div>
            <div>
                <h3 className='font-extrabold text-6xl text-white mb-4'>200+</h3>
                <p className='font-normal text-[24px] text-[#FFFFFF]'>Premium Tools</p>
            </div>
            <div>
                <h3 className='font-extrabold text-6xl text-white mb-4'>4.9</h3>
                <p className='font-normal text-[24px] text-[#FFFFFF]'>Rating</p>
            </div>
            
        </div>
    );
};

export default StatsSection;