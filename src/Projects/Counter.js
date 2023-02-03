import React, { useState } from 'react';
function Counter() {
  const [first, setfirst] = useState(0);
  function increment() {
    setfirst(first + 1);
  }
  function decrement() {
    setfirst(first - 1);
    if (first <= 0) {
      setfirst(0);
    }
  }
  return (
    <>
      <p>{first}</p>
      <button className='btn' onClick={increment}>+</button>
      <button className='btn' onClick={decrement}>-</button>
    </>
  )
}
export default Counter;