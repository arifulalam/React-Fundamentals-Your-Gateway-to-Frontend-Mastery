import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count );
  return (
    <>
      <h1 className="text-[25px]">Redux Toolkit</h1>
      <span className="text-[35px] text-bold">{count}</span><br/>
      <Counter/>
    </>
  );
}

export default App;
