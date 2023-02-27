import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactMain from "./ContactMain";
import Skills from "./Skills";

export default function MainPage() {
  return (
    <>
      <Container>
        <Row className="d-flex align-items-center my-5">
          <Col xs={12} md={6} className="topPartLeft my-2 ">
            <div className="d-flex  flex-column align-items-end pr-5">
              <h5>Hello</h5>
              <h2>I'm Akbar</h2>
              <h4>Full Stack Web Developer</h4>
              <Button className="mt-2">Contact Me</Button>
            </div>
          </Col>
          <Col
            xs={{ col: 12, order: "first" }}
            md={{ col: 6, order: "last" }}
            className="topPartRight "
          >
            <img
              src="/photo_2023-02-04_18-19-46.jpg"
              alt="profileImg"
              className="mePngImg"
            />
          </Col>
        </Row>
        <Row className="my-5">
          <Col xs={12} md={4} className="d-flex justify-content-center">
            <img
              src="/photo_2022-08-10_20-23-19.jpg"
              alt="profileImg"
              className="aboutmeImg"
            />
          </Col>
          <Col xs={12} md={8}>
            <h3>About Me</h3>
            <p>
              As a full-stack web developer, I possess a diverse set of
              technical skills that allow me to efficiently design, build, and
              deploy dynamic and engaging web applications. My expertise in
              HTML, CSS, JavaScript, and various frameworks such as React,
              Node.js, and Express.js, make me well-equipped to handle complex
              projects. In addition, my experience with databases like MongoDB
              and PostgreSQL, as well as my familiarity with version control
              systems like Git, enable me to develop and manage high-quality,
              scalable web solutions.
            </p>
            <Link to={"/portfolio"}>
              <Button className="mr-2">See my Works</Button>
            </Link>
            <a href="/CV.pdf">
              <Button>Get My CV</Button>
            </a>
          </Col>
        </Row>
      </Container>
      <Skills />
      <ContactMain />
    </>
  );
}
