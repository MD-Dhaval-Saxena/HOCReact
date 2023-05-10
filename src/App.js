import "./styles.css";
import React, { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <h1>Hoc</h1>
      <Hoc1 cmp={Counter} />
      <Hoc2 cmp={Counter} />
    </div>
  );
}
function Hoc1(props) {
  return (
    <h2
      style={{ display: "inline-block", backgroundColor: "red", width: "70px" }}
    >
      Hoc1
      <props.cmp />
    </h2>
  );
}
function Hoc2(props) {
  return (
    <h2
      style={{
        display: "inline-block",
        backgroundColor: "pink",
        width: "70px"
      }}
    >
      Hoc1
      <props.cmp />
    </h2>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
