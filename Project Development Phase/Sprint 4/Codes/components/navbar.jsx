import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

class Navbar extends Component {
  state = {};
  loadProfile = () => {
    const name = localStorage.getItem("name");
    console.log(name);
    if (name != null) {
      return (
        <Link to="/profile" className="h4">
          {name}
        </Link>
      );
    }
    return (
      <Link to="/login" className="h4">
        Log in
      </Link>
    );
  };
  render() {
    return (
      <div className="container-fluid text-center cus-navbar">
        <div className="row">
          <div className="col-1 justify">
            <img src={logo} alt="img" width="90px" height="90px" />
          </div>
          <div className="col">
            <div className="container m-2">
              <div className="row m-2">
                <div className="col h1">Railway Reservation System</div>
                <div className="col-2">{this.loadProfile()}</div>
              </div>
              <div className="row cus-navbar-second-line">
                <div className="col">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </div>
                <div className="col">
                  <Link className="nav-link active" to="/book-ticket">
                    Book Ticket
                  </Link>
                </div>
                <div className="col">
                  <Link className="nav-link active" to="/status">
                    Track train
                  </Link>
                </div>
                {/* <div className="col">
                  <Link className="nav-link active" to="/about-us">
                    About us
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
