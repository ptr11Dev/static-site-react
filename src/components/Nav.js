import React, { Component } from "react";

class Nav extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    this.burgerIco = document.querySelector(".nav__burger");
    this.burgerIcoLine = document.querySelectorAll(".nav__burger span");
    this.nav = document.querySelector(".nav");
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleBurger = () => {
    this.burgerIco.classList.toggle("active");

    const list = document.querySelector(".nav__list");
    list.classList.toggle("showMenu");
  };

  handleScroll = e => {
    if (window.scrollY < 100) {
      this.burgerIcoLine.forEach(item =>
        item.style.setProperty("background-color", "#000")
      );
      this.nav.style.cssText =
        "background-color: rgba(0, 0, 0, 0); color:black;";
    } else if (window.scrollY >= 100 && window.scrollY < 200) {
      this.nav.style.cssText =
        "background-color: rgba(0, 0, 0, .2); color:white;";
    } else if (window.scrollY >= 200 && window.scrollY < 300) {
      this.nav.style.cssText =
        "background-color: rgba(0, 0, 0, .4);color:white;";
    } else {
      this.nav.style.cssText =
        "background-color: rgba(0, 0, 0, .7);color:white;";
    }

    if (window.scrollY >= 100) {
      this.burgerIcoLine.forEach(item =>
        item.style.setProperty("background-color", "#fff")
      );
    }
  };

  render() {
    return (
      <>
        <nav className="nav">
          <p className="companyName">Template</p>
          <div className="nav__burger" onClick={this.handleBurger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="/#">
                home
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="!#">
                about
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="# ">
                stories
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href=" #">
                hello
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Nav;
