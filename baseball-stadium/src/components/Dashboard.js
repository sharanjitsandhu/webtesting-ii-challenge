import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Display from "./Display";

class Dashboard extends Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0,
    hits: 0
  };

  // strikes reset to 0 when a player reaches 3 strikes.
  strike = () => {
    if (this.state.strikes < 3) {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1
      });
    } else {
      this.setState({
        ...this.state,
        strikes: 0,
        balls: 0
      });
    }
  };

  // balls reset to 0 when a player reaches 4 balls.
  ball = () => {
    if (this.state.balls < 4) {
      this.setState({
        ...this.state,
        balls: this.state.balls + 1
      });
    } else {
      this.setState({
        ...this.state,
        strikes: 0,
        balls: 0
      });
    }
  };

  // a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike.
  // With 1 strike, a foul makes it 2 strikes.
  // With two strikes a foul has no effect, count stays at 2 strikes.
  foul = () => {
    if (this.state.strikes === 0 || this.state.strikes === 1) {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1,
        fouls: this.state.fouls + 1
      });
    } else {
      this.setState({
        ...this.state,
        fouls: this.state.fouls + 1
      });
    }
  };

  hit = () => {
    this.setState({
      ...this.state,
      hits: this.state.hits + 1
    });
  };

  render() {
    return (
      <>
        <button
          onClick={this.strike}
          type="button"
          className="btn btn-outline-secondary"
        >
          Strike
        </button>
        <button
          onClick={this.ball}
          type="button"
          className="btn btn-outline-secondary"
        >
          Ball
        </button>
        <button
          onClick={this.foul}
          type="button"
          className="btn btn-outline-secondary"
        >
          Foul
        </button>
        <button
          onClick={this.hit}
          type="button"
          className="btn btn-outline-secondary"
        >
          Hit
        </button>
        <Display
          strikes={this.state.strikes}
          balls={this.state.balls}
          hits={this.state.hits}
          fouls={this.state.fouls}
        />
      </>
    );
  }
}

export default Dashboard;
