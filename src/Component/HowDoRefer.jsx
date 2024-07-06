import React from 'react'
import { image } from './../../node_modules/tailwindcss/src/util/dataTypes';
import Button from './Button';

const HowDoRefer = () => {
  return (
    <>
    <div className='bg-blue-100 flex justify-center mt-10'>
       <div >
        <div className='flex justify-center mt-6' >How Do I <div className='text-blue-500 mx-1 underline'>Refer?</div></div>
      <div className='relative'>
        <img className='' src="ThhreeCircles.png" alt="" />
      <div className='absolute -mt-80 mx-64'>
        <img src="add.png" alt="" />
        <div className='-mx-10 mt-2' >
        <div className=''>
        Submit referrals easily <div className='mx-3'>
        via our website’s </div>
        <div className='mx-3'>referral section.</div>
        </div>
        </div>
      </div>

      <div className='absolute -mt-80 mx-[655px] w-20'>
        <img src="write.png" alt="" />
        <div className='-mx-10 mt-2' >
        <div className='w-60'>
        Earn rewards once your  
         <div className='-mx-3'>
         referral joins an Accredian</div>
        <div className='mx-12'>progarm.</div>
        </div>
        </div>
      </div>

      <div className='absolute -mt-80 mx-[1050px] w-56'>
        <img src="file.png" alt="s" />
        <div className='-mx-10 mt-2' >
        <div className=''>
        Both parties receive a   <div className='mx-3'>
        bonus 30 days after </div>
        <div className='mx-3'>program enrollment.</div>
        </div>
        </div>
      </div>

      </div>
       </div>
       
    </div>
    
          <div className='bg-blue-100 flex justify-center items-center'> <Button/></div>
    </>
  )
}

export default HowDoRefer