import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
    <Sidebar />
    <main className="flex-grow p-4">
      <Outlet />
    </main>
  </div>
);
};

export default Layout;