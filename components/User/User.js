import React from "react";

const User = () => (
  <main className="mx-grid__main">
    <h1>Beatrice's Summary</h1>
    <h2>View details of the selected member</h2>
    <div className="mx-grid-block">
      <div className="mx-grid-block__container mx-grid-block__summary">
        <p>
          Beatrice has 9+ years of experience in Agile Development, Business
          process analysis, Project delivery, Programming, and Mendix modelling.
          He has global experience identifying, training, and developing Mendix
          Subject Matter Experts (SMEs) by both building from the ground up to
          leveraging client's existing IT resources.
        </p>
        <div className="mx-grid-block__summary--info">
          <div className="mx-grid-block__summary--info--details">
            <div className="icon" />
            <p>Member since Apr 7, 2011</p>
          </div>
          <div className="mx-grid-block__summary--info--details">
            <div className="icon" />
            <p>Last Active: Today</p>
          </div>
        </div>
        <div className="mx-grid-block__summary--social">
          <h5>Social Profiles</h5>
          <div className="mx-grid-block__summary--social--icons">
            <div className="icon" />
            <div className="icon" />
            <div className="icon" />
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default User;
