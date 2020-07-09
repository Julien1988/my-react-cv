/* julien/cv
 *
 * /src/components/cv.js
 *
 * coded by julien1988
 * started at 06/07/2020
 */

import React from "react";

import { Button, Container, Row, Col } from "react-bootstrap";

const Cv = () => {
  return (
    <Container fluid className="position-absolute">
      <Row>
        <Col>
          <h1>Julien Broens - Online CV</h1>
        </Col>
      </Row>
      <Row>
        <Button>Show My Skills</Button>
      </Row>
    </Container>
  );
};

export default Cv;
