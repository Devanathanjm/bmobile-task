import React from 'react'
import Link from "next/link";

function Footer() {
    return (
        <section className='bg-black min-h-screen py-10'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-5'>
                    <div>
                        <img src="../images/footer-logo.png" alt="footer logo" loading="lazy" className='w-62.5 md:w-auto'></img>
                    </div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-15'>

                    {/* Contact us */}
                    <div className='mb-10 md:mb-0'>
                        <p className='text-[20px] lg:text-3xl text-[#55DD06] font-semibold mb-5'>Contact Us</p>
                        <div className='text-white text-[18px] lg:text-[24px]'>
                            <p className='mb-2'> 250 Bobwhite Ct. Suite 300 </p>
                            <p className='mb-2'>Boise, Idaho 83706.</p>
                            <p className='mb-2'>Email: <a href="mailto:info@bmobileroute.com" className="hover:text-[#55DD06] ">
                                info@bmobileroute.com
                            </a></p>
                            <p className='mb-2'>Phone: <a href="tel:+18889005667" className="hover:text-[#55DD06] ">
                                1+(888) 900-5667
                            </a></p>
                            <p className='mb-2'>Office: <a href="tel:+12083315667" className="hover:text-[#55DD06] ">
                                (208) 331-5667
                            </a></p>
                        </div>
                    </div>

                    {/* Support */}
                    <div className='mb-10 md:mb-0'>
                        <p className='text-[20px] lg:text-3xl text-[#55DD06] font-semibold mb-5'>Support</p>
                        <div className='text-white  text-[18px] lg:text-[24px]'>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/about" className="hover:text-[#55DD06]">
                                        About Us
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/blog" className="hover:text-[#55DD06]">
                                        Blog
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/contact" className="hover:text-[#55DD06]">
                                        Contact
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/request-support" className="hover:text-[#55DD06]">
                                        Request Support
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/sitemap" className="hover:text-[#55DD06]">
                                        Sitemap
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/privacy-policy" className="hover:text-[#55DD06]">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>

                    {/* Social media icons */}
                    <div>
                        <p className='text-[20px] lg:text-3xl text-[#55DD06] font-semibold mb-7'>Social Media</p>
                        <div className='flex gap-x-5'>
                            <Link href="#">
                                <img src="../images/linkedin.svg" alt='linked in' className='w-7 lg:w-auto'></img>
                            </Link>
                            <Link href="#">
                                <img src="../images/facebook.svg" alt='facebook' className='w-7 lg:w-auto'></img>
                            </Link>
                            <Link href="#">
                                <img src="../images/x.svg" alt='x' className='w-7 lg:w-auto'></img>
                            </Link>
                            <Link href="#">
                                <img src="../images/youtube.svg" alt='youtube' className='w-10 lg:w-auto'></img>
                            </Link>

                        </div>
                    </div>

                </div>

                <div className='mx-auto mt-20 md:mb-0 mb-10'>
                    <img src="../images/footer-grey-logo.png" loading="lazy" alt='logo' className='w-62.5 md:w-90  xl:w-auto mx-auto'></img>
                </div>
                <div className='mt-7 text-white text-center'>
                    <p className='text-[16px] md:text-2xl'>Copyright © bmobileroute 2025. All rights reserved</p>
                </div>
            </div>
        </section>
    )
}

export default Footer