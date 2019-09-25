import React from "react";
import ae from "../../images/ae.svg";
import ps from "../../images/ps.svg";
import ai from "../../images/ai.svg";
import xd from "../../images/xd.svg";
import pr from "../../images/Pr.svg";
import rails from "../../images/rails.svg";
import sass from "../../images/sass.svg";
import node from "../../images/node.svg";
import slack from "../../images/slack.svg";
import git from "../../images/git.svg";
import npm from "../../images/npm.png";
import vue from "../../images/vuejs.svg";
import js from "../../images/js.svg";
import ruby from "../../images/ruby.png";
import html5 from "../../images/html5.svg";
import bootstrap from "../../images/bootstrap.svg";
import apple2x from "../../images/post-it.png";
import reactsvg from "../../images/react.svg";
import TopNav from "../TopNav";
import { Card, Row, Col, Container, Jumbotron, Button } from "react-bootstrap";

const text = {
  fontSize: "12px",
  marginTop: "20px",
  marginRight: "10px"
};

const col = {
  marginTop: "20px"
};

export default function Synergy() {
  return (
    <div>
      <TopNav />
      <Container>
        <Jumbotron>
          <h1>Synergy</h1>
          <p>
            With Rover by OpenStax, you can solve problems in the way that makes
            the most sense to you – Rover’s cutting-edge StepWise™ technology
            can evaluate if the steps you use to solve a problem are logical, no
            matter which route you take. You get a textbook and a homework
            system for $22 per semester, and you never have to pay again to
            retake the course.
          </p>
        </Jumbotron>

        <div>
          <img src={apple2x} style={{ width: "100%" }} />
          <h5>User Story</h5>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information. calling
          extra attention to featured content or information.
        </div>
        <br />
        <h5>Technology Stack</h5>
        <Row style={text}>
          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={js} width={40} />
              </span>
              <span>
                <img src={reactsvg} width={40} />
              </span>
              <span>
                <img src={vue} width={40} />
              </span>
            </p>
            Vanilla Javascript, React.JS and Vue.js
          </Col>
          <br />
          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={node} width={40} />
              </span>
              <span>
                <img src={npm} width={40} />
              </span>
            </p>
            Node.js and npm
          </Col>
          <br />
          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={ruby} width={38} />
              </span>
              <span>
                <img src={rails} width={38} />
              </span>
            </p>
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Col>
          <br />

          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={html5} width={40} />
              </span>
              <span>
                <img src={reactsvg} width={40} />
              </span>
              <span>
                <img src={bootstrap} width={40} />
              </span>
              <span>
                <img src={sass} width={40} />
              </span>
            </p>
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Col>
          <br />
          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={ps} width={40} />
              </span>
              <span>
                <img src={ai} width={40} />
              </span>
              <span>
                <img src={xd} width={40} />
              </span>
            </p>
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Col>

          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={pr} width={40} />
              </span>
              <span>
                <img src={ae} width={40} />
              </span>
            </p>
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Col>
          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={git} width={40} />
              </span>
              <span>
                <img src={slack} width={40} />
              </span>
            </p>
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Col>
        </Row>
        <h5>Product Gallery</h5>
      </Container>
    </div>
  );
}
