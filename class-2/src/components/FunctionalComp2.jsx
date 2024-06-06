/* eslint-disable no-unused-vars */
import {React, useState} from 'react'

const FunctionalComp2 = () => {
  const [count, setCount] = useState(0);

  const _increment = () => {
    setCount(count + 1);
  }

  const _decrement = () => {
    setCount(count - 1);
  }
  
  return (
    <>
      <button onClick={_increment}>Increment</button><br/>
      <span>{count}</span><br/>
      <button onClick={_decrement}>Decrement</button>
    </>
  )
}

export default FunctionalComp2;