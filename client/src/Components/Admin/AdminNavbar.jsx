import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <div className="flex gap-4">
        <Link to="/admin/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/admin/add" className="hover:underline">Add Spot</Link>
        <button
          onClick={() => {
            localStorage.removeItem("adminToken");
            window.location.href = "/admin";
          }}
          className="text-red-400 hover:underline"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
