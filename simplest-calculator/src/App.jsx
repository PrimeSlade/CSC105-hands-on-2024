import { useState } from "react";
import "./App.css";
import DisplayHeader from "./components/displayHeader/DisplayHeader";
import InputBox from "./components/inputBox/InputBox";
import Operation from "./components/operation/Operation";

function App() {
  const [input, setInput] = useState();
  const [result, setResult] = useState(0);

  return (
    <>
      <div className="mainContainer">
        <DisplayHeader result={result} />
        <InputBox setInput={setInput} input={input} />
        <Operation input={input} setResult={setResult} setInput={setInput} />
      </div>
    </>
  );
}

export default App;
