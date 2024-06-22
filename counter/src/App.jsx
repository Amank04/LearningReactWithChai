import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15);
  // let count  = 15;

  const increase = () => {
    if(count<20)setCount(count+1);
    // count++;
    console.log("Clicked ", count );
    
  }
  const decrease = () => {
    // count--;
    if(count>0)
      {
      setCount(prevCount => prevCount-1)
      setCount(prevCount => prevCount-1)
      setCount(prevCount => prevCount-1)
      setCount(prevCount => prevCount-1)
      }
    console.log("Clicked ", count );
  }

  return (
    <>
     <h1>Hind kaa Sitara!</h1>

     <div>
      counter value: {count}
     </div>

     <button onClick={increase}>Increment value {count}</button>
     <br />
     <button onClick={decrease}>Decrement value {count}</button>

     <p>Count value: {count}</p>
    </>
  )
}

export default App
