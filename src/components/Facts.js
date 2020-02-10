import React from "react";

const Facts = () => {
  return (
    <section className="facts">
      <h2 className="facts__title">Facts &amp; Numbers</h2>
      <div className="facts__container">
        <div className="fact">
          <div className="fact__number">33</div>
          <div className="fact__line"></div>
          <div className="fact__title">clients</div>
        </div>
        <div className="fact">
          <div className="fact__number">87</div>
          <div className="fact__line"></div>
          <div className="fact__title">successful projects</div>
        </div>
        <div className="fact">
          <div className="fact__number">17</div>
          <div className="fact__line"></div>
          <div className="fact__title">team members</div>
        </div>
        <div className="fact">
          <div className="fact__number">1</div>
          <div className="fact__line"></div>
          <div className="fact__title">goal</div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
