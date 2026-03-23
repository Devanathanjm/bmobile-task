import React from 'react'

const Uom = () => {
  return (
    <section className='bg-[#0F5045] py-16 overflow-x-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10'>
        <h2 className='text-[30px] md:text-[50px] font-bold text-[#07F170] max-w-[849] text-center mx-auto mb-6 leading-[132%]' data-aos="fade-right"data-aos-delay="200">The bMobile way: UOM that runs through the whole flow</h2>
        <p className='text-[18px] md:text-[28px] text-white text-center mb-12'>Plain promise: bMobile converts Units of Measure automatically at every step</p>
        <img src="../images/uom-flow/uom-flow.png" className='w-full' loading="lazy"></img>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-1 gap-x-1 mt-28'>

          {/* Presale */}

          <a className="bg-[#DDFFF8] w-full p-8 rounded-base shadow-xs md:rounded-tl-[20px] md:rounded-tr-none rounded-tl-[20px] rounded-tr-[20px]">
            <img src='../images/uom-flow/presale.svg' className='mb-2' alt='Presale'></img>

            <h3 className="mb-2 text-[20px] md:text-[28px] font-medium text-black">Presale</h3>

            <p className="mb-3 text-black text-[15px]">A rep enters Case 24 for soda. If another rep adds 10 each, we keep both lines correct.</p>
          </a>

          {/* Purchase planning  */}

          <a className="bg-[#DDFFF8] w-full p-8 rounded-base shadow-xs">
            <img src='../images/uom-flow/purchase.svg' className='mb-2' alt='Purchase planning'></img>

            <h3 className="mb-2 text-[20px] md:text-[28px] font-medium text-black">Purchase planning</h3>

            <p className="mb-3 text-black text-[15px]">Presale becomes a forecasted purchase. We switch to the vendor unit so the PO reads in the pack they accept, for example 1 case or 24 each.</p>
          </a>

          {/* Receiving */}

          <div className="bg-[#DDFFF8] w-full p-8 rounded-base shadow-xs md:rounded-tr-[20px]">
            <img src='../images/uom-flow/receiving.svg' className='mb-2' alt='Receiving'></img>

            <h3 className="mb-2 text-[20px] md:text-[28px] font-medium text-black">Receiving</h3>

            <p className="mb-3 text-black text-[15px]">When goods arrive, quantities land in the stock UOM you chose. If you stock by pack 6, we put it on the shelf as packs.</p>
          </div>

          {/* Pick Planner */}

          <div className="bg-[#DDFFF8] w-full p-8 rounded-base shadow-xs md:rounded-bl-[20px]">
            <img src='../images/uom-flow/pick.svg' className='mb-2' alt='Pick Planner'></img>

            <h3 className="mb-2 text-[20px] md:text-[28px] font-medium text-black">Pick Planner</h3>

            <p className="mb-3 text-black text-[15px]">All demand is converted into the pick unit and totaled in that unit. The picker sees full casesplus any loose pieces, for example 3 cases and 4 loose, as one clear pick.</p>
          </div>

          {/* Pack Planner */}

          <div className="bg-[#DDFFF8] w-full p-8 rounded-base shadow-xs">
            <img src='../images/uom-flow/pack.svg' className='mb-2' alt='Pack Planner'></img>

            <h3 className="mb-2 text-[20px] md:text-[28px] font-medium text-black">Pack Planner</h3>

            <p className="mb-3 text-black text-[15px]">We switch again into the pack UOM that matches cartons or route totes, so packing is clean.</p>
          </div>
          {/* Delivery */}
           <div className="bg-[#DDFFF8] w-full p-8 rounded-base shadow-xs md:rounded-br-[20px] md:rounded-bl-none rounded-br-[20px] rounded-bl-[20px]">
            <img src='../images/uom-flow/delivery.svg' className='mb-2' alt='Delivery'></img>

            <h3 className="mb-2 text-[20px] md:text-[28px] font-medium text-black">Delivery</h3>

            <p className="mb-3 text-black text-[15px]">We switch again into the pack UOM that matches cartons or route totes, so packing is clean.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Uom
