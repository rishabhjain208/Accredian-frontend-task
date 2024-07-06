import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Appbar from "./Component/Appbar";
import Hero from "./Component/Hero";
import HowDoRefer from "./Component/HowDoRefer";
import Benefits from "./Component/Benefits";
import Footer from "./Component/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Appbar />
      <Hero />
      <HowDoRefer />
      <Benefits />
      <Footer />
    </>
  );
}

export default App;
