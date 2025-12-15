import "./styles.css";
import { useState } from "react";

function Counted({ btn1, btn2, btn3 }) {
  const [clicked, setClick] = useState(0);

  function Click(input) {
    setClick(clicked + input);
  }

  return (
    <>
      <div className="App">
        <h1>{clicked}</h1>
        <button onClick={() => Click(btn1)}>{btn1}</button>
        <button onClick={() => Click(btn2)}>{btn2}</button>
        <button onClick={() => Click(btn3)}>{btn3}</button>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Counted btn1={1} btn2={-1} btn3={10} />
    </>
  );
}
