import React, { useState } from "react";
import PerformanceCard from "../components/PerformanceCard"; // Import new component

const Performance = ({ isDarkMode }) => {
  const [selectedMetric, setSelectedMetric] = useState(null);

  const performanceMetrics = [
    { id: "chart", title: "Performance Chart", description: "Visualize your progress with charts." },
    { id: "tests", title: "Number of Tests", description: "View the total tests attempted." },
    { id: "score", title: "Score Summary", description: "Check your overall test scores." },
  ];

  return (
    <div
      className={`p-6 min-h-screen ${
        isDarkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
        Performance
      </h1>

      {selectedMetric && (
        <button
          className={`mb-4 px-4 py-2 font-semibold rounded-lg transition-all ${
            isDarkMode
              ? "bg-gray-600 text-white hover:bg-gray-500"
              : "bg-gray-300 text-black hover:bg-gray-400"
          }`}
          onClick={() => setSelectedMetric(null)}
        >
          Back to Performance
        </button>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {performanceMetrics.map((metric) =>
          selectedMetric === null || selectedMetric === metric.id ? (
            <PerformanceCard
              key={metric.id}
              metric={metric}
              onSelect={setSelectedMetric}
              isDarkMode={isDarkMode} // Pass dark mode state to the PerformanceCard
              selectedMetric={selectedMetric} // Pass selectedMetric to conditionally render the button
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Performance;