import React from "react";

const LeaderboardItem = ({ user }) => {
  return (
    <div className="flex items-center justify-between py-3 px-6 border-b border-[#E3D2C3]">
      <span className="text-xl font-semibold text-[#2DAA9E]">
        {user.rank}. {user.name}
      </span>
      <p className="text-lg font-bold text-[#2DAA9E]">{user.score} pts</p>
    </div>
  );
};

export default LeaderboardItem;
