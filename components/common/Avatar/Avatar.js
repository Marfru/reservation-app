import React from "react";
import AvatarPicture from "../../../images/profile.png";

const Avatar = () => (
  <div className="avatar">
    <img src={AvatarPicture} alt="Profile avatar" />
    <p>Welcome, Michael</p>
  </div>
);

export default Avatar;
