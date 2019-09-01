import React from "react";

import "./App.css";

import Nav from "./components/Nav";
import TopNav from "./components/TopNav";
import AboutMe from "./components/AboutMe";
import WebDev from "./components/WebDev";
import ProjectsTabs from "./components/ProjectsTabs";
import Lottie from "react-lottie";
import Brandonpic from "./images/BrandonPic.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Row, Col, Container, Jumbotron, Button } from "react-bootstrap";

import animationData from "./images/greeting.json";

const text = {
  fontSize: "12px",
  marginTop: "20px"
};

const col = {
  marginTop: "20px"
};

const jumbo = {
  backgroundColor: "transparent "
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: ""
  }
};

const routes = [
  {
    path: "/",
    exact: true,

    main: () => <AboutMe />
  },
  {
    path: "/projects",

    main: () => <ProjectsTabs />
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

const IndexPage = () => (
  <Router>
    <Row>
      <Col xs={6} md={4}>
        <Nav />
      </Col>
      <Col xs={12} md={8}>
        <div>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </Col>
    </Row>
  </Router>
);

export default IndexPage;
