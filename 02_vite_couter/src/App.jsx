import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 15;

  const addValue = () => {
    if (counter < 20) {
      // counter = counter + 1;

      // // diffind bunch of badges are same increament by 1 
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      
      //callback 
      setCounter((previousCounter)=>previousCounter+1);
      setCounter((previousCounter)=>previousCounter+1);
      setCounter((previousCounter)=>previousCounter+1);
      setCounter((previousCounter)=>previousCounter+1);


    } else {
      alert("max value is 20");
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      // counter = counter - 1;
      setCounter(counter-1); 
    } else {
      alert("min value is 0");
    }
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button> &nbsp;
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
