import React, { Component } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";

import "./navbarStyle.css";
import { Button } from "bootstrap";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
class createAccount extends Component {
  state = {
    URL: "http://localhost:5000",
    name: null,
    email: null,
    password: null,
    account_created: false,
  };
  onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    console.log(data);
    axios.post(this.state.URL + "/login/create", data).then(async (e) => {
      console.log(e.data);
      if (e.data === "Already Registered!") {
        NotificationManager.error(
          "If you forgot your password use 'forgot password'",
          "Email exists"
        );
      } else if (e.data === "Account Created") {
        //Success
        NotificationManager.success(
          "Your Account has been successfully created"
        );
        NotificationManager.info("Login with your account");
        await sleep(1000);
        NotificationManager.info("you're being redirected");
        await sleep(4000);
        this.setState({ account_created: true });
      } else {
        NotificationManager.warning("Error");
      }
    });
  };
  render() {
    if (this.state.account_created) return <Navigate to="/login" />;
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
            <h1 className="h3 mb-3 fw-normal">Create Account</h1>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                name="name"
                onChange={(e) => {
                  this.name = e.target.value;
                }}
              />
              <label htmlFor="floatingInput">Your Name</label>
            </div>

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

            <br />
            <button type="submit" className="btn btn-success">
              Create Account
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; RRS:2017–2021</p>
          </form>
        </main>
      </div>
    );
  }
}

export default createAccount;
