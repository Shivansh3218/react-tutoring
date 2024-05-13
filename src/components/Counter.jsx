import React, { useEffect } from "react";
import "./counter.css";
import { useState } from "react";

function Counter({ props }) {
  // let count = 0;
  console.log(props, "This is the value of props");

  //syntax of useEffect
  //it takes a callback functtion as the first argument and a dependency array as the second argument

  //if the dependency array is empty then the useEffect will run only once
  //if the dependency array is not empty then the useEffect will run whenever the value of the dependency array changes
  //if the dependency array is not present then the useEffect will run whenever the component is rendered

  useEffect(() => {
    setCount(props);
    console.log("This is the use effect");
  }, [props]);

  const [count, setCount] = useState(props);

  function increment() {
    setCount(count + 1);
    console.log(count);
  }

  function decrement() {
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div className="container">
      <button className="increment" onClick={increment}>
        +
      </button>
      <span>{count}</span>
      <button className="decrement" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default Counter;
