import React, { Component } from "react";

import road from "../img/road.svg";

import Services from "./Services";
import Ideas from "./Ideas";
import Gallery from "./Gallery";
import Team from "./Team";
import Facts from "./Facts";
import News from "./News";

class Main extends Component {
  state = {};

  render() {
    return (
      <main>
        <section className="intro">
          <img src={road} alt="icon of road" className="intro__icon" />
          <h2 className="intro__title">Who &amp; Why</h2>
          <p className="intro__text">
            Jason was an iconic madman who haunts Camp Crystal Lake and the
            surrounding area, driven to slaughter anyone he encounters by a
            burning need to avenge the death of his beloved mother, Pamela
            Voorhees. Jason Voorhees has killed about 161 people, (some of which
            are completely off screen) over the years.
          </p>
        </section>
        <Services />
        <Ideas />
        <Gallery />
        <Team />
        <Facts />
        <News />
      </main>
    );
  }
}

export default Main;
