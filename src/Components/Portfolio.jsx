import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Portfolio() {
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center porfolioContainer"
    >
      <h1 className="my-4">My Projects</h1>
      <Row className="d-flex align-items-between">
        <Col xs={12} md={6} xl={4} className="cardBoxPortfolio">
          <Card className="cardPortfolio">
            <a
              href="https://spotify-react-app-umber.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                variant="top"
                src="/projects/spotify.jpg"
                className="portfolioImage"
              />
            </a>
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
              <div className="d-flex cardButtons">
                <a
                  href="https://github.com/rahimov19/Spotify-react-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="primary">
                    View on GitHub
                  </Button>
                </a>
                <a
                  href="https://spotify-react-app-umber.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="info">
                    See deployment*
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={4} className="cardBoxPortfolio">
          <Card className="cardPortfolio">
            <a
              href="https://epicode-u9-d5-hw.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                variant="top"
                src="/projects/weather.jpg"
                className="portfolioImage"
              />{" "}
            </a>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>Weather App</Card.Title>
                <Card.Text>
                  Application to retrieve and show weather data with React,
                  Redux. Fetching data from weatherAPI to show actual weather of
                  location. Functional search to find locations.
                </Card.Text>
              </div>
              <div className="d-flex cardButtons">
                <a
                  href="https://github.com/rahimov19/Epicode-u9-d5-hw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="primary">
                    View on GitHub
                  </Button>
                </a>
                <a
                  href="https://epicode-u9-d5-hw.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="info">
                    See deployment*
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={4} className="cardBoxPortfolio">
          <Card className="cardPortfolio">
            <a
              href="https://epicode-u9-d3-hw.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                variant="top"
                src="/projects/netflix.jpg"
                className="portfolioImage"
              />{" "}
            </a>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>Netflix Clone (Backend)</Card.Title>
                <Card.Text>
                  Netflix Clone Application's backend. Made with Express.js.
                  Allows to fetch missing data automatically from OMDB API and
                  exporting data in PDF format. Contains Documentations.
                </Card.Text>
              </div>
              <div className="d-flex cardButtons">
                <a
                  href="https://github.com/rahimov19/epicode-be-w2-d5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="primary">
                    View on GitHub
                  </Button>
                </a>
                <a
                  href="https://epicode-u9-d3-hw.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="info">
                    See deployment*
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={4} className="cardBoxPortfolio">
          <Card className="cardPortfolio">
            <a
              href="https://epicode-u9-d3-hw.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                variant="top"
                src="/projects/netflix.jpg"
                className="portfolioImage"
              />{" "}
            </a>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>Netflix Clone (Frontend)</Card.Title>
                <Card.Text>
                  Netflix Clone Application. Made with React, Redux and
                  Bootstrap. Connected to Backend.
                </Card.Text>
              </div>
              <div className="d-flex cardButtons">
                <a
                  href="https://github.com/rahimov19/epicode-be-w2-d5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="primary">
                    View on GitHub
                  </Button>
                </a>
                <a
                  href="https://epicode-u9-d3-hw.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="info">
                    See deployment*
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={4} className="cardBoxPortfolio">
          <Card className="cardPortfolio">
            <a
              href="https://epicode-be-1-build-week-fe-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                variant="top"
                src="/projects/LinkedIn.jpg"
                className="portfolioImage"
              />{" "}
            </a>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>LinkedIn Clone (Backend)</Card.Title>
                <Card.Text>
                  LinkedIn Clone Application's backend. Build with ExpressJS.
                  Used MongoDB as database to store all information. Allows
                  exporting data as PDF and CSV files.
                </Card.Text>
              </div>
              <div className="d-flex cardButtons">
                <a
                  href="https://github.com/rahimov19/EPICODE_BE_1_BUILD_WEEK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="primary">
                    View on GitHub
                  </Button>
                </a>
                <a
                  href="https://epicode-be-1-build-week-fe-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="info">
                    See deployment*
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={4} className="cardBoxPortfolio">
          <Card className="cardPortfolio">
            <a
              href="https://epicode-be-1-build-week-fe-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                variant="top"
                src="/projects/LinkedIn.jpg"
                className="portfolioImage"
              />{" "}
            </a>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>LinkedIn Clone (Frontend)</Card.Title>
                <Card.Text>
                  LinkedIn Clone Application. Build with React, Redux and
                  Bootstrap. All data is saved in Local Storage using
                  Redux-persist and encrypted via Transform-Encrypt.
                  <b>Login: any Pass:any</b>
                </Card.Text>
              </div>
              <div className="d-flex cardButtons">
                <a
                  href="https://github.com/rahimov19/EPICODE_BE_1_BUILD_WEEK-FE-APP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="primary">
                    View on GitHub
                  </Button>
                </a>
                <a
                  href="https://epicode-be-1-build-week-fe-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="info">
                    See deployment*
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={4} className="cardBoxPortfolio">
          <Card className="cardPortfolio">
            <a
              href="https://epicode-build-week-whatsapp-fe.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                variant="top"
                src="/projects/whatsapp.jpg"
                className="portfolioImage"
              />{" "}
            </a>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>Whatsapp Clone (Frontend)</Card.Title>
                <Card.Text>
                  Whatsapp Clone Application. Build with React, Redux, Bootstrap
                  and socket.io client. All data is saved in Local Storage using
                  Redux-persist and encrypted via Transform-Encrypt. Socket.io
                  is listening real-time to backend.
                </Card.Text>
              </div>
              <div className="d-flex cardButtons">
                <a
                  href="https://github.com/rahimov19/-EPICODE_BUILD_WEEK_WHATSAPP_FE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="primary">
                    View on GitHub
                  </Button>
                </a>
                <a
                  href="https://epicode-build-week-whatsapp-fe.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="info">
                    See deployment*
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={4} className="cardBoxPortfolio">
          <Card className="cardPortfolio">
            <a
              href="https://epicode-build-week-whatsapp-fe.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                variant="top"
                src="/projects/whatsapp.jpg"
                className="portfolioImage"
              />{" "}
            </a>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>Whatsapp Clone (Backend)</Card.Title>
                <Card.Text>
                  Whatsapp Clone Application (Backend). Build with express.js,
                  socket.io and mongoose.Is connected to MongoDB database.
                  Socket.io for sending and recieving real-time packages with
                  frontend.
                </Card.Text>
              </div>
              <div className="d-flex cardButtons">
                <a
                  href="https://github.com/rahimov19/EPICODE_BUILD_WEEK_WHATSAPP_BE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="primary">
                    View on GitHub
                  </Button>
                </a>
                <a
                  href="https://epicode-build-week-whatsapp-fe.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="info">
                    See deployment*
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={4} className="cardBoxPortfolio">
          <Card className="cardPortfolio">
            <a
              href="https://epicode-capstone-fe-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                variant="top"
                src="/projects/mopadmin.jpg"
                className="portfolioImage"
              />{" "}
            </a>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>
                  Restaurant Management System (Admin Panel)
                </Card.Title>
                <Card.Text>
                  Restaurant Management System Frontend (Admin Panel) is a
                  project, build with React, Redux (Persist), Bootstrap, SCSS
                  and different libraries and packages.{" "}
                  <b>Login: akb Pass: akb</b>
                </Card.Text>
              </div>
              <div className="d-flex cardButtons">
                <a
                  href="https://github.com/rahimov19/EPICODE_CAPSTONE_FE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="primary">
                    View on GitHub
                  </Button>
                </a>
                <a
                  href="https://epicode-capstone-fe-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="info">
                    See deployment*
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={4} className="cardBoxPortfolio">
          <Card className="cardPortfolio">
            <a
              href="https://epicode-capstone-fe-terminal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                variant="top"
                src="/projects/mopterminal.jpg"
                className="portfolioImage"
              />{" "}
            </a>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>
                  Restaurant Management System (Terminal Panel)
                </Card.Title>
                <Card.Text>
                  Restaurant Management System Frontend (Terminal Panel) is a
                  project, build with React, Redux (Persist), Bootstrap, SCSS
                  and different libraries and packages.
                  <b>Login: akb Pass: akb Terminal Code: 2211</b>
                </Card.Text>
              </div>
              <div className="d-flex cardButtons">
                <a
                  href="https://github.com/rahimov19/EPICODE_CAPSTONE_FE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="primary">
                    View on GitHub
                  </Button>
                </a>
                <a
                  href="https://epicode-capstone-fe-terminal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="info">
                    See deployment*
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={4} className="cardBoxPortfolio">
          <Card className="cardPortfolio">
            <a
              href="https://https-github-com-rahimov19-art-rahimov19.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                variant="top"
                src="/projects/art.jpg"
                className="portfolioImage"
              />{" "}
            </a>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>ART web-site</Card.Title>
                <Card.Text>
                  Web page made in React with auth and possibility to create
                  requests.
                  <b>Login: akb Pass: 123</b>
                </Card.Text>
              </div>
              <div className="d-flex cardButtons">
                <a
                  href="https://github.com/rahimov19/https---github.com-rahimov19-art"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="primary">
                    View on GitHub
                  </Button>
                </a>
                <a
                  href="https://https-github-com-rahimov19-art-rahimov19.vercel.app//"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="info">
                    See deployment*
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={4} className="cardBoxPortfolio">
          <Card className="cardPortfolio">
            <a
              href="https://languageschoolapp-rahimov19.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                variant="top"
                src="/projects/meltingpot.jpg"
                className="portfolioImage"
              />{" "}
            </a>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>Melting Pot Language School Website</Card.Title>
                <Card.Text>
                  Multilangual website made in React, Redux and using Material
                  UI and SASS.
                </Card.Text>
              </div>
              <div className="d-flex cardButtons">
                <a
                  href="https://github.com/rahimov19/languageschoolapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="primary">
                    View on GitHub
                  </Button>
                </a>
                <a
                  href="https://languageschoolapp-rahimov19.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cardButton" variant="info">
                    See deployment*
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p>
        *Due to limited backend deployment resources, some of projects might not
        be fully functional.
      </p>
    </Container>
  );
}
