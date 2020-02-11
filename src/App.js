import React, { Component } from "react";
import "./styles/css/style.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import SimpleReactLightbox from "simple-react-lightbox";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <SimpleReactLightbox>
          <Header />
          <Main />
          <Footer />
        </SimpleReactLightbox>
      </div>
    );
  }
}

export default App;
