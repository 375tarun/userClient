import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Tarun and Shiva",
    email: "testing@gmail.com",
    password: "",
    phone: "",
    role: "User",
    profilePic: localStorage.getItem("profilePic") || "",
  });

  return (
    <div className="min-h-screen p-6 bg-[#EAEAEA]">
      <div className="max-w-3xl mx-auto">
        <ProfileCard userData={userData} setUserData={setUserData} />
      </div>
    </div>
  );
};

export default Profile;