import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // Logout function
  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    // Example: Clear user session, redirect to login page, etc.
  };

  return (
    <div className="w-64 min-h-screen p-4 bg-[#2DAA9E] text-white shadow-lg flex flex-col justify-between">
      <div className="flex flex-col space-y-4">
        {/* Logo */}
        <div className="text-3xl font-bold mb-12">Dashboard</div>

        {/* Navigation Links */}
        <Link
          to="/profile"
          className="p-3 rounded-lg hover:bg-[#66D2CE] transition-all duration-300 ease-in-out transform hover:translate-x-2"
          style={{ fontSize: "20px" }}
        >
          Profile
        </Link>
        <Link
          to="/test"
          className="p-3 rounded-lg hover:bg-[#66D2CE] transition-all duration-300 ease-in-out transform hover:translate-x-2"
          style={{ fontSize: "20px" }}
        >
          Test
        </Link>
        <Link
          to="/leaderboard"
          className="p-3 rounded-lg hover:bg-[#66D2CE] transition-all duration-300 ease-in-out transform hover:translate-x-2"
          style={{ fontSize: "20px" }}
        >
          Leaderboard
        </Link>
        <Link
          to="/performance"
          className="p-3 rounded-lg hover:bg-[#66D2CE] transition-all duration-300 ease-in-out transform hover:translate-x-2"
          style={{ fontSize: "20px" }}
        >
          Performance
        </Link>
        <Link
          to="/practice-test"
          className="p-3 rounded-lg hover:bg-[#66D2CE] transition-all duration-300 ease-in-out transform hover:translate-x-2"
          style={{ fontSize: "20px" }}
        >
          Practice Test
        </Link>
      </div>

      {/* Logout Button */}
      <div className="mt-auto"> {/* This ensures the logout button sticks to the bottom */}
        <button
          onClick={handleLogout}
          className="w-full p-3 rounded-lg bg-[#ff0a0a] text-white hover:bg-[#ff0a0a] transition-all duration-300 ease-in-out transform hover:scale-105 mb-8"
          style={{ fontSize: "20px" }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;