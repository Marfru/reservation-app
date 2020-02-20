import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Arrow from "../../svg/right.svg";

class Hotels extends Component {
  render() {
    return (
      <main className="mx-grid__cards">
        <h1>Hotels</h1>
        <h2>View a list of available hotels to book</h2>
        <div className="mx-grid__cards--container mx-grid__cards">
          <div className="mx-grid__cards--item mx-grid__cards--fill">
            <NavLink className="mx-grid__cards--text" exact to="/book">
              <h3>Marbella</h3>
              <p>72 Hotels</p>
              <img src={Arrow} className="svg__arrow" alt="hotel booking" />
            </NavLink>
          </div>
          <div className="mx-grid__cards--item mx-grid__cards--fill">
            <NavLink className="mx-grid__cards--text" exact to="/book">
              <h3>Marbella</h3>
              <p>72 Hotels</p>
              <img src={Arrow} className="svg__arrow" alt="hotel booking" />
            </NavLink>
          </div>
          <div className="mx-grid__cards--item mx-grid__cards--fill">
            <NavLink className="mx-grid__cards--text" exact to="/book">
              <h3>Marbella</h3>
              <p>72 Hotels</p>
              <img src={Arrow} className="svg__arrow" alt="hotel booking" />
            </NavLink>
          </div>
          <div className="mx-grid__cards--item mx-grid__cards--fill">
            <NavLink className="mx-grid__cards--text" exact to="/book">
              <h3>Marbella</h3>
              <p>72 Hotels</p>
              <img src={Arrow} className="svg__arrow" alt="hotel booking" />
            </NavLink>
          </div>
          <div className="mx-grid__cards--item mx-grid__cards--fill">
            <NavLink className="mx-grid__cards--text" exact to="/book">
              <h3>Marbella</h3>
              <p>72 Hotels</p>
              <img src={Arrow} className="svg__arrow" alt="hotel booking" />
            </NavLink>
          </div>
          <div className="mx-grid__cards--item mx-grid__cards--fill">
            <NavLink className="mx-grid__cards--text" exact to="/book">
              <h3>Marbella</h3>
              <p>72 Hotels</p>
              <img src={Arrow} className="svg__arrow" alt="hotel booking" />
            </NavLink>
          </div>
          <div className="mx-grid__cards--item mx-grid__cards--fill">
            <NavLink className="mx-grid__cards--text" exact to="/book">
              <h3>Marbella</h3>
              <p>72 Hotels</p>
              <img src={Arrow} className="svg__arrow" alt="hotel booking" />
            </NavLink>
          </div>
          <div className="mx-grid__cards--item mx-grid__cards--fill">
            <NavLink className="mx-grid__cards--text" exact to="/book">
              <h3>Marbella</h3>
              <p>72 Hotels</p>
              <img src={Arrow} className="svg__arrow" alt="hotel booking" />
            </NavLink>
          </div>
        </div>
      </main>
    );
  }
}

export default Hotels;
