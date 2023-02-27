import React from "react";
import { Container } from "react-bootstrap";
import ReactImageGallery from "react-image-gallery";

export default function Certs() {
  const images = [
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
  ];
  return (
    <Container className="certsContainer">
      <h1>Certificates</h1>
      <ReactImageGallery items={images} />
    </Container>
  );
}
