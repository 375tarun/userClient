// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Test Platform</h2>
      <nav>
        <ul className="space-y-4">
          <li><Link to="/profile" className="block p-2 hover:bg-gray-700">Profile</Link></li>
          <li><Link to="/dashboard" className="block p-2 hover:bg-gray-700">Dashboard</Link></li>
          <li><Link to="/tests" className="block p-2 hover:bg-gray-700">Tests</Link></li>
          <li><Link to="/performance" className="block p-2 hover:bg-gray-700">Performance</Link></li>
          <li><Link to="/leaderboard" className="block p-2 hover:bg-gray-700">Leaderboard</Link></li>
          <li><Link to="/logout" className="block p-2 hover:bg-gray-700">Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;