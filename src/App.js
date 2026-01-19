import './App.css';
import { useState, useEffect } from 'react';

function MeowFact()
{
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getNewFact()) {
      addFact(getNewFact());
    }
  };

  useEffect(() => {
    setDoubleNumber(number * 2)
  }, [number])

  function getNewFact()
  {
    fetch("https://meowfacts.herokuapp.com/?count=1").then((response) => response.json())
    .then((fact) => {
      console.log(fact); 
      const newFact = {id: Date.now(), text: fact['data'], }; 
      setFact([...facts, newFact]);})
    .catch((e) => console.error(e));
  }

  useEffect (() => {
    getNewFact();
  }, [])
  return (
    <>
      <h2>Hello world!</h2>
      <p>{meowFact}</p>
      <button onClick={handleSubmit}>Change</button>
      <input type='number' value={number} onChange={(e) => {setNumber(e.target.value)}} />
      <p>{doubleNumber}</p>
      <ul className="list">
        {[...facts].reverse().map((task, index) => (
          <li key={task.id} className={index === 0 ? 'first-item' : 'regular-item'}
      style={{ fontWeight: index === 0 ? 'bold' : 'normal' }}>
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </>
  );
}


function App() {
  const [currencyFrom, setCurrencyFrom] = useState(0);
  const [currencyTo, setCurrencyTo] = useState(0);
  const currencyRate = 0.06;

  function convertTo()
  {
    setCurrencyTo(currencyFrom * currencyRate)
  }
  function convertFrom()
  {
    setCurrencyFrom(currencyTo / currencyRate)
  }

  // useEffect (() => {
  //   convertTo();
  // }, [currencyFrom])
  // useEffect (() => {
  //   convertFrom();
  // }, [currencyTo])
  return (
    <>
      <input type="number" value={currencyFrom} onChange={(e) => {
        setCurrencyFrom(e.target.value); convertTo();
      }} placeholder="FROM" />
      <input type="number" value={currencyTo} onChange={(e) => {
        setCurrencyTo(e.target.value); convertFrom();
      }} placeholder="TO" />
    </>
  );
}

export default App;
