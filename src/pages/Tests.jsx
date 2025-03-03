import React, { useState } from "react";
import TestCard from "../components/TestCard";

const Test = ({ isDarkMode }) => {
  const [selectedTest, setSelectedTest] = useState(null);

  const testCategories = [
    { id: "available", title: "Available Tests", description: "View and attempt available tests." },
    { id: "upcoming", title: "Upcoming Tests", description: "Check schedule for upcoming tests." },
    { id: "previous", title: "Previous Tests", description: "Review your past test performance." },
  ];

  return (
    <div
      className={`p-6 min-h-screen ${
        isDarkMode
          ? "bg-gray-800 text-gray-200"
          : "bg-white text-gray-900"
      }`}
    >
      <h1
        className={`text-3xl font-bold mb-6 ${
          isDarkMode ? "text-gray-300" : "text-gray-800"
        }`}
      >
        Test Section
      </h1>

      {selectedTest && (
        <button
          className={`mb-4 px-4 py-2 font-semibold rounded-lg transition-all ${
            isDarkMode
              ? "bg-gray-600 text-white hover:bg-gray-500"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          onClick={() => setSelectedTest(null)}
        >
          Back to Tests
        </button>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testCategories.map((test) =>
          selectedTest === null || selectedTest === test.id ? (
            <TestCard key={test.id} test={test} onSelect={setSelectedTest} isDarkMode={isDarkMode} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Test;