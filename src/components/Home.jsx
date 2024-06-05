import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "./StoreItem";

const Home = () => {
  return (
    <>
      <h1 className="text-center">
        There are offers and discounts of up to 75%
      </h1>
      <h2 className="text-center border-bottom">for a limited time</h2>
      <Row className="mb-4">
        <Col>
          {" "}
          <h3 className="fw-bolder p-2">Category</h3>
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-20 "
          />
        </Col>
        <Col>
          <Button variant="outline-info">Submit</Button>
        </Col>
      </Row>
      <Row md={3} xs={2} lg={4} className="g-3">
        {storeItems.map(
          (
            item //loop for card
          ) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col> //js object spread operatorso
          )
        )}
      </Row>
      <br /> <br />
      <Row className="mb-4">
        <Col>
          <h4>top search Related items similar suggestions</h4>
        </Col>
        <Col xs="auto">
          <Button variant="outline-info">View All</Button>
        </Col>
      </Row>
      <Row md={3} xs={2} lg={4} className="g-3">
        {storeItems.map(
          (
            item //loop for card
          ) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col> //js object spread operatorso
          )
        )}
      </Row>
      <br />
      <br />
      <Row className="mb-4">
        <Col>
          <h4>top search Related items similar suggestions</h4>
        </Col>
        <Col xs="auto">
          <Button variant="outline-info">View All</Button>
        </Col>
      </Row>
      <Row md={3} xs={2} lg={4} className="g-3">
        {storeItems.map(
          (
            item //loop for card
          ) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col> //js object spread operatorso
          )
        )}
      </Row>
      <br /> <br />
      <Row className="mb-4">
        <Col>
          <h4>top search Related items similar suggestions</h4>
        </Col>
        <Col xs="auto">
          <Button variant="outline-info">View All</Button>
        </Col>
      </Row>
      <Row md={3} xs={2} lg={4} className="g-3">
        {storeItems.map(
          (
            item //loop for card
          ) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col> //js object spread operatorso
          )
        )}
      </Row>
      <br />
      <br />
      <Row className="mb-4">
        <Col>
          <h4>top search Related items similar suggestions</h4>
        </Col>
        <Col xs="auto">
          <Button variant="outline-info">View All</Button>
        </Col>
      </Row>
      <Row md={3} xs={2} lg={4} className="g-3">
        {storeItems.map(
          (
            item //loop for card
          ) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col> //js object spread operatorso
          )
        )}
      </Row>
    </>
  );
};

export default Home;
