import React from "react";

const TestCard = ({ test, onSelect, isDarkMode }) => {
  return (
    <div
      className={`shadow-lg rounded-lg p-6 flex flex-col items-center cursor-pointer transition-all duration-300 border ${
        isDarkMode
          ? "bg-gray-800 text-gray-200 hover:bg-gray-700 border-gray-600"
          : "bg-white text-gray-900 hover:bg-gray-200 border-gray-400"
      }`}
      onClick={() => onSelect(test.id)}
    >
      <span className={`text-2xl font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
        {test.title}
      </span>
      <p className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{test.description}</p>
    </div>
  );
};

export default TestCard;