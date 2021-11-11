import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Land from "./Components/Land";
import Club from "./Components/Club";
import Project from "./Components/Project";
import Team from "./Components/Team";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Land />
      <Club />
      <Project />
      <Team />
    </div>
  );
}

export default App;
