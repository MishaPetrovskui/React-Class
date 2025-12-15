import "./styles.css";

function Hello() {
  alert("Hello USER");
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={Hello}>Click</button>
    </div>
  );
}
