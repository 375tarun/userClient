import React, { useState } from "react";
import PracticeTestCard from "../components/PracticeTestCard"; // Import new component

const PracticeTest = () => {
  const [selectedTest, setSelectedTest] = useState(null);

  const testCategories = [
    { id: "previous", title: "Previous Tests", description: "Analyze past performance." },
    { id: "mock", title: "Mock Tests", description: "Assess preparation with mock tests." },
  ];

  return (
    <div className="p-6 min-h-screen bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-[#2DAA9E]">Practice Test</h1>

      {selectedTest && (
        <button
          className="mb-4 px-4 py-2 font-semibold rounded-lg bg-[#66D2CE] text-white hover:bg-[#2DAA9E] transition-all"
          onClick={() => setSelectedTest(null)}
        >
          Back to Tests
        </button>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testCategories.map((test) =>
          selectedTest === null || selectedTest === test.id ? (
            <PracticeTestCard key={test.id} test={test} onSelect={setSelectedTest} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default PracticeTest;