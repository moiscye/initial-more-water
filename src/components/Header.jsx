import React from "react";
import smoothScroll from "../utils/smoothScroll";
import image1 from "../img/pipa-logo-2.png";
const Header = () => {
  return (
    <>
      <div id="header" className="header">
        <div className="header__container">
          <h1 className="header__heading heading-primary">
            Necesitas una pipa de Agua?
          </h1>
          <h3 className="header__text text-primary">
            En <strong>Angelopolis</strong> contamos con agua de la mejor
            calidad, servicio inigualable y precio que ayuda a su economia.
          </h3>
          <button
            className="btn btn--large header__btn"
            onClick={() => smoothScroll("contacto")}
          >
            Ordena tu pipa aqui
          </button>
        </div>
      </div>
      <div className="header--right">
        <img className="header--right__img" src={image1} alt="Agua Potable" />
      </div>
    </>
  );
};

export default Header;
