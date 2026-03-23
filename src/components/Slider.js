import React from 'react'
import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <section className='py-14'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-11'>
          <h2 className='text-[24px] md:text-[40px] mb-3' data-aos="fade-up" data-aos-duration="1000"    >The Operators who live on the route choose bmobile</h2>
          <p className='text-[18px] md:text-3xl mb-5'>Real distribution. Real miles. Real results</p>
        </div>
        <Marquee className='mb-8 md:mb-14 cursor-pointer' direction='right' pauseOnHover>
          <div className='ml-11 overflow-hidden'> 
            <img src="../images/slider/mill.svg" alt='mill creek' className='transition-transform duration-300 hover:scale-105 w-[150px] md:w-auto'></img>
          </div>
          <div className='ml-11 overflow-hidden'>
            <img src="../images/slider/old.svg" alt='old vinema' className='transition-transform duration-300 hover:scale-105 w-[150px] md:w-auto'></img>
          </div>
          <div className='ml-11 overflow-hidden'>
            <img src="../images/slider/rodriguez.svg" alt='rodriguez' className='transition-transform duration-300 hover:scale-105 w-[150px] md:w-auto'></img>
          </div>
          <div className='ml-11 overflow-hidden'>
            <img src="../images/slider/gabriels.svg" alt='gabriels' className='transition-transform duration-300 hover:scale-105 w-[150px] md:w-auto'></img>
          </div>
           <div className='ml-11 overflow-hidden'>
            <img src="../images/slider/glacier.svg" alt='glacier' className='transition-transform duration-300 hover:scale-105 w-[150px] md:w-auto'></img>
          </div>
        </Marquee>
        <Marquee direction='left' pauseOnHover className='cursor-pointer'>
          <div className='ml-11 overflow-hidden'>
            <img src="../images/slider/lemate.png" alt='lemate' className='transition-transform duration-300 hover:scale-105 w-[150px] md:w-auto'></img>
          </div>
          <div className='ml-11 overflow-hidden'>
            <img src="../images/slider/yoloice.svg" alt='yoloice' className='transition-transform duration-300 hover:scale-105 w-[150px] md:w-auto'></img>
          </div>
          <div className='ml-11 overflow-hidden'>
            <img src="../images/slider/sinaloa.svg" alt='sinaloa' className='transition-transform duration-300 hover:scale-105 w-[150px] md:w-auto'></img>
          </div>
          <div className='ml-11 overflow-hidden'>
            <img src="../images/slider/taco.svg" alt='taco' className='transition-transform duration-300 hover:scale-105 w-[150px] md:w-auto'></img>
          </div>
           <div className='ml-11 overflow-hidden'>
            <img src="../images/slider/kurz.svg" alt='kurz' className='transition-transform duration-300 hover:scale-105 w-[150px] md:w-auto'></img>
          </div>
        </Marquee>
      </div>
    </section>
  )
}

export default Slider