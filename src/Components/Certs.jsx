import React from "react";
import {Col, Container, Row } from "react-bootstrap";
import ReactImageGallery from "react-image-gallery";

export default function Certs() {
  const images = [
    { original: "/certs/16.jpg", thumbnail: "/certs/16.jpg" },
    { original: "/certs/1.jpg", thumbnail: "/certs/1.jpg" },
    { original: "/certs/2.jpg", thumbnail: "/certs/2.jpg" },
    { original: "/certs/3.jpg", thumbnail: "/certs/3.jpg" },
    { original: "/certs/5.jpg", thumbnail: "/certs/5.jpg" },
    { original: "/certs/6.jpg", thumbnail: "/certs/6.jpg" },
    { original: "/certs/7.jpg", thumbnail: "/certs/7.jpg" },
    { original: "/certs/8.jpg", thumbnail: "/certs/8.jpg" },
    { original: "/certs/9.jpg", thumbnail: "/certs/9.jpg" },
    { original: "/certs/10.jpg", thumbnail: "/certs/10.jpg" },
    { original: "/certs/11.jpg", thumbnail: "/certs/11.jpg" },
    { original: "/certs/12.jpg", thumbnail: "/certs/12.jpg" },
    { original: "/certs/13.jpg", thumbnail: "/certs/13.jpg" },
    { original: "/certs/14.jpg", thumbnail: "/certs/14.jpg" },
    { original: "/certs/15.jpg", thumbnail: "/certs/15.jpg" },
    { original: "/certs/17.jpg", thumbnail: "/certs/17.jpg" },

  ];
  return (
    <>
    <Container className="certsContainer">
      <h1>Certificates</h1>
      <ReactImageGallery items={images.reverse()} />
    </Container>
    <Container className="smallCerts d-none">
      <h1 className="h1Certs">Certificates</h1>
     <Row> {images.map((imgSrc) => <Col xs={12} md={6} ><img src={imgSrc.original} alt="cert" className="certImg" /></Col>)}
     </Row></Container>
    </>
  );
}
