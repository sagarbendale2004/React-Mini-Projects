import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  function addValue() {
      counter < 25 ? setCounter(counter + 1) : setCounter(25) // max limit is 25
  }

  function removeValue() {
    counter > 0 ? setCounter(counter - 1): setCounter(0); // min limit is 0
  }

  return (
    <>
      <h1>hello to Counter World...!!</h1>
      <h2>counter Value = {counter}</h2>
      <br />
      <button onClick={addValue}> UpCounter </button>
      <button onClick={removeValue}> DownCounter </button>
    </>
  )
}

export default App

