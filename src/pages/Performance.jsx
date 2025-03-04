import React, { useState } from "react";
import PerformanceCard from "../components/PerformanceCard";

const Performance = () => {
  const [selectedMetric, setSelectedMetric] = useState(null);

  const performanceMetrics = [
    { id: "chart", title: "Performance Chart", description: "Visualize your progress with charts." },
    { id: "tests", title: "Number of Tests", description: "View the total tests attempted." },
    { id: "score", title: "Score Summary", description: "Check your overall test scores." },
  ];

  return (
    <div className="p-6 min-h-screen bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-[#2DAA9E]">Performance</h1>

      {selectedMetric && (
        <button
          className="mb-4 px-4 py-2 font-semibold rounded-lg bg-[#66D2CE] text-white hover:bg-[#2DAA9E] transition-all"
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
              selectedMetric={selectedMetric}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Performance;