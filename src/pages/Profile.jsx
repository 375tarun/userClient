import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";

const ProfileCard = () => {
  const [user, setUser] = useState({
    name: "Tarun And Shiva",
    username: "T&S",
    bio: "Full Stack Developer | UI/UX Enthusiast",
    email: "Testing@gmail.com",
    phone: "+91 7982424690",
  });

  const [activeTab, setActiveTab] = useState("Overview");
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const tabs = ["Overview", "Performance", "Test"];

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  const getInitials = (name) => {
    const words = name.split(" ");
    return words.length > 1
      ? words[0][0].toUpperCase() + words[words.length - 1][0].toUpperCase()
      : words[0][0].toUpperCase();
  };

  return (
    <div className="min-h-screen bg-[#EAEAEA] p-8 flex justify-center">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg flex">
        {/* Sidebar */}
        <div className="w-1/3 p-6 bg-[#F7F7F7] border-r border-gray-300 flex flex-col items-center">
          <div className="w-28 h-28 flex items-center justify-center bg-[#2DAA9E] text-white text-3xl font-bold rounded-full">
            {getInitials(user.name)}
          </div>
          {isEditing ? (
            <input
              type="text"
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
              className="mt-4 p-2 border rounded w-full text-center"
            />
          ) : (
            <h2 className="text-2xl font-bold text-[#2DAA9E] mt-4">{user.name}</h2>
          )}
          <p className="text-gray-500">@{user.username}</p>
          {isEditing ? (
            <textarea
              value={editedUser.bio}
              onChange={(e) => setEditedUser({ ...editedUser, bio: e.target.value })}
              className="mt-2 p-2 border rounded w-full"
            />
          ) : (
            <p className="mt-2 text-gray-700 text-center">{user.bio}</p>
          )}
          <div className="mt-4 space-y-2 text-gray-700 text-center">
            {isEditing ? (
              <input
                type="email"
                value={editedUser.email}
                onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                className="p-2 border rounded w-full"
              />
            ) : (
              <p className="flex items-center justify-center"><FaEnvelope className="mr-2 text-[#2DAA9E]" /> {user.email}</p>
            )}
            {isEditing ? (
              <input
                type="text"
                value={editedUser.phone}
                onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
                className="p-2 border rounded w-full"
              />
            ) : (
              <p className="flex items-center justify-center"><FaPhone className="mr-2 text-[#2DAA9E]" /> {user.phone}</p>
            )}
          </div>
          <button
            className="mt-4 px-4 py-2 bg-[#2DAA9E] text-white rounded flex items-center"
            onClick={isEditing ? handleSaveClick : handleEditClick}
          >
            <FaEdit className="mr-2" /> {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        {/* Main Content */}
        <div className="w-2/3 p-6">
          {/* Tabs */}
          <div className="flex space-x-6 border-b pb-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium transition ${
                  activeTab === tab ? "text-[#2DAA9E] border-b-2 border-[#2DAA9E]" : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Sections */}
          <div className="mt-6">
            {activeTab === "Performance" && (
              <div>
                <h3 className="text-xl font-semibold text-[#2DAA9E]">Performance Metrics</h3>
                <p className="mt-4 text-gray-700">Performance details will be displayed here.</p>
              </div>
            )}

            {activeTab === "Test" && (
              <div>
                <h3 className="text-xl font-semibold text-[#2DAA9E]">Test Results</h3>
                <p className="mt-4 text-gray-700">Test results and assessments will be shown here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;