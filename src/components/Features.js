import React from 'react'

function Features() {
    return (
        <section className='bg-[linear-gradient(179.93deg,_#C3EAFF_0.06%,_#FFFFFF_104.79%)] py-10 overflow-x-hidden'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-15'>
                <h2 className='text-[30px] md:text-[50px] font-semibold text-black text-center leading-10' data-aos="fade-up" data-aos-duration="1000">What you get on day one</h2>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-x-5 mt-15'>

                    {/* Accuracy */}
                    <a className="mb-7 md:mb-0 bg-white w-full p-8 rounded-base shadow-xs rounded-[20px] border-2 border-[#09B054] text-center" 
         data-aos="zoom-in" data-aos-delay="100">
                        <img src='../images/features/accuracy.svg' className='mb-3 mx-auto' alt='accuracy'></img>

                        <h3 className="mb-2 text-[18px] md:text-[28px] font-semibold text-black">Accuracy </h3>

                        <p className="mb-3 text-black text-[14px] md:text-[15px]">The right unit appears on the right screen. Errors drop.</p>
                    </a>

                    {/* Speed */}
                    <a className="mb-7 md:mb-0 bg-white w-full p-8 rounded-base shadow-xs rounded-[20px] border-2 border-[#09B054] text-center"
                         data-aos="zoom-in" data-aos-delay="200">
                        <img src='../images/features/speed.svg' className='mb-3 mx-auto' alt='Speed'></img>

                        <h3 className="mb-2 text-[18px] md:text-[28px] font-semibold text-black">Speed </h3>

                        <p className="mb-3 text-black text-[14px] md:text-[15px]"> Receiving, picking and packing move faster with automatic conversion.</p>
                    </a>

                    {/* Clean purchasing  */}
                    <a className="mb-7 md:mb-0 bg-white w-full p-8 rounded-base shadow-xs rounded-[20px] border-2 border-[#09B054] text-center" 
                         data-aos="zoom-in" data-aos-delay="300">
                        <img src='../images/features/purchasing.svg' className='mb-3 mx-auto' alt='Clean purchasing'></img>

                        <h3 className="mb-4 text-[18px] md:text-[28px] font-semibold text-black leading-[119%]">Clean purchasing </h3>

                        <p className="mb-3 text-black text-[14px] md:text-[15px]"> POs match vendor packs. No odd leftovers.</p>
                    </a>

                    {/* Shorter cycle counts */}
                    <a className="bg-white w-full p-8 rounded-base shadow-xs rounded-[20px] border-2 border-[#09B054] text-center"
                         data-aos="zoom-in" data-aos-delay="400">
                        <img src='../images/features/cycle.svg' className='mb-3 mx-auto' alt='Shorter cycle 
counts'></img>

                        <h3 className="mb-3 text-[28px] font-semibold text-black leading-[119%]">Shorter cycle
                            counts</h3>

                        <p className="mb-3 text-black text-[14px] md:text-[15px]">Accounting stock stays close to physical stock.</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Features
