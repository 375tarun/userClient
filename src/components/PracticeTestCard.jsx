import React from "react";

const TestCard = ({ test, onSelect }) => {
  return (
    <div
      className="shadow-lg rounded-lg p-6 flex flex-col items-center cursor-pointer transition-all bg-white text-gray-900 hover:bg-white"
      onClick={() => onSelect(test.id)}
    >
      <span className="text-2xl font-semibold text-[#2DAA9E]">{test.title}</span>
      <p className="text-gray-600 mt-2">{test.description}</p>
    </div>
  );
};

export default TestCard;