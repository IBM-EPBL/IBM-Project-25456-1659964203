import React, { Component } from "react";
import axios from "axios";
import { Link, Navigate, redirect } from "react-router-dom";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";

import "./navbarStyle.css";

class LoginPage extends Component {
  state = {
    URL: "http://localhost:5000",
    email: null,
    password: null,
    is_logged_in: false,
  };
  onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.email,
      password: this.password,
    };
    axios.post(this.state.URL + "/login/", data).then((e) => {
      console.log(e.data);
      if (e.data === "notValid") {
        NotificationManager.error(
          "If you forgot your password use 'forgot password'",
          "Invalid Login"
        );
      } else if (e.data === "Valid") {
        //Success
        NotificationManager.success("Login Successful");
        console.log("Fetch");
        axios
          .post(this.state.URL + "/user/getFullDetails", { _id: data.email })
          .then((res) => {
            console.log(res.data);
            localStorage.setItem("name", res.data.name);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("id", e.data);
            localStorage.setItem("balance", res.data.balance);
            this.setState({ is_logged_in: true });
          });
      } else {
        NotificationManager.warning("Error");
      }
    });
  };
  render() {
    if (this.state.is_logged_in) return <Navigate to="/" />;
    return (
      <div className="text-center customstyle-navbar">
        <main className="form-signin">
          <form
            onSubmit={this.onSubmit}
            encType="multipart/form-data"
            method="POST"
          >
            <img
              className="mb-4"
              src="/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt=""
              style={{
                width: "72",
                height: "57",
              }}
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                name="email"
                autoComplete="email"
                onChange={(e) => {
                  this.email = e.target.value;
                }}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                autoComplete="password"
                onChange={(e) => {
                  this.password = e.target.value;
                }}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <br />
            <br />
            <Link to="/createAccount" className="btn btn-success">
              Create Account
            </Link>
            <p className="mt-5 mb-3 text-muted">&copy; RRS:2017–2021</p>
          </form>
        </main>
      </div>
    );
  }
}

export default LoginPage;
