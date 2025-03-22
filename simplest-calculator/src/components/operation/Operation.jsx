import React from "react";
import "./Operation.css";

const Operation = ({ input, setResult, setInput }) => {
  const add = function () {
    setResult((r) => r + input);
    setInput("");
  };

  const subtract = function () {
    setResult((r) => r - input);
    setInput("");
  };

  const multiply = function () {
    setResult((r) => r * input);
    setInput("");
  };

  const divide = function () {
    if (input === 0) {
      alert("Can't divide by 0");
      setInput("");
      return;
    }
    setResult((r) => r / input);
    setInput("");
  };

  const clearInput = function () {
    setInput("");
  };

  const clearRest = function () {
    setResult(0);
  };

  return (
    <>
      <div>
        <button onClick={add} className="btn">
          Add
        </button>
        <button onClick={subtract} className="btn">
          Subtract
        </button>
        <button onClick={multiply} className="btn">
          Multiply
        </button>
        <button onClick={divide} className="btn">
          Divide
        </button>
      </div>
      <div>
        <button onClick={clearInput} className="btn">
          Reset Input
        </button>
        <button onClick={clearRest} className="rBtn">
          Reset Result
        </button>
      </div>
    </>
  );
};

export default Operation;
