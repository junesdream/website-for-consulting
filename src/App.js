import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import Demo from "./components/demo/Demo";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
     <Navbar /> 
     <Hero /> 
     <About /> 
     <Testimonials /> 
     <Demo /> 
     <Footer /> 
    </div>
  );
}

export default App;
