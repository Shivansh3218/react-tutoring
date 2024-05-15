import "./App.css";
import Header from "./components/Header";
import { Body } from "./components/Body";
import Counter from "./components/Counter";
import { useState } from "react";
import FormCompoenent from "./components/FormComponent";

//rule is such that ki you have to write the name of the functional component in the first letter capital letter.

// Data flow is uni-directional in react => from parent to child.

//Hooks=> Are functions that let you use state and other React features in functional components

//useState
//useEffect
//useContext
//useReducer
//useRef
//useMemo
//useCallback
//custom hoooks

//Two types of components

//Functional components = >
//Functional components are the components that are created using functions
//They provide us Hooks to use the state and lifecycle methods in the functional components

//Class components

//usestate=> is a hook that is used to add the state in the functional components

function App() {
  //returning the JSX
  // const countrValue = 1000;

  let [counterValue, setCountrValue] = useState(10);

  return (
    <div className="App">
      <Header />
      {/* <label>Enter the value</label>
      <input
        type="number"
        onChange={(e) => {
          console.log(e.target.value);
          let value = e.target.value;
          setCountrValue(parseInt(value));
        }}
      /> */}
      {/* <Body /> */}
      {/* <Counter counterValue={counterValue} value={278} /> */}
      <FormCompoenent />
    </div>
  );
}

export default App;
