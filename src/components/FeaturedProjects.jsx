import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import picture from "../assets/Lagos-City.svg";
import { products } from "../assets/products";

const FeaturedProjects = () => {
  return (
    <Container className="featured-projects mt-5">
      <h5 className="topic">Featured Projects</h5>
      <Row xs={1} md={2} className="g-6">
        {products.map((product, i) => (
          <Col key={i}>
            <Card>
              <Card.Img variant="top" src={picture} />
              <Card.Body>
                <Card.Title style={{ fontWeight: 700 }}>
                  The Maximila
                </Card.Title>
                <Card.Text>
                  <i className="fa-solid fa-location-dot"></i>Lekki Phase 1,
                  Lagos
                </Card.Text>
                <p className="price">10,000</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProjects;
