import React, { Component } from "react";
import bta from "../images/bta.svg";
import salon from "../images/salon.svg";
import {
  Card,
  Row,
  Nav,
  Tab,
  Col,
  Badge,
  Container,
  Jumbotron,
  Button
} from "react-bootstrap";
const video = {
  zIndex: 9999
};

export default class Videos extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      lightboxOpen: false
    };
  }

  render() {
    return (
      <section class="projects-list px-3 py-8 p-md-8">
        <div>
          <div class="project-cards row isotope">
            <div class="isotope-item col-md-6 mb-8 webapp frontend">
              <div class="card project-card">
                <div class="row no-gutters ">
                  <Badge
                    pill
                    variant="primary"
                    style={{
                      position: "absolute",
                      margin: "10px",
                      fontSize: "12px"
                    }}
                  >
                    Video
                  </Badge>
                  <img src={bta} class="card-img" alt="image" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="project.html" class="theme-link">
                      Bands By Taylor Alexandria
                    </a>
                  </h5>

                  <p class="card-text">
                    <small class="text-muted">Client: Google</small>
                  </p>
                </div>
                <div class="link-mask">
                  <a class="link-mask-link" href="project.html"></a>
                  <div class="link-mask-text">
                    <button
                      class="btn btn-secondary"
                      onClick={() => {
                        this.setState({ lightboxOpen: true });
                      }}
                    >
                      <i class="fas fa-eye mr-2"></i>Play Video
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="isotope-item col-md-6 mb-8 webapp frontend">
              <div class="card project-card">
                <div class="row no-gutters ">
                  <img src={salon} class="card-img" alt="image" />
                </div>
                <div class="link-mask">
                  <a class="link-mask-link" href="project.html"></a>
                  <div class="link-mask-text">
                    <i class="fas fa-eye mr-2"></i>View Case Study
                  </div>
                </div>
              </div>
            </div>
            <div class="isotope-item col-md-6 mb-8 mobileapp">
              <div class="card">
                <div class="row no-gutters">
                  <div class="col-lg-4 card-img-holder">
                    <img src={bta} class="card-img" alt="image" />
                  </div>
                  <div class="col-lg-8">
                    <div class="card-body">
                      <h5 class="card-title">
                        <a href="project.html" class="theme-link">
                          Bands By Taylor Alexandria
                        </a>
                      </h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.{" "}
                      </p>
                      <p class="card-text">
                        <small class="text-muted">Client: Google</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="link-mask">
                  <a class="link-mask-link" href="project.html"></a>
                  <div class="link-mask-text">
                    <i class="fas fa-eye mr-2"></i>View Case Study
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
