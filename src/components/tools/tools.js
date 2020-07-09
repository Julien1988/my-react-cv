/* julien/cv
 *
 * /src/components/tools/tools.js
 *
 * coded by julien1988
 * started at 06/07/2020
 */

import React from "react";

import { Button } from "react-bootstrap";

const Tools = ({ onClick, label }) => (
  <Button variant="light" onClick={onClick} title="click Me !">
    {label}
  </Button>
);

export default Tools;
