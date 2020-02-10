import React from "react";

const Facts = () => {
  return (
    <section className="facts">
      <h2 className="facts__title">Facts &amp; Numbers</h2>
      <div className="facts__container">
        <div className="fact">
          <div className="fact__amount">33</div>
          <div className="fact__line"></div>
          <h3 className="fact__title">clients</h3>
        </div>
        <div className="fact">
          <div className="fact__amount">87</div>
          <div className="fact__line"></div>
          <h3 className="fact__title">successful projects</h3>
        </div>
        <div className="fact">
          <div className="fact__amount">17</div>
          <div className="fact__line"></div>
          <h3 className="fact__title">team members</h3>
        </div>
        <div className="fact">
          <div className="fact__amount">1</div>
          <div className="fact__line"></div>
          <h3 className="fact__title">goal</h3>
        </div>
      </div>
    </section>
  );
};

export default Facts;
