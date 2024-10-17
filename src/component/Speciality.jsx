import React from 'react'
import { specialityData } from '../assets/assets/assets_frontend/assets'

const Speciality = ({item}) => {
  return (
    <>
   
  
    <div className="  rounded relative mt-5 cursor-pointer">
        <img  src={item.image} alt=""   className="w-full h-24  mb-4  "/>
        <p className='text-center text-[15px]'>{item.speciality}</p>
        </div>
    </>
  )
}

export default Speciality
