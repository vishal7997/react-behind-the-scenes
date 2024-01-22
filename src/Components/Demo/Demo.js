import React, { useState } from "react";
import "./Demo.css";

function Demo() {
  let [count, setCount] = useState(0);

  function incrementHandler() {
    setCount(count + 1);
  }
  function decrementHandler() {
    setCount(count - 1);
  }

  return (
    <div>
      <button className="counterBtn" onClick={decrementHandler}>
        -
      </button>
      <span>{count}</span>
      <button className="counterBtn" onClick={incrementHandler}>
        +
      </button>
    </div>
  );
}

export default Demo;
