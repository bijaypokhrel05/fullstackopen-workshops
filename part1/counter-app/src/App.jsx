import { useEffect, useState } from 'react';
import Button from './Button.jsx';
import './Button.css';


function App() {
  const [count, setCount] = useState(0);
  let cnt = 0;
  function clickHandler() {
    cnt++;
    const planeJs = document.getElementById('plane');
    console.log(planeJs)
    planeJs.innerText = `This is executed by using simple js, counter: ${cnt}`;
    console.log(count);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2 id='plane'>This is execute by using simple js, counter: 0</h2>
      <h2>Count: {count}</h2>
      <div id = 'lang'>
        <Button onClickFunc = {() => setCount(count - 1)} operation = 'decrement'/>
        <Button onClickFunc = {() => setCount(0)} operation = 'reset' />
        <Button onClickFunc = {() => setCount(count + 1)} operation = 'increment' />
        <button onClick={clickHandler}>Manipulate Normal Js</button>
      </div>
    </>
  )
}

export default App
