import React, { Component } from "react";
import "./styles/css/style.css";

import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
