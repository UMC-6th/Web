import React, { useState } from 'react';
import Modal from './components/Modal.jsx'; 

export default function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    console.log('increase');
    setCount(count + 1);
  };

  const decrease = () => {
    console.log('decrease');
    setCount(count - 1);
  };

  return (
    <div>
      <Modal></Modal>
      <h2>{count}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      
    </div>
  );
}


