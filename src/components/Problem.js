import React from 'react'

const Problem = () => {
    return (
        <section className="bg-[linear-gradient(178.86deg,#B7E4C7_-64.68%,#FFFFFF_86.13%)] min-h-screen py-10 overflow-x-hidden">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className='text-[30px] md:text-[50px] text-black mb-10 font-semibold text-center' data-aos="fade-up" data-aos-duration="1000">The problem we fix</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div>
                        <a href="#" className="flex flex-col items-center bg-neutral-primary-soft p-6 border-2 border-[#23AE31] rounded-[10px] shadow-xs md:flex-row md:max-w-xl transition-transform duration-300 hover:scale-105">
                            <img className="object-cover w-full rounded-base xs:h-auto md:h-[140] md:w-48 mb-4 md:mb-0" src="../images/problem/case.png" loading="lazy" alt="case" />
                            <div className="flex flex-col justify-between md:p-4 leading-normal">
                                <p className="mb-6 text-[18px] text-black">“Case vs. each” mismatches: wrong picks, short trucks, odd credits.</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="#" className="flex flex-col items-center bg-neutral-primary-soft p-6 border-2 border-[#23AE31] rounded-[10px] shadow-xs  md:flex-row md:max-w-xl transition-transform duration-300 hover:scale-105">
                            <img className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0" src="../images/problem/book.png" alt="book" loading="lazy" />
                            <div className="flex flex-col justify-between md:p-4 leading-normal">

                                <p className="mb-6 text-[18px] text-black">Book vs. shelf gaps: cycle counts balloon and month-end turns manual.</p>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="#" className="flex flex-col items-center bg-neutral-primary-soft p-6 border-2 border-[#23AE31] rounded-[10px] shadow-xs md:flex-row md:max-w-xl transition-transform duration-300 hover:scale-105">
                            <img className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0" src="../images/problem/duplicate.png" alt="duplicate"  loading="lazy"/>
                            <div className="flex flex-col justify-between md:p-4 leading-normal">

                                <p className="mb-6 text-[18px] text-black">Duplicate SKUs for the same item in different packs: confusion and double counting.</p>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="#" className="flex flex-col items-center bg-neutral-primary-soft transition-transform duration-300 hover:scale-105 p-6 border-2 border-[#23AE31] rounded-[10px] shadow-xs  md:flex-row md:max-w-xl">
                            <img className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0" src="../images/problem/slower.png" alt="slower"  loading="lazy"/>
                            <div className="flex flex-col justify-between md:p-4 leading-normal">

                                <p className="mb-6 text-[18px] text-black">Slower ops: people doing math at the dock, on the picker screen, and on the route sheet</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='max-w-[982] mx-auto mt-12 text-center'>
                    <p className='text-[20px] md:text-[28px] text-black'>Multi-UOM tracking is the proven fix. It sets a base unit, links related units with conversions, and lets you choose the default unit for buying, stocking, picking, and selling. </p>
                </div>
                <div>
                    <img src="../images/problem/multi-uom-tracking.png" loading="lazy" className='w-[1094] mx-auto text-center'></img>
                </div>
            </div>
        </section>
    )
}

export default Problem
