/* julien/cv
 *
 * /src/components/tools/tools.js
 *
 * coded by julien1988
 * started at 06/07/2020
 */

import React from "react";
import MyButton from "./button";

const Tools = (showSkills) => {
  return (
    <MyButton
      label={"Show My Skills"}
      title={"Click Me"}
      OnClick={showSkills}
    />
  );
};

export default Tools;
