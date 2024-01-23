import React, { useCallback, useState } from "react";
import "./Demo.css";
import Span from "../UI/Span/Span";
import Button from "../UI/Button/Button";

function Demo() {
  let [count, setCount] = useState(0);
  let [activate, setActivate] = useState(false);

  let incrementHandler = useCallback(
    function () {
      if (activate) setCount(count + 1);
    },
    [activate]
  );

  let decrementHandler = useCallback(
    function () {
      if (activate) setCount(count - 1);
    },
    [activate]
  );

  function activateHandler() {
    setActivate(true);
  }

  console.log("DEMO EXECUTED");

  return (
    <div>
      <Button clickHandler={decrementHandler}>-</Button>
      <Span>{count}</Span>
      <Button clickHandler={incrementHandler}>+</Button>
      <Button clickHandler={activateHandler}>Activate</Button>
    </div>
  );
}

export default Demo;
