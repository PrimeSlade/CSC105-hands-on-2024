import React, { useState, useEffect } from "react";
import "./DisplayList.css";

const DisplayList = ({ items, setItems }) => {
  const [list, setList] = useState();
  const [activeId, setActiveId] = useState(null);

  const remove = (index) => {
    const item = items.filter((_, i) => index !== i);
    setItems(item);
  };

  const onActiveId = (index) => {
    setActiveId((id) => (id === index ? null : index));
    const currItem = items[index];
    setList(currItem.item);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && activeId !== null) {
      const tempItems = [...items];
      tempItems[activeId].item = list;
      setItems(tempItems);
      setActiveId(null);
    }
  };

  const click = (index) => {
    const tempItems = [...items];
    tempItems[index].bought = !tempItems[index].bought;
    setItems(tempItems);
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress); // Clean up on unmount
    };
  }, [items, activeId, list]);

  return (
    <>
      {items.map((i, index) => {
        return (
          <div
            key={index}
            id={index}
            className={`mainItemC ${i.bought ? "color" : ""}`}
          >
            <div className="item">
              {activeId === index ? (
                <input
                  value={list}
                  onChange={(e) => {
                    setList(e.target.value);
                  }}
                  autoFocus
                  className="inputItem"
                ></input>
              ) : (
                <div onClick={() => click(index)}>
                  <div className={i.bought ? "through" : ""}>{i.item}</div>
                </div>
              )}
            </div>
            <div>
              <button onClick={() => onActiveId(index)} className="btnEdit">
                Edit
              </button>
              <button onClick={() => remove(index)} className="btnRemove">
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayList;
