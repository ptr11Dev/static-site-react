import React, { Component } from "react";

class Footer extends Component {
  state = { currentYear: null };

  componentDidMount() {
    this.popup = document.querySelector(".modal");
    this.getDate();
  }

  getDate = () => {
    const actualYear = new Date().getFullYear();
    this.setState({ currentYear: actualYear });
  };

  handleClick = e => {
    e.preventDefault();
    this.popup.classList.add("modalOn");

    setTimeout(() => {
      this.popup.classList.remove("modalOn");
    }, 3000);
  };

  render() {
    return (
      <footer className="footer">
        <div className="motto">
          <h3 className="motto__company">Template</h3>
          <p className="motto__content">
            This is a place where I place my motto like lorem ipsum dolor.
          </p>
        </div>

        <form action="submit" className="footerForm">
          <input type="text" className="footerForm__mail" placeholder="EMAIL" />
          <input
            type="text"
            className="footerForm__subject"
            placeholder="SUBJECT"
          />
          <textarea
            placeholder="MESSAGE"
            cols="50"
            rows="1"
            className="footerForm__message"
          ></textarea>
          <button className="footerForm__btn" onClick={this.handleClick}>
            Send!
          </button>
        </form>

        <div className="footerLinks">
          <h4 className="footerLinks__title">Links</h4>
          <ul className="footerLinks__list">
            <li>
              <a href="# " className="footerLinks__item">
                Home
              </a>
            </li>
            <li>
              <a href="# " className="footerLinks__item">
                About
              </a>
            </li>
            <li>
              <a href="# " className="footerLinks__item">
                Services
              </a>
            </li>
            <li>
              <a href="# " className="footerLinks__item">
                Contact
              </a>
            </li>
            <li>
              <a href="# " className="footerLinks__item">
                Partners
              </a>
            </li>
          </ul>
        </div>

        <div className="footerSocials">
          <h4 className="footerSocials__title">Social</h4>
          <ul className="footerSocials__list">
            <li>
              <a href="# " className="footerSocials__item">
                Facebook
              </a>
            </li>
            <li>
              <a href="# " className="footerSocials__item">
                Twitter
              </a>
            </li>
            <li>
              <a href="# " className="footerSocials__item">
                Github
              </a>
            </li>
            <li>
              <a href="# " className="footerSocials__item">
                Pinterest
              </a>
            </li>
            <li>
              <a href="# " className="footerSocials__item">
                Linkedin
              </a>
            </li>
            <li>
              <a href="# " className="footerSocials__item">
                Dribble
              </a>
            </li>
            <li>
              <a href="# " className="footerSocials__item">
                Flickr
              </a>
            </li>
          </ul>
        </div>

        <div className="footerEnd">
          <span className="footerEnd__line"></span>
          <p className="footerEnd__text">Few last words!</p>
          <p className="copy">
            &copy;<span className="copy__year">{this.state.currentYear} </span>
            The best company
          </p>
          <ul className="footerEnd__list">
            <li>
              <a href="# " className="footerEnd__item">
                Terms
              </a>
            </li>
            <li>
              <a href="# " className="footerEnd__item">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="# " className="footerEnd__item">
                Contact
              </a>
            </li>
            <li>
              <a href="# " className="footerEnd__item">
                Job
              </a>
            </li>
          </ul>
        </div>

        <div className="modal">
          <p>Thank you for contact!</p>
          <p>
            P.S. Actualy this feature doesn't do much - just showing this popup
            :)
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
