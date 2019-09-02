import React, { Component } from "react";

import Brandonpic from "../images/BrandonPic.jpg";

import linked from "../images/linked.svg";
import twitter from "../images/twitter.svg";
import git from "../images/git.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./nav.css";

const social = {
  width: 40,
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
          </div>
          <div style={sidebarbody}>
            <ul class="list-unstyled components">
              <p>Dummy Heading</p>
              <img src={linked} style={social} />
              <img src={twitter} style={social} />
              <img src={git} style={social} />

              <li>
                <Link to="/"> About</Link>
              </li>
              <li>
                <Link to="/portfolio">Projects</Link>
              </li>

              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
