import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Navbar */}
      <header className="bg-purple-700 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Panel</h1>
          <div className="space-x-4">
            <Link to="/admin/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/admin/add" className="hover:underline">
              Add Spot
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 p-6 max-w-7xl mx-auto">{children}</main>
    </div>
  );
};

export default AdminLayout;
