import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { products } from "../assets/products";
import picture from "../assets/title 1.png";

const FromBlog = () => {
  return (
    <Container>
      <h5 className="topic">From the Blog</h5>
      <Row xs={2} md={3} className="g-20">
        {products.map((product) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={picture} />
              <Card.Body>
                <Card.Text>
                  <p>
                    Write what you think should be here <br />
                    Write what you think should be here <br />
                    Write what you think should be here <br />
                    Write what you think should be here <br />
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button bg="primary">Read more</Button>
    </Container>
  );
};

export default FromBlog;