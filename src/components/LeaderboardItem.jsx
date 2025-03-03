import React from "react";

const LeaderboardItem = ({ user, isDarkMode }) => {
  return (
    <li
      className={`flex justify-between items-center py-3 px-4 border-b transition-all rounded-lg shadow-sm ${
        isDarkMode
          ? "bg-gray-800 text-gray-200 hover:bg-gray-700 border-gray-600"
          : "bg-white text-gray-900 hover:bg-gray-200 border-gray-400"
      }`}
    >
      <span className="text-lg font-semibold">{user.rank}. {user.name}</span>
      <span className="font-bold">{user.score} pts</span>
    </li>
  );
};

export default LeaderboardItem;
