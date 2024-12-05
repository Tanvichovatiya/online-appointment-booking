import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, HashRouter } from 'react-router-dom';
import MyProfile from './component/MyProfile';
import Home from './page/Home';
import AppointmentForm from './page/AppointmentForm';
import MyAppointments from './page/viewappintment';
import Doctorlist from './page/doctorlist';
import About from './page/About';
import CreateAccountForm from './component/CreateAccountForm';



function App() {
  const [appointments, setAppointments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [userData,setUserData]=useState(null);

  const [user, setUser] = useState(null);

  const createAccount = (accountData) => {
    setUser(accountData);
  };

  const updateProfile = (updatedData) => {
    setUser(updatedData);
  };
 
   const addAppointment = (appointment) => {
    if (editIndex !== null) {
       const updatedAppointments = [...appointments];
      updatedAppointments[editIndex] = appointment;
     setAppointments(updatedAppointments);
      setEditIndex(null);
    } else {
       setAppointments([...appointments, appointment]);
     }
    }

  const handleDelete = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CreateAccountForm  createAccount={createAccount}/>} />
        <Route path="/home" element={<Home userData={userData} />} />
        <Route path='/alldoctor' element={<Doctorlist/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path="/bookappointment" element={<AppointmentForm   addAppointment={addAppointment} />} />
        <Route path="/viewappointment" element={<MyAppointments    appointments={appointments} onDelete={handleDelete}/>} />

        <Route
            path="/profile"
            element={
              user ? (
                <MyProfile user={user} updateProfile={updateProfile} />
              ) : (
                <p>No account created yet.</p>
              )
            }
          />
        

      </Routes>
      </HashRouter>
      
    
  );
}

export default App;
