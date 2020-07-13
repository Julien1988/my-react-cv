/* julien/cv
 *
 * /src/components/tools/modal.js
 *
 * coded by julien1988
 * started at 06/07/2020
 */

import React, { useState, useCallback } from "react";
import { Card, ListGroup, Nav, Col, Row } from "react-bootstrap";
const FontAwesome = require("react-fontawesome");
import faStyles from "font-awesome/css/font-awesome.css";

const Modal = () => {
  const [count, setCount] = useState(0);
  const showContact = useCallback(() => {
    setCount(0);
  });
  const showExp = useCallback(() => {
    setCount(1);
  });
  const showBio = useCallback(() => {
    setCount(2);
  });
  if (count === 0) {
    return (
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link onClick={showContact}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={showExp}>Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={showBio}>Bio</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Social Network</Card.Title>
          <Col>
            <Row className="d-flex align-items-baseline">
              <FontAwesome
                className="mr-2"
                name="envelope"
                size="1x"
                style={{ color: "rgba(48, 92, 211, 1)" }}
              />
              <Card.Text>julienbroens@gmail.com</Card.Text>
            </Row>
          </Col>
          <Col>
            <Row className="d-flex align-items-baseline">
              <FontAwesome
                className="mr-2"
                name="linkedin"
                size="1x"
                style={{ color: "rgba(48, 92, 211, 1)" }}
              />
              <Card.Text>
                https://www.linkedin.com/in/julien-broens-24b465184
              </Card.Text>
            </Row>
          </Col>
          <Col>
            <Row className="d-flex align-items-baseline">
              <FontAwesome
                className="mr-2"
                name="globe"
                size="1x"
                style={{ color: "rgba(48, 92, 211, 1)" }}
              />
              <Card.Text>35, Tienne Jean-Pierre 51 BELGIQUE</Card.Text>
            </Row>
          </Col>
          <Col>
            <Row className="d-flex align-items-baseline">
              <FontAwesome
                className="mr-2"
                name="phone-square"
                size="1x"
                style={{ color: "rgba(48, 92, 211, 1)" }}
              />
              <Card.Text>+ 32 474 22 66 65</Card.Text>
            </Row>
          </Col>
        </Card.Body>
      </Card>
    );
  } else if (count === 1) {
    return (
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link onClick={showContact}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={showExp}>Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={showBio}>Bio</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>BeCode - web development</Card.Title>
          <Card.Text>2019 - 2020</Card.Text>
          <Card.Title>O'Clock - web development</Card.Title>
          <Card.Text>2018 - 2019</Card.Text>
          <Card.Title>Agent Educator A1</Card.Title>
          <Card.Text>2011 - 2018</Card.Text>
        </Card.Body>
      </Card>
    );
  } else if (count === 2) {
    return (
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link onClick={showContact}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={showExp}>Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={showBio}>Bio</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Biography</Card.Title>
          <Card.Text>Coming soon</Card.Text>
        </Card.Body>
      </Card>
    );
  }
};

export default Modal;
