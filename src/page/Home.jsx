import React from "react";
import Navbar from "../component/Navbar";
import { assets, doctors } from "../assets/assets/assets_frontend/assets";
import Speciality from "../component/Speciality";
import { specialityData } from "../assets/assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
import Alldoctors from "../component/Alldoctors";
import Footer from "../component/footer";

function Home({ userData }) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Navbar />

        <div className="relative w-[90vw]  mx-auto mt-5">
          <div className="p-6 bg-blue-400 border w-full h-[500px] border-gray-400 rounded shadow-md"></div>
          <p className="absolute top-20 left-9 text-white  text-[35px] font-bold">
            <span>Book Appointment</span>
            <br />
            <span>With Trusted</span>
            <br />
            <span>Doctors</span>
            <br />
          </p>
          <button
            className="absolute bottom-8 left-9 text-[20px] px-4 py-2 rounded-full bg-slate-100"
            onClick={() => navigate("/bookappointment")}
          >
            Book Appointment
          </button>
          <img
            src={assets.header_img}
            alt=""
            className="absolute w-[500px] h-[400px]  bottom-4 left-[50vw]"
          />
        </div>

       
      </div>
      <div className="mt-7">
        <p className="font-bold text-[30px] text-center">Find by Speciality</p>
        <p className="text-[15px] text-center mt-4">
          Simply browse through our extensive list of trusted
        </p>
        <p className="text-[15px] text-center">
          doctors, schedule your appointment hassle-free.
        </p>
      </div>
      <div className="grid w-[600px] gap-2 ml-[320px]  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 cursor-pointer  ">
        {specialityData.map((item, id) => (
          <Speciality item={item} key={id} />
        ))}
      </div>

      <div className="mt-[100px] mb-5 text-center">
        <h1 className="font-bold text-[30px] mb-5">Top Doctors to Book</h1>
        <p className="text-[15px] text-slate-400">
          Simply browse through our extensive list of trusted
        </p>
        <p className="text-[15px] text-slate-400">doctors.</p>
      </div>
      <div className="grid w-[900px] mx-auto mb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-2  cursor-pointer  ">
        {doctors.slice(0, 8).map((doctor, id) => (
          <Alldoctors doctor={doctor} key={id} />
        ))}
      </div>
      <Footer/>
    </>
  );
}

export default Home;
