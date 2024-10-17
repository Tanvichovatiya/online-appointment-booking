import React from 'react'
import Navbar from '../component/Navbar'
import { assets } from '../assets/assets/assets_frontend/assets'

const About = () => {
  return (
    <>
    <Navbar/>
    <h1 className='text-center text-[30px] mt-8 mb-5'>About Us</h1>
    <div className='grid grid-cols-2 gap-2 w-[900px] mx-auto  '>
        <div>
            <img src={assets.about_image} alt="" className='rounded h-[470px] shadow-md ' />
        </div>
        <div className='ml-5'>
            <p className='mt-5 mb-4'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
            <p className='mb-7'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
            <p className='font-semibold mb-5'>our vision</p>
            <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
    </div>
    <h1 className='text-left ml-[180px] mt-10 text-[30px]'>WHY <span className='font-semibold'>CHOOSE US</span></h1>
    <div className='w-[900px] grid grid-cols-3 mt-10 mx-auto gap-2'>
        <div className='h-[200px] rounded border bg-slate-200  hover:bg-slate-400'>
            <p className='font-semibold mt-[40px] text-center'>EFFICIENCY:</p>
             <p className='mt-[30px] mb-10 text-center'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='h-[200px] rounded border bg-slate-200 hover:bg-slate-400'>
            <p className='font-semibold mt-[40px] text-center'>CONVENIENCE:</p>
             <p className='mt-[30px] mb-10 text-center'>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='h-[200px] rounded border bg-slate-200  hover:bg-slate-400'>
            <p className='font-semibold mt-[40px] text-center'>PERSONALIZATION:</p>
             <p className='mt-[30px] mb-10 text-center'>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
    </div>
   </> 
  )
}

export default About
