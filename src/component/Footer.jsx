import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
  const navigate=useNavigate();
  return (
    <div className='mt-5 grid grid-cols-3 mx-[40px]   gap-4 bg-slate-100'>
      <div className='flex flex-col gap-3 mt-4 ml-[120px]'>
         <img src={assets.logo} alt=""  className='w-12 h-12 rounded-full mb-5'/>  
         <p className='text-[15px]'>Lorem, ipsum dolor.</p> 
         <p className='text-[15px]'>Lorem ipsum dolor sit.</p>
         <p className='text-[15px]'>Lorem, ipsum dolor.</p>
      </div>
      <div className='flex flex-col gap-3 ml-[120px] mt-4 '>
        <h1 className='font-semibold text-[20px] mb-5'>Quick Links</h1>
        <p onClick={()=>navigate('/home')}>Home</p>
        <p onClick={()=>navigate('/alldoctor')}>All Doctors</p>
        <p onClick={()=>navigate('/about')}>About</p>
        <p onClick={()=>navigate('/bookappointment')}>BookAppintment</p>
        <p onClick={()=>navigate('/viewappointment')}>ViewAppointment</p>
      </div>
      <div className='flex flex-col gap-3 ml-[120px] mt-4'>
        <h1 className='text-[20px] font-semibold mb-5'>Contact as</h1>
        <p className='text-[15px]'>34548 12367</p>
        <p className='text-[15px]'>abc@gmial.com</p>
      </div>
    </div>
  )
}

export default Footer
