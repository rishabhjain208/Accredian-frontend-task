import React from 'react'
import { FiChevronRight } from "react-icons/fi"
import Button from './Button'
const programs=["Product Management", "Strategy & Leadership",
"Business Management",
"Fintech",
"Senior Management",
"Data Science",
"Digital Transformation",
"Business Analytics",]
const list=[
  {
    "pr": "Professional Certificate Program in Product Management",
    "ref": "₹ 7,000",
    "refree": "₹ 9,000"
  },
  {
    "pr": "PG Certificate Program in Strategic Product Management",
    "ref": "₹ 9,000",
    "refree": "₹ 11,000"
  },
  {
    "pr": "Executive Program in Data Driven Product Management",
    "ref": "₹ 10,000",
    "refree": "₹ 10,000"
  },
  {
    "pr": "Executive Program in Product Management and Digital Transformation",
    "ref": "₹ 10,000",
    "refree": "₹ 10,000"
  },
  {
    "pr": "Executive Program in Product Management",
    "ref": "₹ 10,000",
    "refree": "₹ 10,000"
  },
  {
    "pr": "Advanced Certification in Product Management",
    "ref": "₹ 10,000",
    "refree": "₹ 10,000"
  },
  {
    "pr": "Executive Program in Product Management and Project Management",
    "ref": "₹ 10,000",
    "refree": "₹ 10,000"
  }
]
const Benefits = () => {
  return (
    <>
    <div className='flex justify-center mt-10 '>
        
        <div className='text-xl flex '>
      What Are The <div className='text-blue-500 mx-2'>Referral Benefits?</div>
      </div>
      </div>
  <div className='flex justify-center mt-4 '>
      
        
      <div className='w-4/5 flex mt-10 mx-80'>
      <div className='shadow-2xl'>
        <ul className='border-2 rounded-lg'>
          <li className='bg-blue-500 rounded-md  h-12 text-white flex justify-between '><div className="p-1">All Programms</div> <FiChevronRight  className="mt-2 " /></li>
          {programs.map((p)=>(
            <li  className='border-2 h-12 items-center text-gray-800 border-gray-200 justify-between flex p-1'>{p} <FiChevronRight  className="mt-2 " /></li>
          ))}
        </ul>
        
      </div>
      <div className='mx-10 rounded-md text-sm shadow-2xl text-slate-700 font-medium w-7/8'>
        <table className='rounded-md'>
          <tr className='bg-blue-300 h-10 font-medium    text-blue-700'>
            <td className='p-5 rounded-l-md w-64'>Programs</td>
            <td className='p-5 mx-10 '>Referrer Bonus</td>
            <td className='p-5 rounded-r-md'>Refree Bonus</td>
          </tr>{
            list.map((data)=>(
              <tr   className='p-1 '>
                <td className='px-5 py-1 w-80 flex border-collapse border-blue-500'><img className='size-10' src="cap.png" alt="" /> <div className='mx-2'>{data.pr}</div></td>
                <td className='px-5 py-1 border-x-2 border-blue-500 mx-10'>{data.ref}</td>
                <td className='px-5 py-1'>{data.refree}</td>
              </tr>
            ))
          }
        </table>
      </div>
       

      </div>
      
  </div>
  {/* <div className='mt-16 items-center flex justify-center mb-8 mx-48'>
             <button className='bg-blue-500 text-center justify-center mx-4 flex w-28 itmes-center rounded-md p-2 text-white hover:bg-blue-600'>Refer Now </button>

           </div> */}
           <Button/>
    </>
  )
}

export default Benefits