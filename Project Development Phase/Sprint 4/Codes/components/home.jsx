import React, { Component } from "react";
import { Link } from "react-router-dom";
import trainImage from "./train1.jpg";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <br />
        <br />
        <div className="row">
          <div className="col-6">
            <img src={trainImage} alt="" width="600vw" height="500vh" />
          </div>
          <div className="col" style={{ fontSize: 35 }}>
            <br />
            <br />
            Railway transport is one of the cheapest, fastest, convenient and
            biggest mode of transport in India. This website is created to
            enhance the user experience during the journey in train.
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
