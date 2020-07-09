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
    setTitle("My Skills");
    setCount(1);
  });

  if (count === 1) {
    console.log("ok");
  }

  console.log(title);
  return (
    <Container fluid className="position-absolute pr-5 pl-5 mt-5">
      <Row className="text-center bg-light rounded">
        <Col>
          <h1>Julien - {title}</h1>
        </Col>
      </Row>
      <List />
      <Row className="text-center mt-5">
        <Col>
          <Tools onClick={handleClickMe} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
