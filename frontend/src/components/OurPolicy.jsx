import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} alt="exchange" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We Offer hassle free Exchange Policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="quality return" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We Provide 7 Days free Return Policy</p>
        </div>
        
        <div>
            <img src={assets.support_img} alt="support" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We provide 24/7 Customer Support</p>
        </div>
    </div>
  )
}

export default OurPolicy