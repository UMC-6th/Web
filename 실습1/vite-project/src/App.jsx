import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
5

function App() {


  const [num,setnum] = useState(0);

  function increaseClick(){
    setnum((num)=>num+1);
    console.log("increase가 클릭됨");
  }

  function decreaseClick(){
    setnum((num)=>num-1);
    console.log("decrease가 클릭됨");
  }

  
  
  return(
    <div>
    <h1>{num}</h1>

    <button onClick={increaseClick}>+1</button>
    <button  onClick={decreaseClick}>-1</button>
    </div>
  
  )
}
  

export default App
