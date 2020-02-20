import React, { Component } from "react";

class ToggleMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "mx-grid__aside--close",
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    const menu =
      this.state.menu === "mx-grid__aside--close"
        ? "mx-grid__aside--open"
        : "mx-grid__aside--close";
    this.setState({ menu });
    document.getElementsByTagName("aside")[0].setAttribute("id", menu);
    document
      .getElementsByClassName("mx-toggle__menu--icon")[0]
      .setAttribute("id", menu);
  }

  render() {
    const toggleMenu = this.toggleMenu;
    return (
      <div class="mx-toggle__menu">
        <button
          className="mx-toggle__menu--icon"
          id="mx-grid__aside--close"
          onClick={e => toggleMenu()}
        />
      </div>
    );
  }
}

export default ToggleMenu;
