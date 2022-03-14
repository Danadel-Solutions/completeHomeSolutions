import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import picture from "../assets/Lagos-City.svg";
import { products } from "../assets/products";

const FeaturedProjects = () => {
  return (
    <Container className="featured-projects">
      <h5 className="topic">Featured Projects</h5>
      <Row xs={1} md={2} className="g-6">
        {products.map((product) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={picture} />
              <Card.Body>
                <Card.Title style={{ fontWeight: 700 }}>
                  The Maximila
                </Card.Title>
                <Card.Text>
                  <p>
                    <i class="fa-solid fa-location-dot"></i>Lekki Phase 1, Lagos
                  </p>
                  <p className="price">10,000</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProjects;
