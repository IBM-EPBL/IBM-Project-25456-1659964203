import "./App.css";
import React, { Component } from "react";
import { Routes, Route, Link, BrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./components/login.jsx";
import HomePage from "./components/home.jsx";
import Navbar from "./components/navbar";
import CreateAccount from "./components/createAccount";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import Profile from "./components/profile";
import Recent from "./components/recents";
import Reservation from "./components/reservation";
import TrainStatus from "./components/TrainStatus";
import AboutUs from "./components/about-us";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recents" element={<Recent />} />
          <Route path="/book-ticket" element={<Reservation />} />
          <Route path="/status" element={<TrainStatus />} />
        </Routes>
        <NotificationContainer />
      </BrowserRouter>
    );
  }
}

export default App;
