import React from 'react'

function Timeline() {
    return (
        <section className='bg-[#D3F8E0] py-12 overflow-x-hidden'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className='text-[30px] md:text-[50px] font-semibold text-center mb-3' data-aos="fade-up" data-aos-duration="1000">Where it goes wrong in real life</h2>
                <p className='text-[18px] md:text-[30px] text-center'>Item: Sparkling Tea 500 ml</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-15 mt-15 md:mt-20'>

                    <div>
                        <ol className="relative pl-10">

                            {/* Single continuous dashed line */}
                            <div className="absolute left-2 top-8 bottom-0 border-l-4 border-dashed border-green-300"></div>

                            {[
                                "Reality in the field:",
                                "Sales rep enters 3 Packs of 6 for Store A",
                                "Another rep enters 10 Each for Store B",
                                "Warehouse reads the first line as 3 Each by mistake",
                                "Pick list prints mixed units and no one notices",
                                "Truck leaves short by 14 bottles",
                                "Store A complains, Store B gets an odd credit",
                                "Month end shows 2 cases on hand but the floor has only 1 case and 10 loose"
                            ].map((text, index) => (

                                <li key={index} className="mb-8 relative">

                                    {/* No dot for first item */}
                                    {index !== 0 && (
                                        <>
                                            {/* Static Dot */}
                                            <div className="absolute left-[-36px] top-2 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>

                                            {/* Animated Dot */}
                                            <div
                                                className="absolute left-[-36px] top-2 w-4 h-4 rounded-full bg-green-500 animate-pulse-dot"
                                                style={{ animationDelay: `${(index - 1) * 1.5}s` }}
                                            ></div>
                                        </>
                                    )}

                                    <p className={`text-[16px] md:text-[24px] ${index === 0 ? "font-semibold" : ""}`}>
                                        {text}
                                    </p>

                                </li>
                            ))}
                        </ol>

                        <div className='mb-10 md:mb-0'>
                            <button type="button" className="text-white bg-[#DB3636] box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-full text-[16px] md:text-[20px] px-4 py-2.5 focus:outline-none">What failed</button>
                        </div>
                    </div>

                    <div className=''>
                       <img src='../images/sparkling.png' alt='sparkling'></img>
                    </div>
                </div>
                <div className='mt-10'>
                    <p className='text-[20px] md:text-[30px] text-black'>
                        The system did not convert order quantity into right Units of Measure, so “Pack” and “Each” were treated like different items. The pick list was not unit-aware, so the team picked the wrong amount. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Timeline