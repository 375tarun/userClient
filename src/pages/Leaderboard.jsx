import React from "react";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "John Doe", score: 95 },
    { rank: 2, name: "Jane Smith", score: 90 },
    { rank: 3, name: "Sam Wilson", score: 85 },
    // Add more leaderboard entries here as needed
  ];

  return (
    <div className="p-6 min-h-screen bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-[#2DAA9E]">Leaderboard</h1>

      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left bg-[#2DAA9E] text-white">
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">{entry.rank}</td>
                  <td className="py-2 px-4">{entry.name}</td>
                  <td className="py-2 px-4">{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
