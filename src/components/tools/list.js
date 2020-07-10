/* julien/cv
 *
 * /src/components/tools/list.js
 *
 * coded by julien1988
 * started at 06/07/2020
 */

import React from "react";
const FontAwesome = require("react-fontawesome");
import faStyles from "font-awesome/css/font-awesome.css";

import { ListGroup } from "react-bootstrap";

const List = () => {
  const skillsArrayIcones = ["react", "node", "js", "html5", "css3", "php"];

  return (
    <ListGroup as="ul" className="pt-3">
      {skillsArrayIcones.map((item) => (
        <ListGroup.Item
          as="li"
          className="bg-transparent text-center  border-0"
        >
          <FontAwesome
            className="super-crazy-colors"
            name={item}
            size="2x"
            style={{ color: "rgba(255, 255, 255, 1)" }}
          />
        </ListGroup.Item>
      ))}
      <ListGroup.Item
        as="li"
        className="bg-transparent text-center  border-"
        style={{ color: "rgba(255, 255, 255, 1)" }}
      >
        And more...
      </ListGroup.Item>
    </ListGroup>
  );
};

export default List;
