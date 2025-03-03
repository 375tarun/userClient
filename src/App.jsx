import React from "react";
import { BrowserRouter as Router, Routes , Route, Navigate } from "react-router-dom";
import Sidebar from "../src/components/Sidebar"
import Profile from "../src/pages/Profile";
import Test from "../src/pages/Tests";

import Leaderboard from "../src/pages/Leaderboard";
import Performance from "../src/pages/Performance";
import PracticeTest from "../src/pages/PracticeTest";
import SignUp from "../src/pages/auth/SignUp";
import Login from "../src/pages/auth/Login";
import Layout from "./layout/Layout";

const App = () => {
  return (
   
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Default Route: Redirect to /profile */}
          <Route path="/" element={<Layout />}>
           <Route path='/profile' element={<Profile/>} />
            <Route path="/test" element={<Test />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/practice-test" element={<PracticeTest />} />
          </Route>
        </Routes>
    
  )
};

export default App;
