import React from 'react';
import cartImg from "../assets/products/shopping-cart.png";

const NavBar = () => {
    return (
        <div  className="w-full bg-base-100 shadow">
            <div className="navbar max-w-full md:max-w-10/12 mx-auto">

                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>

                        </ul>
                    </div>
                    <a className="text-xl sm:text-3xl md:text-4xl font-bold  bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                     <img src={cartImg} alt="cart" className="w-5  h-5 cursor-pointer" />
                    <button className='font-semibold cursor-pointer' >Login</button>
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 sm:px-6 py-2 rounded-full shadow-md hover:scale-105 transition duration-300 text-sm sm:text-base">Button</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;