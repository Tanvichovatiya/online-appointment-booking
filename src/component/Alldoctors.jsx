import React from 'react'
import { useNavigate } from 'react-router-dom'

const Alldoctors = ({doctor}) => {
    const navigate=useNavigate();
  return (
    <>
    <div className="rounded relative mt-5 border h-[350px] shadow-md  cursor-pointer">
        <img  src={doctor.image} alt=""   className="w-full h-30 bg-emerald-200  mb-4  "/>
        <p className='text-center text-[15px]'>{doctor.speciality}</p>
        <p className='text-center text-[15px]'>{doctor.name}</p>
        <button className='absolute bottom-8 left-9 text-[15px] text-center px-4 py-1 rounded-full bg-slate-100' onClick={()=>navigate('/bookappointment')}>Book Appointment</button>
        </div>
    </>
  )
}

export default Alldoctors
