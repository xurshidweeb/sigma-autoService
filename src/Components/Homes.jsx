import React from "react";
import Home from "../Pages/Home";
import Hero from "../Pages/Hero";
import Services from "../Pages/Services";
import Result from "../Pages/Result";
import Xizmatlar from "../Pages/Xizmatlar";
import Contact from "../Pages/Contact";
import Form from "../Pages/Form";


function Homes() {
  return (
    <>
      <div className="">
        <Home />
        <Hero />
        <Services />
        <Result />
        <Xizmatlar />
        <Contact />
        <Form />
      </div>
    </>
  );
}

export default Homes;

