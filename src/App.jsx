import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import "./App.css"
import SideBar from './components/SideBar';
import Room from './pages/Room';


const App = () => {
  return (
    <>
      
        <Header />
        <div className='main d-flex'>
          <div className='sidebarwrapper'>
            <SideBar />
          </div>

          <div className='content'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/room" element={<Room />} />
            </Routes>
          </BrowserRouter>
          </div>
        </div>
      
    </>
  )
}

export default App