import React from "react";
import Home from "../Pages/Home";
import Hero from "../Pages/Hero";
import Services from "../Pages/Services";
import Result from "../Pages/Result";
import Xizmatlar from "../Pages/Xizmatlar";
import Contact from "../Pages/Contact";

function Homes() {
  return (
    <>
      <div className="">
        <Home />
        <Hero/>
        <Services/>
        <Result/>
        <Xizmatlar/>
        <Contact/>
      </div>
    </>
  );
}

export default Homes;
