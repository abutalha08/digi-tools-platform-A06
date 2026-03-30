import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
       <div className='bg-[#101727] text-white px-6 md:px-12 lg:px-24 pt-20'>
    
    <div className='flex flex-col lg:flex-row gap-12 lg:gap-16'>
        
        
        <div className='max-w-96 space-y-4'>
            <h2 className='font-extrabold text-3xl md:text-4xl'>DigiTools</h2>
            <p className='font-normal text-[16px] text-[#FFFFFF]'>
                Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
        </div>

        {/* Links Section */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-24 w-full'>
            
            <div>
                <ul className='space-y-3'>
                    <li className='font-medium text-[18px] md:text-[20px]'>Product</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
                </ul>
            </div>

            <div>
                <ul className='space-y-3'>
                    <li className='font-medium text-[18px] md:text-[20px]'>Company</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
            </div>

            <div>
                <ul className='space-y-3'>
                    <li className='font-medium text-[18px] md:text-[20px]'>Resources</li>
                    <li>Documentation</li>
                    <li>Help Center</li>
                    <li>Community</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className='space-y-4'>
                <h5 className='font-medium text-[18px] md:text-[20px]'>Social Links</h5>
                <div className='flex gap-3 text-lg'>
                    <FaInstagram />
                    <FaFacebook />
                    <FaXTwitter />
                </div>
            </div>

        </div>
    </div>

    <hr className='my-6 border-white/20' />

    {/* Bottom Section */}
    <div className='flex flex-col md:flex-row justify-between gap-4 items-center text-center md:text-left'>
        
        <p className='text-[14px] md:text-[16px]'>
            © 2026 Digitools. All rights reserved.
        </p>

        <div className='flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-[14px] md:text-[16px]'>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
        </div>

    </div>
</div>
    );
};

export default Footer;