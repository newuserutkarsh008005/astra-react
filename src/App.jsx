import React, { useEffect, useState } from "react";

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Welcome from "./pages/Welcome";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import Chatbot from "./components/Chatbot";

const App = () => {
const [curr,setata]=useState(true)
  const location = useLocation();
  function checkopen() {
    setata(!curr);
  }

useEffect (function(){
  
},[curr]);
  return (
<PageWrapper>    <div 
onClick={checkopen}
className= "responsive bg-black min-h-screen text-white overflow-hidden">


      <Nav curr={curr} setata={setata} / >
      <AnimatePresence mode="wait">

        <Routes
          location={location}
          key={location.pathname}
        >

          <Route
            path="/"
            element={<Welcome />}
          />

          <Route
            path="/home"
            element={<Home />}
          />

          <Route
            path="/explore"
            element={<Explore />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/store"
            element={<Store />}
          />

        </Routes>

      </AnimatePresence>

      <Footer />
      

    </div>
    </PageWrapper>

  );
};

export default App;