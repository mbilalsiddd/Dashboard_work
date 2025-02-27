import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signup from "./pages/Signup/index.jsx";
import Login from "./pages/Login/index.jsx";
import ForgotPassword from "./pages/ForgotPassword/index.jsx";
import ResetPassword from "./pages/ResetPassword/index.jsx";
import PrivateRoute from "./pages/ProtectedRoute/index.jsx";
import Dashboard from "./pages/Dashboard/index.jsx";
import Room from "./pages/Room/index.jsx";
import Schedule from "./pages/Schedule/index.jsx";
import AppointmentForm from "./pages/AppointmentForm.jsx/index.jsx";
import WaitingList from "./pages/WaitingList/index.jsx";

const App = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      {/* Protected Routes */}
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/room" element={<Room />} />
      <Route path="/appointmentform" element={<AppointmentForm />} />
      <Route path="/waitinglist" element={<WaitingList />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  );
};

export default App;
