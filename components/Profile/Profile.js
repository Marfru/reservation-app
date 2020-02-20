import React from "react";

const Profile = () => (
  <main className="mx-grid__main">
    <h1>My Profile</h1>
    <h2>Edit your personal details</h2>
    <div className="mx-grid-block">
      <div className="mx-grid-block__container">
        <form>
          <span>Full Name</span>
          <input type="text" value="Michael Campbell" />
          <span>Email</span>
          <input type="text" value="michael_campbell@company.com" />
          <span>Username</span>
          <input type="text" value="Mic" />
          <span>Gender</span>
          <label>
            <input type="checkbox" checked="checked" /> Male
          </label>
          <label>
            <input type="checkbox" /> Female
          </label>
        </form>
      </div>
    </div>
  </main>
);

export default Profile;
