import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/admin/login', { email, password });
      localStorage.setItem('adminToken', data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={loginHandler} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4 font-bold text-center">Admin Login</h2>
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-4 border rounded" required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
