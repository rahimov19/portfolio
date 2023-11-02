import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Skills() {
  return (
    <Container fluid className="skillRow">
      <h3 className="skillH3">Skills:</h3>

      <Row className="skillRow2">
        <Col
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className={"skillCol flip-card"}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="skillImg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                alt="js"
              />
              <h4 className="mt-3">JavaScript</h4>
            </div>
            <div className="flip-card-back">
              <p>
                JavaScript is a high-level, dynamically-typed, interpreted
                programming language primarily used to create interactive and
                dynamic web content. It is also used to create server-side
                applications and mobile apps through its various frameworks such
                as React and Node.js.
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className={"skillCol flip-card"}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="skillImg"
                src="https://rapidapi.com/blog/wp-content/uploads/2018/06/logo-2582748_640.png"
                alt="html"
              />
              <h4 className="mt-3">HTML5</h4>
            </div>
            <div className="flip-card-back">
              <p>
                HTML - HyperText Markup Language is the standard markup language
                used to create web pages. It provides the structure and content
                of web pages, allowing text, images, videos, and other forms of
                media to be displayed in a web browser.
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className={"skillCol flip-card"}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="skillImg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                alt="CSS3"
              />
              <h4 className="mt-3">CSS3</h4>
            </div>
            <div className="flip-card-back">
              <p>
                CSS (Cascading Style Sheets) is a stylesheet language used to
                describe the look and formatting of a document written in HTML.
                It allows for separation of content (HTML) and presentation
                (CSS), making it easier to maintain and update the visual design
                of web pages.
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className={"skillCol flip-card"}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="skillImg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                alt="react"
              />
              <h4 className="mt-3">ReactJS</h4>
            </div>
            <div className="flip-card-back">
              <p>
                React is a JavaScript library for building user interfaces. It
                uses a virtual DOM (Document Object Model) to efficiently update
                and render components, allowing for fast and dynamic web pages.
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className={"skillCol flip-card"}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="skillImg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
                alt="bs"
              />
              <h4 className="mt-3">Bootstrap</h4>
            </div>
            <div className="flip-card-back">
              <p>
                Bootstrap is a free, open-source CSS framework for creating
                responsive and mobile-first websites. It includes pre-designed
                UI components such as forms, buttons, navigation, and typography
                that can be easily customized and used to rapidly develop
                websites.
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className={"skillCol flip-card"}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="skillImg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
                alt="node"
              />
              <h4 className="mt-3">NodeJS</h4>
            </div>
            <div className="flip-card-back">
              <p>
                Node.js is a JavaScript runtime environment built on Chrome's V8
                JavaScript engine. It allows developers to run JavaScript on the
                server-side for building fast, scalable, and real-time
                applications, making it a popular choice for building back-end
                services and tools.
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className={"skillCol flip-card"}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="skillImg"
                src="https://skillshack.blob.core.windows.net/uploads/express.webp"
                alt="express"
              />
              <h4 className="mt-3">ExpressJS</h4>
            </div>
            <div className="flip-card-back">
              <p>
                Express.js is a popular, minimal and flexible Node.js web
                application framework for building server-side applications. It
                provides a simple and robust set of features for building
                single-page, multi-page, and hybrid web applications and APIs,
                making it a widely-used choice for back-end development.
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className={"skillCol flip-card"}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="skillImg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
                alt="mongo"
              />
              <h4 className="mt-3">MongoDB</h4>
            </div>
            <div className="flip-card-back">
              <p>
                MongoDB is a cross-platform document-oriented NoSQL database
                that uses JSON-like documents with optional schemas. It provides
                high performance, scalability, and flexibility, making it a
                popular choice for modern applications dealing with large
                amounts of unstructured or semi-structured data.
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className={"skillCol flip-card"}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="skillImg"
                src="https://ezerus.com.au/wp-content/uploads/2019/05/postgresql-logo.png"
                alt="postgre"
              />
              <h4 className="mt-3">PostgreSQL</h4>
            </div>
            <div className="flip-card-back">
              <p>
                PostgreSQL is a powerful, object-relational database management
                system that uses SQL for data manipulation and management. It is
                known for its reliability, feature-richness, and extensibility,
                making it a suitable choice for complex data-driven
                applications.
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className={"skillCol flip-card"}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="skillImg"
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                alt="git"
              />
              <h4 className="mt-3">Git</h4>
            </div>
            <div className="flip-card-back">
              <p>
                Git is a distributed version control system for tracking changes
                in source code during software development. It allows multiple
                developers to collaborate and keep track of modifications to the
                codebase, making it easier to manage and maintain large and
                complex software projects.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
