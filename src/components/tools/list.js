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
  const skillsArrayIcones = [
    "My Skills",
    "<i class='fab fa-php'></i>",
    "<i class='fab fa-css3-alt'></i>",
    "<i class='fab fa-html5'></i>",
    "<i class='fab fa-js'></i>",
    "<i class='fab fa-sass'></i>",
    "<i class='fab fa-wordpress'></i>",
    "and more...",
    "<button class='main__section__container__list__item__button button-button-02' id='showWhoIAm'>Who I am</button>",
  ];

  return (
    <FontAwesome
      className="super-crazy-colors"
      name="php"
      size="4x"
      style={{ textShadow: "0 1px 0 rgba(255, 255, 255, 1)" }}
    />
  );
};

export default List;
