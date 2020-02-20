import React, { Component } from "react";
import Avatar from "../Avatar/Avatar";
import { NavLink } from "react-router-dom";
import Dashboard from "../../../svg/dashboard.svg";
import Hotels from "../../../svg/hotels.svg";
import Bookings from "../../../svg/bookings.svg";
import Members from "../../../svg/members.svg";
import Profile from "../../../svg/profile.svg";
import LogOut from "../../../svg/logout.svg";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "mx-grid__aside--close",
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    const menu = this.state.menu;
    document.getElementsByTagName("aside")[0].setAttribute("id", menu);
    document
      .getElementsByClassName("mx-toggle__menu--icon")[0]
      .setAttribute("id", menu);
  }
  render() {
    const toggleMenu = this.toggleMenu;
    return (
      <aside className="mx-grid__aside" id="mx-grid__aside--close">
        <Avatar />
        <hr className="mx-grid__aside--hr" />
        <ul class="mx-grid__aside--list">
          <li class="mx-grid__aside--list__item">
            <NavLink
              exact
              to="/"
              activeClassName="is-active"
              onClick={e => toggleMenu()}
            >
              <img src={Dashboard} className="svg" alt="Dashboard icon" />
              Dashboard
            </NavLink>
          </li>
          <li class="mx-grid__aside--list__item">
            <NavLink
              exact
              to="/hotels"
              activeClassName="is-active"
              onClick={e => toggleMenu()}
            >
              <img src={Hotels} className="svg" alt="Hotels icon" />
              Hotels
            </NavLink>
          </li>
          <li class="mx-grid__aside--list__item">
            <NavLink
              exact
              to="/bookings"
              activeClassName="is-active"
              onClick={e => toggleMenu()}
            >
              <img src={Bookings} className="svg" alt="Bookings icon" />
              Bookings
            </NavLink>
          </li>
          <li class="mx-grid__aside--list__item">
            <NavLink
              exact
              to="/tasks"
              activeClassName="is-active"
              onClick={e => toggleMenu()}
            >
              <img src={Bookings} className="svg" alt="Tasks icon" />
              Tasks
            </NavLink>
          </li>
          <li class="mx-grid__aside--list__item">
            <NavLink
              exact
              to="/members"
              activeClassName="is-active"
              onClick={e => toggleMenu()}
            >
              <img src={Members} className="svg" alt="Members icon" />
              Members
            </NavLink>
          </li>
          <li class="mx-grid__aside--list__item">
            <NavLink
              exact
              to="/profile"
              activeClassName="is-active"
              onClick={e => toggleMenu()}
            >
              <img src={Profile} className="svg" alt="Profile icon" />
              My Profile
            </NavLink>
          </li>
        </ul>
        <div className="mx-logout">
          <img src={LogOut} className="svg" alt="Logout icon" />
        </div>
      </aside>
    );
  }
}

export default Sidebar;
