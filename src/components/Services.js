import React from "react";

import key from "../img/key.svg";
import cocktail from "../img/cocktail.svg";
import stopwatch from "../img/stopwatch.svg";

const Services = () => {
  return (
    <>
      <section className="services">
        <article className="feature">
          <img src={cocktail} alt="" className="feature__icon" />
          <h3 className="feature__title">A Wow Feature</h3>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            tempora sunt repellat minus, placeat architecto.
          </p>
        </article>
        <article className="feature">
          <img src={stopwatch} alt="" className="feature__icon" />
          <h3 className="feature__title">A Beautiful Feature</h3>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            tempora sunt repellat minus, placeat architecto.
          </p>
        </article>
        <article className="feature">
          <img src={key} alt="" className="feature__icon" />
          <h3 className="feature__title">An Amazing Feature</h3>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            tempora sunt repellat minus, placeat architecto.
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
            If you set your goals ridiculously high and it's a failure, you will
            fail above everyone else's success.
          </p>
          <footer className="quote__author">James Cameron</footer>
        </blockquote>
      </section>
    </>
  );
};

export default Services;
