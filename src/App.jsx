import "./App.css";
import Header from "./components/Header";
import { Body } from "./components/Body";
import Counter from "./components/Counter";
import { useState } from "react";
import FormCompoenent from "./components/FormComponent";
import { Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Useeffect from "./examples/Useeffect";

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

// for routing you can use react-router-dom

//Components => BrowserRouter, Route, Link, Routes

function App() {
  //returning the JSX
  // const countrValue = 1000;

  let [counterValue, setCountrValue] = useState(10);

  return (
    <div className="App">
      <Useeffect/>
      <Link to="/about"><button>About</button> </Link>
      <Link to="/counter" ><button>Counter</button> </Link>
      <Link to="/body"><button>Body</button> </Link>
      <Link to="/"><button>Home</button> </Link>
      

      {/* <h1>This is App component</h1> */}

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/body" element={<Body />} />
        <Route
          path="/counter"
          element={<Counter counterValue={counterValue} value={278} />}
        />

      </Routes>
    </div>
  );
}

export default App;

// <Header />
// {/* <label>Enter the value</label>
// <input
//   type="number"
//   onChange={(e) => {
//     console.log(e.target.value);
//     let value = e.target.value;
//     setCountrValue(parseInt(value));
//   }}
// /> */}
// {/* <Body /> */}
// {/* <Counter counterValue={counterValue} value={278} /> */}
// <FormCompoenent />
