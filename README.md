# Static Website - React

> This project is an example of static website made in React
> Live version is available at: https://ptr11dev.github.io/static-site-react/

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Features](#features)
- [Contact](#contact)

## General info

It was my first project of static website created with React.js.

## Technologies

- React.js - version 16.12.0
- Simple react lightbox - version 2.2.0

## Features

In this section I'd like to present a few solutions that I've used in the project.

- Simple React Lightbox

Used as it is described at: https://www.npmjs.com/package/simple-react-lightbox

- Importing multiple images

Instead of importing each image with import - like this:

```sh
import gal1 from '../img/gallery/gal1.jpg'
import gal2 from '../img/gallery/gal1.jpg'
import gal3 from '../img/gallery/gal1.jpg'
...
```

I've used such function:

```sh
function importAll(arg) {
  let images = {};
  arg.keys().forEach(item => {
    images[item.replace("./", "")] = arg(item);
  });
  return images;
}

const images = importAll(require.context("../img/gallery", false, /\.jpg$/));
```

Where:

1. I'm using require.context as it's described at: https://webpack.js.org/guides/dependency-management/#requirecontext. As arguments I'm passing folder with all the images, information that descending folders shouldn't be checked and information that I'm looking for .jpg files.
2. Function importAll is using keys() method which returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
3. Using both information along with replace() method we can create an array with pairs 'filename: filepath'.

- News component that renders (using map method) posts from an array with all the information about the post.
- Using fetch to get basic information from https://randomuser.me/
- Using callback in a setState

```sh
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
```

These two articles are very important to read:
https://medium.learnreact.com/setstate-takes-a-callback-1f71ad5d2296
https://reactjs.org/docs/react-component.html

## Contact

Created by [Piotr Kaczmarek](piotrkaczmarek.dev@gmail.com) - feel free to contact!
