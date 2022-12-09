import React from "react";

import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div className="output">
      <p>Hi I am {props.name}</p>
      <p>I love working on React projects</p>
    </div>
  );
};

export default userOutput;
