import React from 'react';

const Workflow = () => {
    return (

        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white space-y-5 max-w-full mx-auto text-center py-16'>
            <h2 className='font-extrabold text-4xl text-white'>Ready to Transform Your Workflow?</h2>
            <p className='font-normal text-[16px] text-[#FFFFFF]'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            <div className='flex gap-4 items-center justify-center'>
                <button className="btn bg-white text-purple-600 px-4 sm:px-6 py-2 
      border border-white rounded-full shadow-md hover:scale-105 
      transition duration-300 text-sm sm:text-base ">Explore Products</button>

                <button className='text-white bg-transparent border-2 border-white rounded-full px-4 sm:px-6 py-2 shadow-md hover:scale-105 
      transition duration-300 text-sm sm:text-base'>View Pricing</button>
            </div>
            <p className='font-normal text-[16px] text-[#FFFFFF]'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>

    );
};

export default Workflow;