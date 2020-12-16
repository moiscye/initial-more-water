import React from "react";
import "./App.scss";

import Menu from "./components/Menu";
import Header from "./components/Header";
import HelpBar from "./components/HelpBar";
import Features from "./components/Features";
import Services from "./components/Services";
import Carroucel from "./components/Carroucel";
import Footer from "./components/Footer";

import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="container">
      <Menu />
      <Header />
      <HelpBar
        text="Le gustaria obtener una cotizacion?"
        redirectTo="contacto"
      />
      <Features />
      {/* <HelpBar text="Contactanos" /> */}
      <Services />
      <Carroucel />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
