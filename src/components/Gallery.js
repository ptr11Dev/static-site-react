import React, { Component } from "react";

class Gallery extends Component {
  state = {};
  render() {
    return (
      <section className="gallery">
        <h2 className="gallery__title">Gallery</h2>
        <p className="gallery__descrip">
          Some nice photos from around the internet. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Architecto, reiciendis!
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
    );
  }
}

export default Gallery;
