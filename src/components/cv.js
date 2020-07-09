/* julien/cv
 *
 * /src/components/cv.js
 *
 * coded by julien1988
 * started at 06/07/2020
 */

import React from "react";

import { Button, Container, Row, Col } from "react-bootstrap";
import Tools from "./tools/tools";

const Cv = () => {
  return (
    <Container fluid className="position-absolute pr-5 pl-5 mt-5">
      <Row className="text-center bg-light rounded">
        <Col>
          <h1>Julien Broens - Online CV</h1>
        </Col>
      </Row>
      <Row className="text-center mt-5">
        <Col>
          <Tools />
        </Col>
      </Row>
    </Container>
  );
};

export default Cv;
