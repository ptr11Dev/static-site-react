import React, { Component } from "react";

import "../styles/css/Nav.css";

import burger from "../img/burger.svg";
import exit from "../img/exit.svg";

class Nav extends Component {
  state = {};

  handleBurger = () => {
    const menu = document.querySelectorAll(".nav__burger img");
    const list = document.querySelector(".nav__list");

    if (menu[1].classList.contains("inactive")) {
      menu[1].classList.remove("inactive");
      menu[0].classList.add("inactive");
      list.classList.add("showMenu");
    } else if (menu[0].classList.contains("inactive")) {
      menu[0].classList.remove("inactive");
      menu[1].classList.add("inactive");
      list.classList.remove("showMenu");
    }
  };

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
