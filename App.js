import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ToggleMenu from "./components/common/ToggleMenu/ToggleMenu";
import ThemeChanger from "./components/common/ThemeChanger/ThemeChanger";
import Sidebar from "./components/common/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Hotels from "./components/Hotels/Hotels";
import Bookings from "./components/Bookings/Bookings";
import Tasks from "./components/Tasks/Tasks";
import Members from "./components/Members/Members";
import Profile from "./components/Profile/Profile";
import Book from "./components/Book/Book";
import User from "./components/User/User";

class App extends Component {
  render() {
    return (
      <div className="mx-grid">
        <ToggleMenu />
        <ThemeChanger />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/members" component={Members} />
          <Route path="/profile" component={Profile} />
          <Route path="/book" component={Book} />
          <Route path="/user" component={User} />
        </Switch>
        <footer className="mx-grid__footer">
          <div class="mx-grid__footer--docs">
            <a
              href="http://mxdocs.marfru.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read documentation
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
