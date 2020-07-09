/* julien/cv
 *
 * /src/components/app.js
 *
 * coded by julien1988
 * started at 06/07/2020
 */

import React, { useState, useCallback } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Tools from "./tools/tools";
import List from "./tools/list";
const FontAwesome = require("react-fontawesome");
import faStyles from "font-awesome/css/font-awesome.css";

const App = () => {
  const [title, setTitle] = useState("Online CV");
  const [count, setCount] = useState(0);
  const handleClickMe = useCallback(() => {
    if (count === 0) {
      setTitle("My Skills");
      setCount(1);
    } else if (count === 1) {
      setTitle("Online CV");
      setCount(0);
    } else {
      setTitle("My Skills");
      setCount(1);
    }
  });
  const handleNextStep = useCallback(() => {
    setTitle("My Skills");
    setCount(2);
  });

  // Accueil
  if (count === 0) {
    return (
      <Container fluid className="position-absolute pr-5 pl-5 mt-5">
        <Row className="text-center bg-light rounded">
          <Col>
            <h1>Julien - {title}</h1>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <Tools onClick={handleClickMe} label="Show My Skills" />
          </Col>
        </Row>
      </Container>
    );
    // Skills
  } else if (count === 1) {
    return (
      <Container fluid className="position-absolute pr-5 pl-5 mt-5">
        <Row className="text-center bg-light rounded">
          <Col>
            <h1>{title}</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <List />
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col>
            <Tools onClick={handleClickMe} label="Back" />
            <Tools onClick={handleNextStep} label="Next" />
          </Col>
        </Row>
      </Container>
    );
    // Info
  } else if (count === 2) {
    return (
      <Container fluid className="position-absolute pr-5 pl-5 mt-5">
        <Row className="text-center bg-light rounded">
          <Col>
            <h1>{title}</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1>TODO</h1>
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col>
            <Tools onClick={handleClickMe} label="Back" />
          </Col>
        </Row>
      </Container>
    );
  }
};

export default App;
