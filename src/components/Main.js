import React, { Component } from "react";

import road from "../img/road.svg";
import key from "../img/key.svg";
import cocktail from "../img/cocktail.svg";
import stopwatch from "../img/stopwatch.svg";

import Ideas from "./Ideas";

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
        <section className="services">
          <article className="feature">
            <img src={cocktail} alt="" className="feature__icon" />
            <h3 className="feature__title">A Wow Feature</h3>
            <p className="feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate tempora sunt repellat minus, placeat architecto.
            </p>
          </article>
          <article className="feature">
            <img src={stopwatch} alt="" className="feature__icon" />
            <h3 className="feature__title">A Beautiful Feature</h3>
            <p className="feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate tempora sunt repellat minus, placeat architecto.
            </p>
          </article>
          <article className="feature">
            <img src={key} alt="" className="feature__icon" />
            <h3 className="feature__title">An Amazing Feature</h3>
            <p className="feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate tempora sunt repellat minus, placeat architecto.
            </p>
          </article>
        </section>
        <section className="famous">
          <h2 className="famous__title">Famous quotes</h2>
          <p className="famous__descrip">
            The insight and experience of others is a valuable source of
            inspiration and motivation. And learning from successful leaders and
            entrepreneurs is a fantastic way to grow.
          </p>
          <blockquote className="quote">
            <p className="quote__content">
              The greatest glory in living lies not in never falling, but in
              rising every time we fall.
            </p>
            <footer className="quote__author">Nelson Mandela</footer>
          </blockquote>
          <blockquote className="quote">
            <p className="quote__content">
              If life were predictable it would cease to be life, and be without
              flavor.
            </p>
            <footer className="quote__author">Eleanor Roosevelt</footer>
          </blockquote>
          <blockquote className="quote">
            <p className="quote__content">
              If you set your goals ridiculously high and it's a failure, you
              will fail above everyone else's success.
            </p>
            <footer className="quote__author">James Cameron</footer>
          </blockquote>
        </section>
        <Ideas />
        <section className="gallery">
          <h2 className="gallery__title">Gallery</h2>
          <p className="gallery_descrip">
            Some nice photos from around the internet. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Architecto, reiciendis!
          </p>
          <ul className="photoList">
            <li className="photoList__item">
              <img src="" alt="" className="photoList__photo" />
            </li>
            <li className="photoList__item">
              <img src="" alt="" className="photoList__photo" />
            </li>
            <li className="photoList__item">
              <img src="" alt="" className="photoList__photo" />
            </li>
            <li className="photoList__item">
              <img src="" alt="" className="photoList__photo" />
            </li>
            <li className="photoList__item">
              <img src="" alt="" className="photoList__photo" />
            </li>
            <li className="photoList__item">
              <img src="" alt="" className="photoList__photo" />
            </li>
            <li className="photoList__item">
              <img src="" alt="" className="photoList__photo" />
            </li>
            <li className="photoList__item">
              <img src="" alt="" className="photoList__photo" />
            </li>
            <li className="photoList__item">
              <img src="" alt="" className="photoList__photo" />
            </li>
            <li className="photoList__item">
              <img src="" alt="" className="photoList__photo" />
            </li>
            <li className="photoList__item">
              <img src="" alt="" className="photoList__photo" />
            </li>
            <li className="photoList__item">
              <img src="" alt="" className="photoList__photo" />
            </li>
            <li className="photoList__item">
              <img src="" alt="" className="photoList__photo" />
            </li>
            <li className="photoList__item">
              <img src="" alt="" className="photoList__photo" />
            </li>
            <li className="photoList__item">
              <img src="" alt="" className="photoList__photo" />
            </li>
          </ul>
        </section>
      </main>
    );
  }
}

export default Main;
