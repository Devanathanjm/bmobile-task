"use client";
import React from 'react';
import Link from 'next/link';

import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        // <div className='flex justify-around py-3'>
        //     <div>
        //         <img src="../images/logo.svg"></img>
        //     </div>
        //     <div className='flex align-middle'>
        //         <ul className='flex justify-between gap-10 items-center text-2xl'>
        //             <li>
        //                 <Link href="/products">Products</Link>
        //             </li>
        //             <li>
        //                 <Link href="/industry">Industry</Link>
        //             </li>
        //             <li>
        //                 <Link href="/resources">Resources</Link>
        //             </li>
        //             <li>
        //                 <Link href="/contact">Contact Us</Link>
        //             </li>
        //         </ul>
        //     </div>
        // </div>

        <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                   <img src="../images/logo.svg"></img>
                </a>

                {/* Right Side */}
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
                    >
                        <span className="sr-only">Open main menu</span>

                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeWidth="2"
                                d="M5 7h14M5 12h14M5 17h14"
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu */}
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } items-center justify-between w-full md:flex md:w-auto md:order-1`}
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-base md:space-x-8 md:flex-row md:mt-0 md:border-0 text-[16px] md:text-[18px] lg:text-2xl">

                        <li>
                            <a className="block py-2 px-3 text-black hover:text-[#007B37] bg-brand rounded-sm md:bg-transparent md:text-fg-brand md:p-0 cursor-pointer">
                                Products
                            </a>
                        </li>

                        <li>
                            <a className="block py-2 px-3 text-black hover:text-[#007B37] bg-brand rounded-sm md:bg-transparent md:text-fg-brand md:p-0 cursor-pointer">
                                Industry
                            </a>
                        </li>

                        <li>
                            <a className="block py-2 px-3 text-black hover:text-[#007B37] bg-brand rounded-sm md:bg-transparent md:text-fg-brand md:p-0 cursor-pointer">
                                Resources
                            </a>
                        </li>

                        <li>
                            <a className="block py-2 px-3 text-black hover:text-[#007B37] bg-brand rounded-sm md:bg-transparent md:text-fg-brand md:p-0 cursor-pointer">
                               Contact Us
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>




    )
}

export default Navbar