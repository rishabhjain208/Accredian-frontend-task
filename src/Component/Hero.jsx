import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div>
        <div className='flex justify-center mt-10'>
        <div className='bg-blue-100 w-4/5 flex shadow-2xl justify-between rounded-lg'>
             <div className=' items-center flex'>
             
                <div>
                <div className='text-7xl font-bold mx-40 w-96'>
                <div>Let’s Learn</div>
                <div>& Earn</div>
                </div>
                <div className='mx-40 mt-10 text-2xl'>
                    <div>Get a chance to win </div>
                    <div className='flex'>up-to <div className='text-3xl font-medium mx-2 text-blue-500'>Rs. 15,000</div></div>
                </div>
                {/* <div className='mt-16 items-center mx-48'>
             <button className='bg-blue-500 text-center justify-center mx-4 flex w-28 itmes-center rounded-md p-2 text-white hover:bg-blue-600'>Refer Now </button>

           </div> */}
           
           <Button/>
           
                </div>
                
             </div>
             <div>
                <img src="Anniversary.png"  className='h-[500px]' alt="Hero" />
             </div>
             
        </div>
        
    </div>
    
    </div>
  )
}

export default Hero