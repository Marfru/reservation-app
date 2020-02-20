import React, { Component } from "react";

class ThemeChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme() {
    const theme = this.state.theme === "light" ? "dark" : "light";
    document.documentElement.classList.add("theme-transition");
    this.setState({ theme });
    document.documentElement.setAttribute("data-theme", theme);
    window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 1000);
  }
  render() {
    const toggleTheme = this.toggleTheme;
    return (
      <header className="mx-grid__header">
        <div class="mx-grid__header--theme">
          <button onClick={e => toggleTheme()}>Theme Changer</button>
        </div>
      </header>
    );
  }
}

export default ThemeChanger;
