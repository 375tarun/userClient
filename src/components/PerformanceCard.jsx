import React, { useState } from "react";
import { Link } from "react-router-dom";

const PerformanceCard = ({ metric, onSelect, selectedMetric }) => {
  return (
    <div
      className="shadow-lg rounded-lg p-6 flex flex-col items-center cursor-pointer transition-all bg-white text-gray-900 hover:bg-white"
      onClick={() => onSelect(metric.id)}
    >
      <span className="text-2xl font-semibold text-[#2DAA9E]">{metric.title}</span>
      <p className="text-gray-600 mt-2">{metric.description}</p>

      {selectedMetric === metric.id && (
        <div className="mt-6 flex justify-center">
          <Link
            to="/all-performance"
            className="px-6 py-3 text-lg font-semibold rounded-lg bg-[#66D2CE] text-white hover:bg-[#2DAA9E] transition-all"
          >
            View All
          </Link>
        </div>
      )}
    </div>
  );
};

export default PerformanceCard;