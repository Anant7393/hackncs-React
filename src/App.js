import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Land from "./Components/Land";
import Club from "./Components/Club";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Land />
      <Club />
    </div>
  );
}

export default App;
