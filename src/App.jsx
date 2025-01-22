import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import "./App.css"
import SideBar from './components/SideBar';
import Room from './pages/Room';
import AppointmentForm from './pages/AppointmentForm.jsx';
import WaitingList from './pages/WaitingList/index.jsx';
import Schedule from './pages/Schedule/index.jsx';


const App = () => {
  return (
    <>
      
        <Header />
        <div className='main d-flex'>
         <Router>
          <div className='sidebarwrapper'>
            <SideBar />
          </div>
          <div className='content'>
           <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/room" element={<Room />} />
              <Route path="/appointmentform" element={<AppointmentForm />} />
              <Route path="/waitinglist" element={<WaitingList />} />
              <Route path="/schedule" element={<Schedule />} />
            </Routes>
          </div>
          </Router>
        </div>
      </>
  )
}

export default App