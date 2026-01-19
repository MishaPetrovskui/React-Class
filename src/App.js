import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [meowFact, setMeowFact] = useState();
  const [number, setNumber] = useState(0);
  const [doubleNumber, setDoubleNumber] = useState(0);
  const [facts, setFact] = useState([]);

  const addFact = (text) => {
    const newFact = {
      id: Date.now(),
      text: text,
    };
    setFact([...facts, newFact]);
  };

  useEffect(() => {
    setDoubleNumber(number * 2)
  }, [number])

  function getNewFact()
  {
    fetch("https://meowfacts.herokuapp.com/?count=1").then((response) => response.json())
    .then((fact) => {console.log(fact); setMeowFact(fact['data'])})
    .catch((e) => console.error(e));
  }

  useEffect (() => {
    getNewFact();
  }, [])
  return (
    <>
      <h2>Hello world!</h2>
      <p>{meowFact}</p>
      <button onClick={getNewFact()}>Change</button>
      <input type='number' value={number} onChange={(e) => {setNumber(e.target.value)}} />
      <p>{doubleNumber}</p>
      {/* <ul className="list">
        {facts.map((task) => (
          <li key={task.id} className="item">
            <span>{task.text}</span>
          </li>
        ))}
      </ul> */}
{/* 
      {facts.length === 0 && (
        <p className="empty-message">Немає фактів. Додайте нові факти!</p>
      )} */}
    </>
  );
}

export default App;
