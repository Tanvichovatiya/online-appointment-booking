import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets/assets_frontend/assets";
function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div>
            <img src={assets.logo} alt="" className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex gap-5 items-center">
        <Link to="/home" className="text-white text-lg font-bold">Home</Link>
        <Link to="/alldoctor" className="text-white text-lg font-bold">All Doctor</Link>
        <Link to="/about" className="text-white text-lg font-bold">About</Link>
        <Link to="/bookappointment" className="text-white text-lg font-bold">Bookappintment</Link>
        <Link to="/viewappointment" className="text-white text-lg font-bold">Viewappintment</Link>


        </div>
        <div className="flex gap-5 items-center ">
        <Link to="/profile" className="text-white text-lg">
          My Profile
        </Link>
        </div>
       
      </div>
    </nav>
  );
}

export default Navbar;
