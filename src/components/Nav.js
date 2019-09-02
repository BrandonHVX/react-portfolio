import React, { Component } from "react";

import Brandonpic from "../images/BrandonPic.jpg";

import linked from "../images/linked.svg";
import twitter from "../images/twitter.svg";
import git from "../images/git.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./nav.css";

const social = {
  width: 30,
  marginRight: "5px"
};

const sidebarbody = {
  display: "flex",
  justifyContent: "center"
};

export default class Nav extends Component {
  render() {
    return (
      <div class="nav flex-sm-column">
        <nav id="sidebar">
          <div class="sidebar-header">
            <img src={Brandonpic} className="round-img" />
          </div>{" "}
          <h4 style={{ color: "white" }}>Brandon Gines</h4>
          <p>Full Stack Web Developer</p>
          <img src={linked} style={social} />
          <img src={twitter} style={social} />
          <img src={git} style={social} />
          <div style={sidebarbody}>
            <ul class="list-unstyled components">
              <li>
                <Link to="/">
                  {" "}
                  <h4>About</h4>
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  {" "}
                  <h4>Projects</h4>
                </Link>
              </li>
              <li>
                <Link to="/resume">
                  <h4>Resume</h4>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <h4>Contact</h4>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
