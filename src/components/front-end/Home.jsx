import React, { Component } from "react";
import { Col, Form } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 bg-danger">1</div>
          <div className="col-sm bg-info">2</div>
        </div>
      </div>
    );
  }
}

export default Home;
