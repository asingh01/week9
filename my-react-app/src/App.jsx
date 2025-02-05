import { useState } from 'react'
import './App.css'

function App() {
  
  const ToggleMessage = () =>{
    const [isToggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);

  const toggle = () =>{
    setToggle(!isToggle);
    setCount(count+1);
  }
    return(
      <div>
    <button onClick={toggle}>Toggle</button>
    <p>You have clicked: {count} times.</p>
    <p>Toggle is {isToggle.toString()}</p>
    </div>
    )

  }

  return (
    <div>
      <ToggleMessage/>
      <ToggleMessage/>
    </div>
  )
}

export default App
