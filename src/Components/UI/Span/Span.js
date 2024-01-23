import React from "react";

function Span(props) {
  console.log("SPAN EXECUTED");

  return <span>{props.children}</span>;
}

export default React.memo(Span);
