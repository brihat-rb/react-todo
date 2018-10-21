import React, { Component } from "react";
import "./ShowTime.css";

class ShowTime extends Component {
  state = {
    time: null
  };
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      500
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // console.log("Show Time Rendered");

    return <div className="ticktock">{this.state.time}</div>;
  }
}

export default ShowTime;
