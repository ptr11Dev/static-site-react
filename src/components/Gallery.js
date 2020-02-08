import React, { Component } from "react";

/* require.context() - allows to create your own context. It allows you to pass in a directory to search, a flag indicating whether subdirectories should be searched too, and a regular expression to match files against.
syntax = require.context(directory, useSubdirectories = true, regExp = /^\.\/.*$/, mode = 'sync'); */

// obj.keys() - returns an array with object's property names
// arg = context
// arg.keys() = array of files that fit the context, i.e. arg.keys()[0]='./gal1.jpg'
// then we use forEach method to create pairs: fileName: fileDirectory

function importAll(arg) {
  let images = {};
  arg.keys().forEach(item => {
    images[item.replace("./", "")] = arg(item);
  });
  return images;
}

const images = importAll(require.context("../img/gallery", false, /\.jpg$/));

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
            <img
              src={images["gal1.jpg"]}
              alt="monk in the river who is pouring water from bowl"
              className="photoList__photo"
            />
          </li>
          <li className="photoList__item">
            <img
              src={images["gal2.jpg"]}
              alt="desert with cloudy sky"
              className="photoList__photo"
            />
          </li>
          <li className="photoList__item">
            <img
              src={images["gal3.jpg"]}
              alt="a lady walking among the field"
              className="photoList__photo"
            />
          </li>
          <li className="photoList__item">
            <img
              src={images["gal4.jpg"]}
              alt="man dancing with fire"
              className="photoList__photo"
            />
          </li>
          <li className="photoList__item">
            <img
              src={images["gal5.jpg"]}
              alt="windmill with cloudy sky in the background"
              className="photoList__photo"
            />
          </li>
          <li className="photoList__item">
            <img
              src={images["gal6.jpg"]}
              alt="small wooden boat on the lake with skyscrapers in the background"
              className="photoList__photo"
            />
          </li>
          <li className="photoList__item">
            <img
              src={images["gal7.jpg"]}
              alt="fjord during sundown"
              className="photoList__photo"
            />
          </li>
          <li className="photoList__item">
            <img
              src={images["gal8.jpg"]}
              alt="a man with surfboard on the beach during sunset"
              className="photoList__photo"
            />
          </li>
          <li className="photoList__item">
            <img
              src={images["gal9.jpg"]}
              alt="a tiger in the river"
              className="photoList__photo"
            />
          </li>
          <li className="photoList__item">
            <img
              src={images["gal10.jpg"]}
              alt="a soldier with machine gun walking in the fire with parachuters in the background"
              className="photoList__photo"
            />
          </li>
          <li className="photoList__item">
            <img
              src={images["gal11.jpg"]}
              alt="two wooden houses among the mountains"
              className="photoList__photo"
            />
          </li>
          <li className="photoList__item">
            <img
              src={images["gal12.jpg"]}
              alt="sunset with windmills in the far distance"
              className="photoList__photo"
            />
          </li>
          <li className="photoList__item">
            <img
              src={images["gal13.jpg"]}
              alt="a wooden house at the lakeside among the mountains"
              className="photoList__photo"
            />
          </li>
          <li className="photoList__item">
            <img
              src={images["gal14.jpg"]}
              alt="foggy forest with wolves on the rock"
              className="photoList__photo"
            />
          </li>
          <li className="photoList__item">
            <img
              src={images["gal15.jpg"]}
              alt="a train on the escarpment in the winter"
              className="photoList__photo"
            />
          </li>
        </ul>
      </section>
    );
  }
}

export default Gallery;
