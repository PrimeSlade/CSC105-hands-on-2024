import React from "react";
import "./inputBox.css";

const InputBox = ({ setInput, input }) => {
  return (
    <input
      className="inputBox"
      type="text"
      placeholder="Enter a number"
      value={input}
      onChange={(e) => {
        if (isFinite(e.target.value)) {
          setInput(+e.target.value);
        }
      }}
    />
  );
};

export default InputBox;
