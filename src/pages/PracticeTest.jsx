import React, { useState } from "react";
import PracticeTestCard from "../components/PracticeTestCard"; // Import new component

const PracticeTest = ({ isDarkMode }) => {
  const [selectedTest, setSelectedTest] = useState(null);

  const testCategories = [
    { id: "previous", title: "Previous Tests", description: "Analyze past performance." },
    { id: "mock", title: "Mock Tests", description: "Assess preparation with mock tests." },
  ];

  return (
    <div className={`p-6 min-h-screen ${
      isDarkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-900"
    }`}>
      <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
        Practice Test
      </h1>

      {selectedTest && (
        <button
          className={`mb-4 px-4 py-2 font-semibold rounded-lg transition-all ${
            isDarkMode
              ? "bg-gray-600 text-white hover:bg-gray-500"
              : "bg-gray-300 text-black hover:bg-gray-400"
          }`}
          onClick={() => setSelectedTest(null)}
        >
          Back to Tests
        </button>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testCategories.map((test) =>
          selectedTest === null || selectedTest === test.id ? (
            <PracticeTestCard key={test.id} test={test} onSelect={setSelectedTest} isDarkMode={isDarkMode} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default PracticeTest;