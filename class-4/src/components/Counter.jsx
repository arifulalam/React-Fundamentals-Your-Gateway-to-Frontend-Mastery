/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export const Counter = ({ count }) => {
  const [likes, setLikes] = useState(count);
  const [name, setName] = useState("");

  const getName = (e) => {
    setName((name) => e.target.value);
  };

  return (
    <div>
      <h2>useState</h2>
      <button onClick={() => setLikes((likes) => likes + 1)}>
        Like(s) : {likes}
      </button>
      <br />
      <input
        onChange={getName}
        type="text"
        name="name"
        placeholder="Enter your name"
      />
      <br />
      {name}
    </div>
  );
};
