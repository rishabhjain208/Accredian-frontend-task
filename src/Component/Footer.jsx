import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const programs = [
    "Data Science & AI",
    "Product Management",
    "Business Analytics",
    "Digital Transformation",
    "Business Management",
    "Project Management",
    "Strategy & Leadership",
    "Senior Management",
    "Fintech"
  ];

  const list = [
    "About",
    "Career",
    "Blog",
    "Admission Policy",
    "Referral Policy",
    "Privacy Policy",
    "Terms Of Service",
    "Master FAQs"
  ];

  return (
    <div className='bg-slate-950 flex justify-center text-zinc-50 p-4 md:p-8'>
      <div className='w-full md:w-4/5 mt-10'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div>
            <div className='text-3xl font-medium'>accredian</div>
            <div className='text-xs font-thin -mt-2'>credentials that matter</div>
          </div>
          <div className='mt-4 md:mt-0'>
            <div className='items-center flex justify-center'>
              <button className='bg-blue-600 text-center justify-center mx-4 flex items-center rounded-md p-2 text-white hover:bg-blue-700'>Schedule 1-on-1 Call Now</button>
            </div>
            <div className='text-sm mx-5 text-center md:text-left'>Speak with our Learning Advisor</div>
          </div>
        </div>
        <div className='border-b-[2px] border-amber-100 mt-6 mb-6'></div>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='mb-6 md:mb-0'>
            <ul className='font-medium'>
              <li className='p-2'>Programs</li>
              {programs.map((pr, index) => (
                <li key={index} className='p-2'>{pr}</li>
              ))}
            </ul>
          </div>
          <div className='mb-6 md:mb-0'>
            <ul className='mt-8 md:mt-0'>
              {list.map((pr, index) => (
                <li key={index} className='p-1 text-4xl'>+</li>
              ))}
            </ul>
          </div>
          <div className='mb-6 md:mb-0'>
            <div className='text-lg p-1'>Contact Us</div>
            <div className='text-sm'>
              Email us (For Data Science Queries): admissions@accredian.com <br />
              Email us (For Product Management Queries): pm@accredian.com <br />
              Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM) <br />
              Product Management Admission Helpline: +91 9625811095 <br />
              Enrolled Student Helpline: +91 7969322507 <br />
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, <br />
              Haryana 122015
            </div>
            <div className='p-1 text-lg'>Why Accredian</div>
            <div className='p-1 text-lg font-light'>Follow Us</div>
            <div className='flex text-2xl'>
              <FaFacebookSquare />
              <FaLinkedin className='mx-2' />
              <FaTwitter className='mx-2' />
              <FaInstagram className='mx-2' />
              <FaYoutube />
            </div>
          </div>
          <div>
            <ul>
              <li className='p-1 text-lg'>accredian</li>
              {list.map((item, index) => (
                <li key={index} className='p-1 text-sm'>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='text-xs font-thin flex justify-center mb-10 mt-10'>
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
