import "./styles.css";
import { useState } from "react";

function Hello() {
  alert("Hello USER");
}

export default function App() {
  // const [header, setHeader] = useState("My first React APP");
  // const [inputText, setInputText] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [output, setOutput] = useState("");

  // function changeHeader() {
  //   setHeader(inputText);
  // }
  function plusMath() {
    setOutput(Number(input1) + Number(input2));
  }

  function minusMath() {
    setOutput(Number(input1) - Number(input2));
  }

  function multiplyMath() {
    setOutput(Number(input1) * Number(input2));
  }

  function divideMath() {
    setOutput(Number(input1) / Number(input2));
  }

  return (
    <>
      {/* <div className="App">
        <h1>{header}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={changeHeader}>Click</button>
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <button onClick={changeHeader}>changeHeader</button>
      </div> */}
      <div className="App">
        <h1>{output}</h1>
        <input
          type="text"
          value={input1}
          onChange={(event) => setInput1(event.target.value)}
        />
        <button onClick={plusMath}>+</button>
        <button onClick={minusMath}>-</button>
        <button onClick={multiplyMath}>*</button>
        <button onClick={divideMath}>/</button>
        <input
          type="text"
          value={input2}
          onChange={(event) => setInput2(event.target.value)}
        />
      </div>
    </>
  );
}
