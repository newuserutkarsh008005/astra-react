import React from "react";

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

const App = () => {

  const location = useLocation();

  return (
<PageWrapper>    <div className="bg-black min-h-screen text-white overflow-hidden">

      <Nav />

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