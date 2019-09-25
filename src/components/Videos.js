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
import ReactImageVideoLightbox from "react-image-video-lightbox";
const video = {
  zIndex: 9999
};

const styles = {
  width: "100%",
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
      <div>
        {this.state.lightboxOpen && (
          <ReactImageVideoLightbox
            data={[
              {
                url: "https://www.youtube.com/embed/f3nICBZHF2Y",
                type: "video",
                altTag: "placeholder video"
              }
            ]}
            startIndex={0}
            showResourceCount={true}
            onCloseCallback={() => {
              this.setState({ lightboxOpen: false });
            }}
          />
        )}

        <div>
          <a
            href="#"
            id="bottle"
            onClick={() => {
              this.setState({ lightboxOpen: true });
            }}
          >
            <img
              src="http://i3.ytimg.com/vi/f3nICBZHF2Y/maxresdefault.jpg"
              style={styles}
            />
          </a>
        </div>
      </div>
    );
  }
}
