import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccountForm = ({ createAccount }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    gender: '',
    birthday: '',
  });
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email.includes('@')) {
      alert('Email must include "@"');
      return;
    }
    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    if (!formData.gender) {
      alert('Gender is required');
      return;
    }
    if (!formData.birthday) {
      alert('Birthday is required');
      return;
    }

    createAccount(formData);

    // Reset form
    setFormData({
      email: '',
      password: '',
      gender: '',
      birthday: '',
    });
    navigate('/home');
  };

  return (
    <>
    <h1 className='mt-10 mb-5 text-center font-semibold text-[25px]'>Create Account</h1>
    <form onSubmit={handleSubmit}  className="space-y-4 w-[800px] mx-auto">
      <div>
        <label className="block text-lg font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block text-lg font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          minLength="8"
          required
        />
      </div>

      <div>
        <label className="block text-lg font-medium mb-1">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-lg font-medium mb-1">Birthday</label>
        <input
          type="date"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Create Account</button>
    </form>
    </>
  );
};

export default CreateAccountForm;
