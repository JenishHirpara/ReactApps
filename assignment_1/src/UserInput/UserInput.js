import React from "react";

const userInput = (props) => {
  const style = {
    border: "1px solid blue",
    textAlign: "center",
    padding: "2px auto",
    width: "30%",
    margin: "10px auto",
  };
  return (
    <input
      type="text"
      onChange={props.change}
      value={props.name}
      style={style}
    />
  );
};

export default userInput;
