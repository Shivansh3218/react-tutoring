import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

//rule is such that ki you have to write the name of the functional component in the first letter capital letter
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
