import React from 'react'

const Hero = () => {
    return (
        <section className="bg-[url('/images/hero-banner.png')] bg-cover bg-center md:h-[680] md:pt-16 md:pb-20 pt-10 overflow-hidden">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-[949] text-white mx-auto text-center py-14'>
                <h1 className='text-[36px] md:text-[70px] leading-[132%] font-semibold mb-7'> <span className='bg-[linear-gradient(90deg,#71BF44_16.83%,#6FC1FF_67.79%,#71BF44_100%)] bg-clip-text text-transparent' data-aos="fade-up" data-aos-delay="200"> Inventory that speaks</span>  your
                    units at every stage</h1>
                <p className='text-[20px] md:text-[25px] max-w-[718] mx-auto mb-7 leading-[144%]' data-aos="fade-left" data-aos-duration="250">When units are clear, mistakes drop, cycle counts shrink, and profit improves.</p>
                <div className='text-[16px] md:text-[18px] max-w-[797] mx-auto mb-9 border border-[#1ECF6A] rounded-[15px] p-3'>
                    <span data-aos="zoom-in-up" data-aos-duration="250"> Buy in one unit, stock in another, sell in a third. We convert it for you so counts stay right and orders move fast.</span>
                </div>
                <button className='bg-[#007B37] border border-[#00FF88] text-[14px] md:text-[17px] p-3 rounded-[5px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-105' data-aos="fade-down" data-aos-duration="200">Request a Demo</button>
               
            </div>
            </div>
        </section>
    )
}

export default Hero