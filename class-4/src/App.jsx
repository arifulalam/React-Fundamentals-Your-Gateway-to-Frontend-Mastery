/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  const lines = [
    "The Quick Brown Fox Jumps Over The Lazy Dog.",
    "Betty bought some butter to make the bitter butter better.",
    "She sells sea shells on the sea shore.",
  ];

  const _ref = useRef(null);

  useEffect(() => {
    let index = parseInt(Math.random() * (lines.length));
    _ref.current.innerText = lines[index];
    console.log(index);
  }, [count]);

  return (
    <>
      <div>
        <Counter count={5} />
      </div>
      <div>
        <h2>useEffect</h2>
        <button onClick={() => {setCount((count) => count + 1)}}>Random Text</button>
        <p ref={_ref}></p>
      </div>
      <div></div>
      <div></div>
    </>
  );
}

export default App;
