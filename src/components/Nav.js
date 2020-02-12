import React, { Component } from "react";

class Nav extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    this.burgerIco = document.querySelector(".nav__burger");
    this.burgerIcoLine = document.querySelectorAll(".nav__burger span");
    this.nav = document.querySelector(".nav");

    // section changer
    this.sections = [...document.querySelectorAll("section")];
    this.navItems = [...document.querySelectorAll(".nav__item")];
    this.header = document.querySelector(".header");

    console.log(this.sections);
    this.selectedSection = null;

    this.navItems.forEach((item, index) =>
      item.addEventListener("click", () => {
        this.selectedSection = index;
      })
    );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleMoveUserToSection = () => {
    switch (this.selectedSection) {
      case 0:
        this.header.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        break;
      case 1:
        this.sections[4].scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        break;
      case 2:
        this.sections[5].scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        break;
      case 3:
        this.sections[6].scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        break;

      default:
        console.log("błąd");
        break;
    }
  };

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
            <li className="nav__item" onClick={this.handleMoveUserToSection}>
              home
            </li>
            <li className="nav__item" onClick={this.handleMoveUserToSection}>
              gallery
            </li>
            <li className="nav__item" onClick={this.handleMoveUserToSection}>
              team
            </li>
            <li className="nav__item" onClick={this.handleMoveUserToSection}>
              facts
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Nav;
