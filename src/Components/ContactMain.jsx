import React from "react";
import { Col, Row } from "react-bootstrap";

export default function ContactMain() {
  return (
    <Col className="contactMain">
      <h3>Interested? Contact me:</h3>
      <Row className="d-flex justify-content-between mt-2">
        <Col
          
          className="d-flex justify-content-center align-items-center"
        >
          <a href="https://www.instagram.com/rahimov19/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
              alt="insta"
              className="contactLogo"
            />
          </a>
        </Col>
        <Col
          
          className="d-flex justify-content-center align-items-center"
        >
          <a href="https://www.linkedin.com/in/rahimov19/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
              alt="linked"
              className="contactLogo"
            />
          </a>
        </Col>
        <Col
          
          className="d-flex justify-content-center align-items-center"
        >
          <a href="https://github.com/rahimov19">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="git"
              className="contactLogo"
            />
          </a>
        </Col>
        <Col >
          <a href="mailto:rahimov19.ar@gmail.com">
            <img src="https://www.svgrepo.com/show/14478/email.svg" alt="mail"  className="contactLogo"/>
          </a>
        </Col>
        <Col >
          <a href="tel:+4917687899431">
           <img src="https://www.svgrepo.com/download/111201/phone-call.svg" alt="phone"  className="contactLogo"/>
          </a>
        </Col>
      </Row>
    </Col>
  );
}
