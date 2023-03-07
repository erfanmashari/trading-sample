import React, { Component } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Chart from "./components/Chart"

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <main className="home-background w-full">
          <Route path="/login"><Login /></Route>
          <Route path="/" exact={true}><Home /></Route>
        </main>
      </Router>
    );
  }
}

export default App;
