import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <h1>Find your property</h1>
            </Col>
          </Row>
          <Row>
            <Col className="md-10 md-offset-1">
              <form>
                <Col className="md-offset-1 md-10 sm-12 ">
                  <div className="form-group">
                    <form>
                      <div className="radios">
                        <input type="radio" name="type" id="sale" />
                        <label htmlFor="sale">For Sale</label>
                        <input type="radio" name="type" id="rent" />
                        <label htmlFor="rent">For Rent</label>
                        <input type="radio" name="type" id="shortlet" />
                        <label htmlFor="shortlet">Short Let</label>
                        <input type="radio" name="type" id="land" />
                        <label htmlFor="land">Land</label>
                      </div>
                      <div className="search-info">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter a state, locality or area"
                        />
                        <Col className="selects">
                          <select name="" id="">
                            <option value="">1</option>
                            <option value="">1</option>
                            <option value="">1</option>
                            <option value="">1</option>
                          </select>
                          <select name="" id="">
                            <option value="">1</option>
                            <option value="">1</option>
                            <option value="">1</option>
                            <option value="">1</option>
                          </select>
                          <select name="" id="">
                            <option value="">1</option>
                            <option value="">1</option>
                            <option value="">1</option>
                            <option value="">1</option>
                          </select>
                          <select name="" id="">
                            <option value="">1</option>
                            <option value="">1</option>
                            <option value="">1</option>
                            <option value="">1</option>
                          </select>
                        </Col>
                        <button>Submit</button>
                      </div>
                    </form>
                  </div>
                </Col>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
