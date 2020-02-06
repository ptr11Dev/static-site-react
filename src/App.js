import React, { Component } from "react";
import "./styles/css/App.css";

import Nav from "./components/Nav";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="header">
          <Nav />
        </header>
      </div>
    );
  }
}

export default App;
