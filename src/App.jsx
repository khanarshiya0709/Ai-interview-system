import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Works from "./components/Works";
import About from "./components/About";
import Footer from "./components/Footer";



import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Works />
      <About />
      <Footer />


    </>
  );
}

export default App;