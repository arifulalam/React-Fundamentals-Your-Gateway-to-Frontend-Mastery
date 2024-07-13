import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, dynamic, increment } from "../features/counterSlice";

const Counter = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const incrementEvent = () => {
    dispatch(increment(setCount((prev) => prev + 1)));
  };

  const decrementEvent = () => {
    dispatch(decrement(setCount((prev) => prev - 1)));
  };

  const dynamicEvent = () => {
    let dynamicValue = Math.random();
    dispatch(dynamic(Math.round(Math.random() * 10, 0)));
  };
  return (
    <>
      <div className="join border shadow">
        <button
          className="btn join-item btn-primary glass"
          onClick={incrementEvent}
        >
          Increment
        </button>
        <button
          className="btn join-item btn-warning glass"
          onClick={decrementEvent}
        >
          Decrement
        </button>
        <button
          className="btn join-item btn-success glass"
          onClick={dynamicEvent}
        >
          Dynamic
        </button>
      </div>
    </>
  );
};

export default Counter;
