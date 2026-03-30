import React from 'react';

const TransparentPricing = () => {
    return (
        <div className='mt-28 bg-base-200 max-w-full py-20 '>
            <div className='text-center space-y-3 mb-12'>
                <h2 className='font-extrabold text-5xl text-[#101727]'>Simple, Transparent Pricing</h2>
                <p className='text-[16px] font-normal text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center'>

                {/* 1st  */}
                <div className="card w-96 bg-base-100 shadow-sm rounded-xl">
                    <div className="card-body">

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold">Starter</h2>
                            <p className='text-[16px] font-normal text-[#627382]'>Perfect for getting started</p>
                            <span className='font-black text-4xl'>$0</span ><span className=" font-normal text-[#627382]">/Month</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[16px] font-normal text-[#627382]'>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[16px] font-normal text-[#627382]'>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[16px] font-normal text-[#627382]'>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[16px] font-normal text-[#627382]'>1 project per month</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 sm:px-6 py-2 rounded-full shadow-md hover:scale-105 transition duration-300 text-sm sm:text-base btn-block">Get Started Free</button>
                        </div>
                    </div>
                </div>
                {/* 2nd  */}
                <div className="card w-96 bg-base-100 shadow-sm rounded-xl  relative  ">
                    <div className="card-body bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-xl   ">

                        <span className="badge badge-xs badge-warning text-black absolute left-1/2 -top-2 -translate-x-1/2 z-20">Most Popular</span>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold">Pro</h2>
                            <p className='text-[16px] font-normal text-white/80'>Best for professionals</p>

                            <div>
                                <span className='font-black text-4xl'>$29</span>
                                <span className="font-normal text-white/80">/Month</span>
                            </div>
                        </div>

                        <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-[16px] font-normal text-white/80'>Access to all premium tools</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-[16px] font-normal text-white/80'>Unlimited templates</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-[16px] font-normal text-white/80'>Priority support</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-[16px] font-normal text-white/80'>Unlimited projects</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-[16px] font-normal text-white/80'>Cloud sync</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-[16px] font-normal text-white/80'>Advanced analytics</span>
                            </li>

                        </ul>

                        <div className="mt-6">
                            <button className="btn bg-white text-purple-600 px-4 sm:px-6 py-2 
      border border-white rounded-full shadow-md hover:scale-105 
      transition duration-300 text-sm sm:text-base btn-block">
                                Start Pro Trial
                            </button>
                        </div>

                    </div>
                </div>

                {/* 3rd  */}
                <div className="card w-96 bg-base-100 shadow-sm rounded-xl">
                    <div className="card-body">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold">Enterprise</h2>
                            <p className='text-[16px] font-normal text-[#627382]'>For teams and businesses</p>
                            <span className='font-black text-4xl'>$99</span ><span className=" font-normal text-[#627382]">/Month</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[16px] font-normal text-[#627382]'>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[16px] font-normal text-[#627382]'>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[16px] font-normal text-[#627382]'>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[16px] font-normal text-[#627382]'>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[16px] font-normal text-[#627382]'>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[16px] font-normal text-[#627382]'>Custom branding</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 sm:px-6 py-2 rounded-full shadow-md hover:scale-105 transition duration-300 text-sm sm:text-base btn-block">Contact Sales</button>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default TransparentPricing;