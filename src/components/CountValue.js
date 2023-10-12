import React, { useState } from 'react'

const CounterIncr = () => {
 const [count, setCount] = useState(0);

 const incrementCount = () => {
    setCount(count + 1);
 }
 const decrementCount = () => {

    if(count > 0) {
        setCount(count - 1);
    }
    
 }

  return (
    <>
        <h1>Counter: {count}</h1> 

        <button onClick={incrementCount}>Incrment</button> 
        <button onClick={decrementCount}>decrment</button>
    </>
  )
}

export default CounterIncr
