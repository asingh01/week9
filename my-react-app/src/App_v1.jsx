import { useEffect, useState } from 'react'
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

  const [count, setCount] = useState(0);

  const increaseCount=()=>{
    // console.log('increaseCount called '+count);
    setCount(currentValue=> currentValue+1);
  }

  useEffect(function(){
    // console.log('useEffect')
    setInterval(increaseCount, 1000);
  },[]);

  useEffect(function(){
    console.log('Current Count Value is '+count);
    // setInterval(increaseCount, 1000);
  },[count]);

  // console.log('render');
  // setInterval(increaseCount, 1000);

  return (
    <div>
      {/* <ToggleMessage/>
      <ToggleMessage/> */}
      {count}
    </div>
  )
}

export default App
