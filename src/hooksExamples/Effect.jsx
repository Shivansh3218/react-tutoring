import React, { useState, useEffect } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(200);

  useEffect(() => {
    console.log("NO DEPENDENCY");
  });

  useEffect(() => {
    console.log("EMPTY DEPENDENCY ARRAY");
  }, []);

  useEffect(() => {
    console.log("COUNT DEPENDECY");
  }, [count, data]);

  useEffect(() => {
    console.log("Data DEPENDECY");
  }, [data]);
  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count Plus</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => setData(data + 1)}>Data Plus</button>
    </>
  );
}

export default Effect;
