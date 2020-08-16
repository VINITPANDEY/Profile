import React, { Component } from "react";
import {
    Card,Button
  } from "react-bootstrap";
class Footer extends Component {
  render() {
    return (
      <div className="fixed-bottom footer-section mt-5 mb-5 Sticky footer text-center">
        <hr />
        <small class="p-3">2020 © Copyright by vinitkumar.in</small>   
      </div>
    );
  }
}

export default Footer;
