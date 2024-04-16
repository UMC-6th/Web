// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// type 1 : function사용

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h2 id='count'>{count}</h2>
//       <button id='increase' onClick={increase}>+1</button>&nbsp;
//       <button id='decrease' onClick={decrease}>-1</button>
//     </>
//   )

//   function increase() {
//     setCount(count + 1);
//     console.log('increase가 클릭됨');
//   }
//   function decrease() {
//     setCount(count - 1);
//     console.log('decrease가 클릭됨');
//   }
// }

// type2
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 id='count'>{count}</h2>
      <button id='increase' onClick={() => {
        setCount(count + 1);
        console.log('increase가 클릭됨'); 
      }}>+1</button>&nbsp;
      <button id='decrease' onClick={() => {
        setCount(count - 1);
        console.log('decrease가 클릭됨');
      }}>-1</button>
    </>
  );
}



export default App

