import React, { Component } from "react";

import left from "../img/left.svg";
import right from "../img/right.svg";

class Ideas extends Component {
  state = { startPosition: 0 };

  componentDidMount() {
    this.logos = document.querySelector(".ideas__visibleLogos");
  }

  //important - .setState as is used here = we do not wait for the state to be changed (async)
  handleLeftArrow = () => {
    this.setState(
      {
        startPosition: this.state.startPosition + 240
      },
      () => {
        this.logos.style.setProperty(
          "background-position",
          `${this.state.startPosition}px 0`
        );
      }
    );
  };

  handleRightArrow = () => {
    this.setState(
      {
        startPosition: this.state.startPosition - 240
      },
      () => {
        this.logos.style.setProperty(
          "background-position",
          `${this.state.startPosition}px 0`
        );
      }
    );
  };

  render() {
    return (
      <section className="ideas">
        <h2 className="ideas__title">Our ideas</h2>
        <div className="ideas__logos">
          <button onClick={this.handleLeftArrow} className="ideas__arrowLeft">
            <img src={left} alt="arrow pointing to the left" />
          </button>
          <div className="ideas__visibleLogos"></div>
          <button onClick={this.handleRightArrow} className="ideas__arrowRight">
            <img src={right} alt="arrow pointing to the right" />
          </button>
        </div>
      </section>
    );
  }
}

export default Ideas;
