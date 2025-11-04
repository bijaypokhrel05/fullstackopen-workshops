import { createRoot } from 'react-dom/client'
import { useState } from 'react';
import { createStore } from 'redux';

const counterReducer = (state=0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  }

  return state;
};

const store = createStore(counterReducer);

function App() {
  const [count, setCount] = useState(0);

  const handleCountIncrement = () => {
    store.dispatch({ type: 'INCREMENT'})
  };

  // const handleCountDecrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // }
  return (
    <>
      <h1>Counter: {store.getState()}</h1>
      <div>
        <button onClick={handleCountIncrement}>Increment</button>
        {/* <button onClick={handleCountDecrement}>Decrement</button> */}
      </div>
    </>
  )
}

let myRoot = createRoot(document.getElementById('root'))

function myRender() {
  myRoot.render(<App/>);
}

myRender();

store.subscribe(myRender);