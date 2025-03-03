import React from "react";
import LeaderboardItem from "../components/LeaderboardItem";

const Leaderboard = ({ isDarkMode }) => {
  const leaderboardData = [
    { rank: 1, name: "Tarun", score: 95 },
    { rank: 2, name: "Shiva", score: 90 },
    { rank: 3, name: "Ankit", score: 85 },
  ];

  return (
    <div className={`p-6 min-h-screen ${isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"}`}>
      <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}>Leaderboard</h2>
      
      <div className={`shadow-lg rounded-lg p-6 max-w-lg mx-auto border ${isDarkMode ? "bg-gray-700 border-gray-500" : "bg-gray-100 border-gray-300"}`}>
        <ul className={`divide-y ${isDarkMode ? "divide-gray-600" : "divide-gray-300"}`}>
          {leaderboardData.map((user) => (
            <LeaderboardItem key={user.rank} user={user} isDarkMode={isDarkMode} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;