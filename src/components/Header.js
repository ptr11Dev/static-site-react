import React, { Component } from "react";

import Nav from "./Nav";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <Nav />
        <div className="banner">
          <h1 className="banner__title">Storyteller</h1>
          <span className="banner__line"></span>
          <p className="banner__text">
            A thick mist full of vengeful spirits haunts a prosperous island
            town off the coast of Oregon, as its inhabitants try to learn their
            town's dark secret in order to stop it.
          </p>
          <a href="/" className="banner__btn">
            read more
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
