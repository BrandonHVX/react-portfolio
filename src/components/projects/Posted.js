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
import expressjs from "../../images/expressjs.png";
import ruby from "../../images/ruby.png";
import html5 from "../../images/html5.svg";
import mongoodb from "../../images/mongodb.png";
import bootstrap from "../../images/bootstrap.svg";
import apple2x from "../../images/web-mobile.jpg";
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

export default function Posted() {
  return (
    <div>
      <TopNav />
      <Container>
        <Jumbotron>
          <h1>Posted</h1>
          <p>
            Developed full stack web application designed for users to sign up,
            create a profile, like, comment and create a post.
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
                <img src={mongoodb} width={58} />
              </span>
            </p>
            <strong>Mongoo DB</strong>
          </Col>
          <br />
          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={expressjs} width={78} />
              </span>
              <span>
                <img src={node} width={40} />
              </span>
            </p>
            <strong>Express.JS</strong>
          </Col>
          <br />
          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={reactsvg} width={38} />
              </span>
            </p>
            <strong>React.JS</strong>
          </Col>
          <br />
          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={node} width={38} />
              </span>
            </p>
            <strong>Node.JS</strong>
          </Col>
          <br />
          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={html5} width={40} />
              </span>
              <span>
                <img src={sass} width={40} />
              </span>
              <span>
                <img src={bootstrap} width={40} />
              </span>
            </p>
            <strong>HTML, Sass & Bootstrap</strong> You can change the icon
            above to any of the 1500+ FontAwesome 5 free icons available. Aenean
            commodo ligula eget dolor.
          </Col>
          <br />
        </Row>
        <h5>Product Gallery</h5>
      </Container>
    </div>
  );
}
