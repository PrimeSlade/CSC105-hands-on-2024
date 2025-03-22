import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import AddList from "./components/AddList/AddList";
import DisplayList from "./components/DisplayList/DisplayList";

function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      <div className="mainContainer">
        <Header />
        <AddList setItems={setItems} />
        <DisplayList items={items} setItems={setItems} />
      </div>
    </>
  );
}

export default App;
