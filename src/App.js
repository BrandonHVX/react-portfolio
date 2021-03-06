import React from "react";

import "./App.css";

import Nav from "./components/Nav";
import TopNav from "./components/TopNav";
import AboutMe from "./components/AboutMe";
import WebDev from "./components/WebDev";
import ScrollToTop from "./components/ScrollToTop";
import ProjectsTabs from "./components/ProjectsTabs";
import Posted from "./components/projects/Posted";
import Synergy from "./components/projects/Synergy";
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
    path: "/portfolio",
    exact: true,
    main: () => <ProjectsTabs />
  },
  {
    path: "/resume",
    exact: true,

    main: () => <h2>Resume</h2>
  },
  {
    path: "/blog",
    exact: true,

    main: () => <h2>Blog</h2>
  },
  {
    path: "/posted",
    exact: true,

    main: () => <Posted />
  },
  {
    path: "/synergy",
    exact: true,

    main: () => <Synergy />
  },
  {
    path: "/nyx",
    exact: true,

    main: () => <h2>Nyx</h2>
  }
];

const IndexPage = () => (
  <Router>
    {" "}
    <TopNav />
    <ScrollToTop>
      <Row>
        <Col xs={2} md={3} style={{ marginRight: "60px" }}>
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
      </Row>{" "}
    </ScrollToTop>
  </Router>
);

export default IndexPage;
