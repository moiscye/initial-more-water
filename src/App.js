import React from "react";
import "./App.scss";

import Menu from "./components/Menu";
import Header from "./components/Header";
import HelpBar from "./components/HelpBar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="container">
      <Menu />
      <Header />
      <HelpBar text="Te gustaria obtener una cotizacion?" />
      <Footer />
    </div>
  );
};

export default App;
