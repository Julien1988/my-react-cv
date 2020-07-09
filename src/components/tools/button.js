/* julien/cv
 *
 * /src/components/tools/button.js
 *
 * coded by julien1988
 * started at 06/07/2020
 */

import React from "react";
import { Button } from "react-bootstrap";
const MyButton = ({ label, title, onClick }) => {
  return (
    <Button variant="light" onClick={onClick} title={title || label}>
      {label}
    </Button>
  );
};

export default MyButton;
