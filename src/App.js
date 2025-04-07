import logo from "./logo.svg";
import "./App.css";
import Hero from "./Component/Hero";
import Header from "./Component/Header";
import About from "./Component/About";
import Timeline from "./Component/Timeline";
import Portfolio from "./Component/Portfolio";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Portfolio />
    </>
  );
}

export default App;
