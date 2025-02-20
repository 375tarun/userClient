// src/routes/Routes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Dashboard from '../pages/Dashboard';
import Tests from '../pages/Tests';
import Performance from '../pages/Performance';
import Leaderboard from '../pages/Leaderboard';
import Profile from '../pages/Profile';
import Logout from '../pages/Logout';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tests" element={<Tests />} />
          <Route path="performance" element={<Performance />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;