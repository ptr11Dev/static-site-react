import React, { Component } from "react";

import "../styles/css/Nav.css";

import burger from "../img/burger.svg";
import exit from "../img/exit.svg";

class Nav extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleBurger = () => {
    const menu = document.querySelectorAll(".nav__burger img");
    const list = document.querySelector(".nav__list");

    menu.forEach(item => item.classList.toggle("inactive"));
    list.classList.toggle("showMenu");
  };

  initalNavBgc = "rgba(0, 0, 0, .2)";
  scrolledNavBgc = "rgba(0, 0, 0, .7)";

  // check
  /*   handleScroll = e => {
    console.log(e.target.value);
    console.log(window.scrollY);
    console.log(document.documentElement.style);

    if (window.scrollY === 0) {
      this.documentStyle.setProperty(
        "--navbar-background-color",
        this.initalNavbarBackgroundColor
      );
    } else {
      this.documentStyle.setProperty(
        "--navbar-background-color",
        this.scrolledNavbarBackgroundColor
      );
    }
  }; */

  render() {
    return (
      <>
        <nav className="nav">
          <p className="companyName">Template</p>
          <div className="nav__burger">
            <img src={burger} alt="menu icon" onClick={this.handleBurger} />
            <img
              src={exit}
              alt="menu icon exit"
              className="inactive"
              onClick={this.handleBurger}
            />
          </div>
          <ul className="nav__list">
            <li className="nav__item">home</li>
            <li className="nav__item">about</li>
            <li className="nav__item">stories</li>
            <li className="nav__item">hello</li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Nav;
