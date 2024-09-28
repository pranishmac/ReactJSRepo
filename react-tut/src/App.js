import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header"; //importing the default export
import Body from "./Components/Body";
// import {Header} from "./Components/Header"  //importing the named export

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Body">
        <Body />
      </div>
    </div>
  );
}

export default App;
