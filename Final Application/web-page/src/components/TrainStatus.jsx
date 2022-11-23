import React, { Component } from "react";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import axios from "axios";
const URL = "http://localhost:5000/";

class TrainStatus extends Component {
  state = {
    msg: null,
    trainNumber: null,
  };
  changeTrainNumber = (e) => {
    console.log(e);
    this.setState({ trainNumber: e.target.value });
  };
  getStatus = (e) => {
    console.log(this.state.trainNumber);
    const payload = {
      _id: this.state.trainNumber,
    };
    console.log(payload);
    axios.post(URL + "train/status", payload).then((res) => {
      console.log(res);
      if (res.data == "") {
        NotificationManager.error("Invalid Train Number");
        return;
      }
      res = res.data;
      var trainNo = res._id;
      var trainName = res.name;
      var trainLocation = res.location;
      this.setState({
        msg: `${trainNo} - ${trainName} is at ${trainLocation}`,
      });
    });
  };
  render() {
    if (this.state.msg != null) {
      return (
        <div>
          <br />
          <br />
          <br />
          <h2> {this.state.msg} </h2>
        </div>
      );
    }
    return (
      <div>
        <div className="component">
          <div className="row m-2 justify-content-center">
            <div className="col-3">Enter the Train Number</div>
            <div className="col-2">
              <input
                type="number"
                onChange={this.changeTrainNumber}
                value={this.state.trainNumber}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-2"></div>
            <div className="col-2">
              <button className="btn btn-primary" onClick={this.getStatus}>
                Get Status
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainStatus;
