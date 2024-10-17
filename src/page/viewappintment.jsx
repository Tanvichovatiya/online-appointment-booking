// src/components/MyAppointments.js
import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/footer';

const MyAppointments = ({ appointments, onEdit, onDelete }) => {
  return (
    <>
    <Navbar/>
    <div>
      <h2 className="text-[25px] text-center font-bold mt-10 mb-4">My Appointments</h2>
      {appointments.length === 0 ? (
        <p className='text-center text-[20px]'>No appointments booked yet.</p>
      ) : (
        <table className="w-[800px] mx-auto bg-white shadow-md rounded mb-4">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Doctor Name</th>
              <th className="p-3">Speciality</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{appointment.doctorName}</td>
                <td className="p-3">{appointment.doctorSpeciality}</td>
                <td className="p-3">{appointment.date}</td>
                <td className="p-3">{appointment.time}</td>
                <td className="p-3 flex space-x-2">
                  {/* <button
                    onClick={() => onEdit(index)}
                    className="px-4 py-2 bg-yellow-400 text-white rounded"
                  >
                    Edit
                  </button> */}
                  <button
                    onClick={() => onDelete(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default MyAppointments;
