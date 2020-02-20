import React from "react";
import { NavLink } from "react-router-dom";
import Arrow from "../../svg/right.svg";
import MemberPicture from "../../images/profile.png";

const Members = () => (
  <main className="mx-grid__main">
    <h1>Members</h1>
    <h2>Check out who is in your group</h2>
    <div className="mx-grid-block">
      <div className="mx-block__members">
        <div className="mx-block__members--user">
          <div className="mx-block__members--user__image">
            <img src={MemberPicture} alt="Profile avatar" />
          </div>
          <div className="mx-block__members--user__details">
            <h3>Beatrice McKenzie</h3>
            <p>Urbanport</p>
          </div>
          <div className="mx-block__members--user__link">
            <NavLink NavLink exact to="/user">
              <img src={Arrow} className="mx-members__link" alt="user info" />
            </NavLink>
          </div>
        </div>
        <hr />
        <div className="mx-block__members--user">
          <div className="mx-block__members--user__image">
            <img src={MemberPicture} alt="Profile avatar" />
          </div>
          <div className="mx-block__members--user__details">
            <h3>Myrtie Willis</h3>
            <p>Dariusland</p>
          </div>
          <div className="mx-block__members--user__link">
            <NavLink NavLink exact to="/user">
              <img src={Arrow} className="mx-members__link" alt="user info" />
            </NavLink>
          </div>
        </div>
        <hr />
        <div className="mx-block__members--user">
          <div className="mx-block__members--user__image">
            <img src={MemberPicture} alt="Profile avatar" />
          </div>
          <div className="mx-block__members--user__details">
            <h3>Bettie Hanson</h3>
            <p>Mustafamouth</p>
          </div>
          <div className="mx-block__members--user__link">
            <NavLink NavLink exact to="/user">
              <img src={Arrow} className="mx-members__link" alt="user info" />
            </NavLink>
          </div>
        </div>
        <hr />
        <div className="mx-block__members--button">
          <button>Load More</button>
        </div>
      </div>
    </div>
  </main>
);

export default Members;
