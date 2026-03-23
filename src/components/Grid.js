import React from 'react'

function Grid() {
  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div>

          <h2 className="text-[30px] md:text-[50px] font-medium mb-5">
            <span className="relative inline-block pt-3">
              <span className="absolute top-0 left-0 w-full h-1 bg-green-500"></span>
              The same
            </span>{" "}
            situation made right with bMobile
          </h2>
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <div className='mb-5'>
              <img className="object-cover w-full lg:h-91.25 xl:h-[277px] rounded-base mb-4 md:mb-0" src="../images/bmobile.png" alt="bmobile"   />
            </div>
            <div className='flex flex-col lg:flex-row gap-x-2.5 lg:gap-y-0 gap-y-5'>
              <div className='bg-[#0F5045] p-6'>
                <p className='text-[#1ECF6A] text-[20px] md:text-[30px] font-medium mb-4'>Setup for the item:</p>
                <p className='text-[16px] md:text-[20px] text-white mb-3'>Purchase UOM: Case 24</p>
                <p className='text-[16px] md:text-[20px] text-white mb-3'>Stock UOM: Case</p>
                <p className='text-[16px] md:text-[20px] text-white mb-3'>Sell UOM: Each and Pack 6</p>
                <p className='text-[16px] md:text-[20px] text-white mb-3'>Conversions: 1 Case = 24 Each. 1 Pack = 6 Each</p>
              </div>
              <div className='bg-[#F5D5B5] p-6'>
                <p className='text-black text-[20px] md:text-[30px] font-medium mb-4'>Same Demand </p>
                <p className='text-[16px] md:text-[20px] text-black mb-3 font-medium'>Presale: 3 Packs and 10 Each</p>
                <img className="object-cover w-full rounded-base mb-4 md:mb-0" src="../images/demand.png" alt="demand" />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-y-5'>
            <div className='bg-[#0F5045] p-6'>
              <p className='text-[#1ECF6A] text-[20px] md:text-[30px] font-medium mb-4'>What bMobile does:</p>
              <ul className="list-disc pl-5 marker:text-[#1ECF6A] text-white">
                <li className='text-[16px] md:text-[20px] mb-3'>Presale totals are converted to Each for math. <br /> 3 Packs = 18 Each. Plus 10 Each = 28 Each </li>
                <li className='text-[16px] md:text-[20px] mb-3'>Pick Planner groups lines. <br /> Shows 1 Case (24) plus 4 loose for a single clean pull </li>
                <li className='text-[16px] md:text-[20px] mb-3'>Package Planner builds one carton and one small box <br /> Drivers see the same units on the same units on the route sheet.  </li>
                <li className='text-[16px] md:text-[20px] mb-3'>Purchase plan looks at reorder points in cases <br /> If the shelf will drop below threshold after these picks, it recommends 1 Case on the PO</li>
              </ul>
            </div>
            <div className='bg-[#1ECF6A] p-6'>
              <p className='text-white text-[20px] md:text-[30px] font-medium mb-4'>Result:</p>
              <p className='text-white text-[16px] md:text-[20px]'>the right product leaves the dock, the shelf count matches the book count, and there is no credit call later.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grid