import React, { useState } from "react";
import "./AddList.css";

const AddList = ({ setItems }) => {
  const [input, setInput] = useState("");

  const add = () => {
    if (input !== "") {
      const item = {
        item: input,
        bought: false,
      };
      setItems((i) => [...i, item]);
    }
    setInput("");
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Add a new item"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={add} className="addBtn">
        Add
      </button>
    </div>
  );
};

export default AddList;
