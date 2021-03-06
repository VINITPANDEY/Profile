import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Bootstrap,
  Grid,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="App">
          {
            <Navbar collapseOnSelect expand="lg" bg="light">
              <div className="container">
                <Navbar.Brand href="" className="font-weight-bold">
                  CODE WITH VINIT
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">About</Nav.Link>
                    <Nav.Link href="">Contact</Nav.Link>
                    <Nav.Link href="">Tutorial</Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link href="">Login</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Navbar>
          }
        </div>
      </div>
    );
  }
}
export default Header;
