// import Image from "next/image";
import Header from "../pages/Header"
import Home from "./components/Home";
import About from "./components/About";

import React from 'react'
import Contact from "./components/Contact";

const page = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Contact/>
    </div>
  )
}

export default page
