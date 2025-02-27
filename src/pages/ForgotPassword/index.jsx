import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();

           if (!email) {
      setError('Please enter your email');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/auth/forgot-password', { email });
      if (response.data.message) {
        setMessage(response.data.message);
      } else {
        setMessage('Failed to send reset link.');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setMessage('User not found.');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ForgotPassword;
