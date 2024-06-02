import "./App.css";
import Header from "./components/Header";
import { Body } from "./components/Body";
import Counter from "./components/Counter";
import { useState, useContext } from "react";
import FormCompoenent from "./components/FormComponent";
import { Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Useeffect from "./hooksExamples/Useeffect";
import UseeffectExample from "./hooksExamples/Effect";
import Child1 from "./components/propsdrilling/Child1";
import Child3 from "./components/propsdrilling/Child3";
import RefExample from "./hooksExamples/RefExample";
import MemoExample from "./hooksExamples/MemoExample";
import Parent from "./hooksExamples/callbackHook/Parent";
import ReducerExample from "./hooksExamples/ReducerExample";
import ReducerForm from "./hooksExamples/ReducerForm";
import CounterEx from "./hooksExamples/customHooks/CounterEx";
import TitleChanger from "./hooksExamples/customHooks/TitleChanger";
// import { DataContext } from "./components/context/DataContext";

//rule is such that ki you have to write the name of the functional component in the first letter capital letter.

// Data flow is uni-directional in react => from parent to child.

//Hooks=> Are functions that let you use state and other React features in functional components

//useState- state management
//useEffect  - - side effects
//useContext state management
//useReducer state management
//useRef - to access the dom elements, prevent unneccessary re-renders
//useMemo - optimization
//useCallback - optimization
//custom hoooks -

//Two types of components

//Functional components = >
//Functional components are the components that are created using functions
//They provide us Hooks to use the state and lifecycle methods in the functional components

//Class components

//usestate=> is a hook that is used to add the state in the functional components

// for routing you can use react-router-dom

//Components => BrowserRouter, Route, Link, Routes

// PROPS = > Props are the arguments that are passed to the components from the parent component.
//Props are immutable => you cannot change the value of the props in the child component.
//Props are used to pass the data from the parent component to the child component.

function App() {
  //returning the JSX
  // const countrValue = 1000;
  //  const dataContext = useContext(DataContext);
  //  const { data, setData } = dataContext;

  // setData("1000000000000000000")

  let [counterValue, setCountrValue] = useState(10);

  return (
    <div className="App">
      {/* <UseeffectExample /> */}
      {/* <Useeffect/> */}

      {/* 

I want my child3 to have the value of counterValue. for that I will have to pass the value from the parent component to the child component.
<Child1 counterValue={counterValue} />
<Child2 counterValue={counterValue} />
<Child3 counterValue={counterValue} /> => recieve the value of counterValue from the parent component.

PROP DRILLING = > Passing the props from the parent component to the child component through the intermediate components.

App
 ├── CHILD1
      ├── CHILD2
           ├── CHILD3


*/}
      {/* <Child1 counterValue={counterValue} /> */}

      {/* <Useeffect/>
      <Link to="/about"><button>About</button> </Link>
      <Link to="/counter" ><button>Counter</button> </Link>
      <Link to="/body"><button>Body</button> </Link>
      <Link to="/"><button>Home</button> </Link>
      



      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/body" element={<Body />} />
        <Route
          path="/counter"
          element={<Counter counterValue={counterValue} value={278} />}
        />

      </Routes> */}

      {/* <RefExample /> */}
      {/* <MemoExample/> */}
      {/* <Parent/> */}
      {/* <ReducerExample/> */}

      {/* <ReducerForm/> */}

      {/* <CounterEx /> */}
      <TitleChanger/>
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
