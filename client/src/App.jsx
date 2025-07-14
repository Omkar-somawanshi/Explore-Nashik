import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Removed useLocation from here as it's not needed at this top level

// User Pages
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import SpotDetails from "./Pages/SpotDetails";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar"; // This is your user Navbar
import GrapevineGlimpses from "./Pages/GrapevineGlimpses.jsx";
import NashikCulinaryJourney from "./Pages/NashikCulinaryJourney.jsx"; // <--- NEW: Import the new page

// Admin Layout + Pages
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddSpot from "./Pages/Admin/AddSpot";
import EditSpot from "./Pages/Admin/EditSpot";
import AdminLayout from "./Components/Admin/AdminLayout"; // This will contain your admin-specific Navbar/Sidebar

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The App component is the root component that sets up the routing for the application.
 * It utilizes react-router-dom to define routes for both user-facing and admin sections.
 *
 * User Routes:
 * - "/" renders the Home page with the main Navbar.
 * - "/explore" renders the Explore page with the main Navbar.
 * - "/spot/:id" renders the SpotDetails page with the main Navbar.
 * - "/beyond-horizon" renders the BeyondHorizon page with the main Navbar.
 * - "/wine-experience" renders the GrapevineGlimpses page with the main Navbar.
 * - "/culinary-journey" renders the NashikCulinaryJourney page with the main Navbar. <--- ADDED THIS COMMENT
 * - "*" renders the NotFound page with the main Navbar for undefined user routes.
 *
 * Admin Routes:
 * - "/admin/login" renders the AdminLogin page without the main Navbar.
 * - "/admin/dashboard" renders the AdminDashboard page within the AdminLayout.
 *******/
function App() {
  return (
    <Router>
      <Routes>
        {/* User Pages: Navbar is explicitly included */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/explore"
          element={
            <>
              <Navbar />
              <Explore />
            </>
          }
        />
        <Route
          path="/spot/:id"
          element={
            <>
              <Navbar />
              <SpotDetails />
            </>
          }
        />
       
        <Route
          path="/wine-experience"
          element={
            <>
              <Navbar />
              <GrapevineGlimpses />
            </>
          }
        />
        {/* NEW ROUTE FOR CULINARY JOURNEY PAGE */}
        <Route
          path="/culinary-journey" // <--- Choose a meaningful path for the URL
          element={
            <>
              <Navbar />
              <NashikCulinaryJourney />
            </>
          }
        />
        <Route
          path="*" // Catch-all for undefined user routes
          element={
            <>
              <Navbar />
              <NotFound />
            </>
          }
        />

        {/* Admin Login: No user Navbar is included */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Pages: Wrapped in AdminLayout. AdminLayout should contain its own navigation. */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/add"
          element={
            <AdminLayout>
              <AddSpot />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/edit/:id"
          element={
            <AdminLayout>
              <EditSpot />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;