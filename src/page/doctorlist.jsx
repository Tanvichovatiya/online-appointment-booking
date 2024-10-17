import React from 'react'
import { doctors } from '../assets/assets/assets_frontend/assets'
import Navbar from '../component/Navbar'
import { useNavigate } from 'react-router-dom'

const Doctorlist = () => {
    const navigate=useNavigate();
  return (
    <>
    <Navbar/>
    <div className="grid w-[900px] mx-auto mb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-2  cursor-pointer  ">
            {doctors.map((doctor,id) => (
                 <div className="rounded relative mt-5 h-[350px] border shadow-md  cursor-pointer">
                 <img  src={doctor.image} alt=""   className="w-full h-30 bg-emerald-200  mb-4  "/>
                 <p className='text-center text-[15px]'>{doctor.speciality}</p>
                 <p className='text-center text-[15px]'>{doctor.name}</p>
                 <button className='absolute bottom-8 left-9 text-[15px] text-center px-4 py-1 rounded-full bg-slate-100' onClick={()=>navigate('/bookappointment')}>Book Appointment</button>

                 </div>
            ))}
          </div> 
     </>     
  )
}

export default Doctorlist
