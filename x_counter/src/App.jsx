import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increaseCount= ()=>{
    setCount(count+1);
  };
  const decreaseCount= ()=>{
    setCount(count-1);
  };
  return (
      <div className="card">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={increaseCount}>Increment</button>
        <button onClick={decreaseCount}>Decrement</button>
      </div>
  )
}

export default App
