import React, { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
    console.log("increase가 클릭됨");
  };

  const handleDecrease = () => {
    setCount(count - 1);
    console.log("decrease가 클릭됨");
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
    </div>
  );
}

export default App;
