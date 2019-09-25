import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Brandonpic from "../images/BrandonPic.jpg";
export default function TopNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <div>
            <div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
              <div class="well profile">
                <div class="col-sm-12">
                  <div class="col-xs-12 col-sm-8">
                    {" "}
                    <img src={Brandonpic} className="round-img" />
                    <h2>Brandon Gines</h2>
                    <p>
                      <strong>About: </strong> Web Designer / UI.{" "}
                    </p>
                    <p>
                      <strong>Hobbies: </strong> Read, out with friends, listen
                      to music, draw and learn new things.{" "}
                    </p>
                    <p>
                      <li class="active">
                        <Nav.Link href="/">About Me</Nav.Link>
                      </li>
                      <li>
                        <Nav.Link href="/portfolio">Projects</Nav.Link>
                      </li>

                      <li>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                      </li>
                      <li>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
