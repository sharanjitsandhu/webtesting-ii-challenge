import React, { Component } from "react";
import "../App.css";

class Display extends Component {
  render(props) {
    return (
      <>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Strikes
            <span className="badge badge-primary badge-pill">
              {this.props.strikes}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Balls
            <span className="badge badge-primary badge-pill">
              {this.props.balls}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Fouls
            <span className="badge badge-primary badge-pill">
              {this.props.fouls}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Hits
            <span className="badge badge-primary badge-pill">
              {this.props.hits}
            </span>
          </li>
        </ul>
      </>
    );
  }
}

export default Display;
