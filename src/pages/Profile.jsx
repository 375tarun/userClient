import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";

const ProfileCard = () => {
  const [user, setUser] = useState({
    name: "",
    qualification: "",
    email: "",
    phone: "",
    role: "Student",
  });

  const [activeTab, setActiveTab] = useState("Overview");
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const tabs = ["Overview"];

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
    <div className="h-screen w-full bg-[#EAEAEA] flex">
      <div className="h-full w-full bg-white flex">
        {/* Sidebar */}
        <div className="w-1/3 h-full p-6 bg-[#F7F7F7] flex flex-col items-center">
          <div className="w-28 h-28 flex items-center justify-center bg-[#2DAA9E] text-white text-3xl font-bold rounded-full">
            {user.name ? getInitials(user.name) : "?"}
          </div>
          {isEditing ? (
            <input
              type="text"
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
              className="mt-4 p-2 border rounded w-full text-center"
              placeholder="Enter name"
            />
          ) : (
            <h2 className="text-2xl font-bold text-[#2DAA9E] mt-4">{user.name || "Your Name"}</h2>
          )}
          <p className="mt-2 text-gray-700 text-center font-semibold">{user.role}</p>
          {isEditing ? (
            <input
              type="text"
              value={editedUser.qualification}
              onChange={(e) => setEditedUser({ ...editedUser, qualification: e.target.value })}
              className="mt-2 p-2 border rounded w-full text-center"
              placeholder="Enter qualification"
            />
          ) : (
            <p className="mt-2 text-gray-700 text-center">{user.qualification || "Your Qualification"}</p>
          )}
          <div className="mt-4 space-y-2 text-gray-700 text-center">
            {isEditing ? (
              <input
                type="email"
                value={editedUser.email}
                onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                className="p-2 border rounded w-full"
                placeholder="Enter email"
              />
            ) : (
              <p className="flex items-center justify-center">
                <FaEnvelope className="mr-2 text-[#2DAA9E]" /> {user.email || "Your Email"}
              </p>
            )}
            {isEditing ? (
              <input
                type="text"
                value={editedUser.phone}
                onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
                className="p-2 border rounded w-full"
                placeholder="Enter phone number"
              />
            ) : (
              <p className="flex items-center justify-center">
                <FaPhone className="mr-2 text-[#2DAA9E]" /> {user.phone || "Your Phone"}
              </p>
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
        <div className="w-2/3 h-full p-6">
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
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;