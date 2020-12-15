import React from "react";
import "./App.scss";

import Menu from "./components/Menu";
import Header from "./components/Header";
import HelpBar from "./components/HelpBar";
import Features from "./components/Features";
import Footer from "./components/Footer";

import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="container">
      <Menu />
      <Header />
      <HelpBar text="Te gustaria obtener una cotizacion?" />
      <Features />
      {/* <HelpBar text="Contactanos" /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
