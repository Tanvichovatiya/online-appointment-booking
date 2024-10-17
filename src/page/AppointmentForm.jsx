// src/components/AppointmentForm.js
import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import { doctors } from '../assets/assets/assets_frontend/assets';
import Footer from '../component/footer';

const specialtyOptions = ['Gynecologist','Dermatologist', 'Pediatricians', 'Neurologist','General physician','Gastroenterologist'];

const AppointmentForm = ({ addAppointment }) => {
  const [formData, setFormData] = useState({
    doctorName: '',
    doctorSpeciality: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.doctorName || !formData.doctorSpeciality || !formData.date || !formData.time) {
      alert('All fields are required!');
      return;
    }

    addAppointment(formData);

    // Reset form
    setFormData({
      doctorName: '',
      doctorSpeciality: '',
      date: '',
      time: '',
    });
  };

  return (
    <>
    <Navbar/>
    <h1 className='text-center mt-10 mb-5 font-semibold text-[25px]'>Appointment Form</h1>
    <form onSubmit={handleSubmit} className="space-y-4 w-[800px] mx-auto">
      <div>
        <label className="block text-lg font-medium mb-1">Doctor Name</label>
        <select
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select a doctor</option>
          {doctors.map((doctor, idx) => (
            <option key={idx} value={doctor.name}>{doctor.name}({doctor.speciality})</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-lg font-medium mb-1">Doctor Speciality</label>
        <select
          name="doctorSpeciality"
          value={formData.doctorSpeciality}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select a specialty</option>
          {specialtyOptions.map((specialty, idx) => (
            <option key={idx} value={specialty}>{specialty}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-lg font-medium mb-1">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block text-lg font-medium mb-1">Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Book Appointment</button>
    </form>
    <Footer/>
    </>
  );
};

export default AppointmentForm;
