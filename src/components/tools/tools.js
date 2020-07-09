/* julien/cv
 *
 * /src/components/tools/tools.js
 *
 * coded by julien1988
 * started at 06/07/2020
 */

import React from "react";

import { Button } from "react-bootstrap";

const Tools = ({ onClick }) => (
  <Button variant="light" onClick={onClick} title="click Me !">
    Show My Skills
  </Button>
);

export default Tools;
