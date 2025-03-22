import React from "react";
import "./DisplayHeader.css";

const DisplayHeader = ({ result }) => {
  return (
    <>
      <h1>Simple Calculator</h1>
      <div className="result">
        <h3 className="resultText">Result: {result}</h3>
      </div>
    </>
  );
};

export default DisplayHeader;
