import React, { useState } from "react";
import "./Demo.css";
import Span from "../UI/Span/Span";
import Button from "../UI/Button/Button";

function Demo() {
  let [count, setCount] = useState(0);

  function incrementHandler() {
    setCount(count + 1);
  }
  function decrementHandler() {
    setCount(count - 1);
  }
  console.log("DEMO EXECUTED");

  return (
    <div>
      {/* <button className="counterBtn" onClick={decrementHandler}>
        -
      </button> */}
      <Button clickHandler={decrementHandler}>-</Button>
      <Span>{10}</Span>
      <Button clickHandler={incrementHandler}>+</Button>
      {/* <button className="counterBtn" onClick={incrementHandler}>
        +
      </button> */}
    </div>
  );
}

export default Demo;
