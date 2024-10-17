// src/components/MyProfile.js
import React, { useState } from 'react';
import Navbar from './Navbar';

const MyProfile = ({ user, updateProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <>
    <Navbar/>
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center mt-10">My Profile</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} className=" w-[800px] mx-auto space-y-4">
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

          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Save</button>
        </form>
      ) : (
        <div className='w-[200px] mx-auto'>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Password:</strong> {user.password}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Birthday:</strong> {user.birthday}</p>
          <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-yellow-400 text-white rounded mt-4">Edit Profile</button>
        </div>
      )}
    </div>
    </>
  );
};

export default MyProfile;
