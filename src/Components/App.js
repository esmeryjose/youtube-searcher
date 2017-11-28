import React, { Component } from "react";
import YoutubeApp from "./YoutubeApp";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <YoutubeApp />
      </div>
    );
  }
}

export default App;
