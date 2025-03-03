import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Profile from "../pages/Profile";
import Test from "../pages/Tests";
import Leaderboard from "../pages/Leaderboard";
import Performance from "../pages/Performance";
import PracticeTest from "../pages/PracticeTest";

const Layout = () => {
  return (
    <div className="flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 min-h-screen h-full bg-[#EAEAEA] p-5 flex flex-col">
        <Routes>
          {/* Default Route: Redirect to /profile */}
          <Route path="/" element={<Navigate to="/profile" replace />} />

          {/* Routes */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<Test />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/practice-test" element={<PracticeTest />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;