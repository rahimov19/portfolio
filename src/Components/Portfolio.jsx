import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Portfolio() {
  return (
    <Container className="d-flex flex-column align-items-center porfolioContainer">
      <h1 className="my-4">My Projects</h1>
      <Row className="mx-auto">
        <Col xs={4}>
          <Card style={{ width: "18rem" }} className="cardPortfolio">
            <Card.Img variant="top" src="http://placekitten.com/800/600" />
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>Spotify Clone</Card.Title>
                <Card.Text>
                  Spotify Clone made on React, Redux, and Bootstrap. Added audio
                  player to play/pause music. Application is allowing easily
                  move between pages using React Router with flexible search
                  function.
                </Card.Text>
              </div>
              <a href="https://github.com/rahimov19/Spotify-react-app">
                <Button className="cardButton" variant="primary">
                  View on GitHub
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <Card style={{ width: "18rem" }} className="cardPortfolio">
            <Card.Img variant="top" src="http://placekitten.com/800/600" />
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>Weather App</Card.Title>
                <Card.Text>
                  Application to retrieve and show weather data with React,
                  Redux. Fetching data from weatherAPI to show actual weather of
                  location. Functional search to find locations.
                </Card.Text>
              </div>
              <a href="https://github.com/rahimov19/Epicode-u9-d5-hw">
                <Button className="cardButton" variant="primary">
                  View on GitHub
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <Card style={{ width: "18rem" }} className="cardPortfolio">
            <Card.Img variant="top" src="http://placekitten.com/800/600" />
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>Netflix Clone (Backend)</Card.Title>
                <Card.Text>
                  Netflix Clone Application's backend. Made with Express.js.
                  Allows to fetch missing data automatically from OMDB API and
                  exporting data in PDF format. Contains Documentations.
                </Card.Text>
              </div>
              <a href="https://github.com/rahimov19/epicode-be-w2-d5">
                <Button className="cardButton" variant="primary">
                  View on GitHub
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <Card style={{ width: "18rem" }} className="cardPortfolio">
            <Card.Img variant="top" src="http://placekitten.com/800/600" />
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>Netflix Clone (Frontend)</Card.Title>
                <Card.Text>
                  Netflix Clone Application. Made with React, Redux and
                  Bootstrap. Connected to Backend.
                </Card.Text>
              </div>
              <a href="https://github.com/rahimov19/epicode-u9-d3-hw">
                <Button className="cardButton" variant="primary">
                  View on GitHub
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <Card style={{ width: "18rem" }} className="cardPortfolio">
            <Card.Img variant="top" src="http://placekitten.com/800/600" />
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>LinkedIn Clone (Backend)</Card.Title>
                <Card.Text>
                  LinkedIn Clone Application's backend. Build with ExpressJS.
                  Used MongoDB as database to store all information. Allows
                  exporting data as PDF and CSV files.
                </Card.Text>
              </div>
              <a href="https://github.com/rahimov19/EPICODE_BE_1_BUILD_WEEK">
                <Button className="cardButton" variant="primary">
                  View on GitHub
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <Card style={{ width: "18rem" }} className="cardPortfolio">
            <Card.Img variant="top" src="http://placekitten.com/800/600" />
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>LinkedIn Clone (Frontend)</Card.Title>
                <Card.Text>
                  LinkedIn Clone Application. Build with React, Redux and
                  Bootstrap. All data is saved in Local Storage using
                  Redux-persist and encrypted via Transform-Encrypt.
                </Card.Text>
              </div>
              <a href="https://github.com/rahimov19/EPICODE_BE_1_BUILD_WEEK-FE-APP">
                <Button className="cardButton" variant="primary">
                  View on GitHub
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
