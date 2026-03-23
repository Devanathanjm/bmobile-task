import React from 'react'

const Setup = () => {
    return (
        <section className='py-12 overflow-x-hidden'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10'>
                <h2 className='text-[30px] md:text-[50px] font-semibold text-center'>How you set it up once per item</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-15 md:mt-20'>
                    {/* Purchase UOM  */}
                    <div className='bg-[#9AD3FD] p-6 rounded-[20px] mb-7 md:mb-0' data-aos="fade-left"data-aos-delay="200">
                        <p className='text-[20px] md:text-[30px] font-medium mb-1'>Purchase UOM</p>
                        <p className='text-[16px] md:text-[28px] mb-12'>How your vendor ships it</p>
                        <img src="../images/setup/purchase.png" alt='Purchase UOM' loading="lazy"></img>
                    </div>
                    {/* Stock UOM */}
                     <div className='bg-[#E1DFFA] p-6 rounded-[20px] mb-7 md:mb-0' data-aos="fade-up"data-aos-delay="200">
                        <p className='text-[20px] md:text-[30px] font-medium mb-1'>Stock UOM</p>
                        <p className='text-[16px] md:text-[28px] mb-5'>How you count it on the shelf</p>
                        <img src="../images/setup/stock.png" className='h-[90] mx-auto' alt='Stock UOM' loading="lazy"></img>
                    </div>
                    {/* Sell UOM */}
                     <div className='bg-[#128BE1] p-6 rounded-[20px]' data-aos="fade-right"data-aos-delay="200">
                        <p className='text-[20px] md:text-[30px] font-medium mb-1 text-white'>Sell UOM</p>
                        <p className='text-[16px] md:text-[28px] mb-12 text-white'>How customers order it</p>
                        <img src="../images/setup/sell.png" alt='Sell UOM' loading="lazy"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Setup