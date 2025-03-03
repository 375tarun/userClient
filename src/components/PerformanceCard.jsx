import React from "react";
import { Link } from "react-router-dom";

const PerformanceCard = ({ metric, onSelect, isDarkMode, selectedMetric }) => {
  return (
    <div
      className={`shadow-lg rounded-lg p-6 flex flex-col items-center cursor-pointer transition-all ${
        isDarkMode ? "bg-gray-800 text-gray-200 hover:bg-gray-700" : "bg-white text-gray-900 hover:bg-gray-300"
      }`}
      onClick={() => onSelect(metric.id)}
    >
      <span className={`text-2xl font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
        {metric.title}
      </span>
      <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mt-2`}>{metric.description}</p>

      {/* "View All" Button - Only shows when a metric is opened (selected) */}
      {selectedMetric === metric.id && (
        <div className="mt-6 flex justify-center">
          <Link
            to="/all-performance"
            className={`px-6 py-3 text-lg font-semibold rounded-lg transition-all ${
              isDarkMode
                ? "bg-gray-600 text-white hover:bg-gray-500"
                : "bg-gray-400 text-black hover:bg-gray-500"
            }`}
          >
            View All
          </Link>
        </div>
      )}
    </div>
  );
};

export default PerformanceCard;
