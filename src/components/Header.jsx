import React from "react";
import { ReactComponent as Drop } from "../img/SVG/droplet.svg";

import image1 from "../img/pipa-logo-2.png";
const Header = () => {
  return (
    <div className="header">
      <Drop className="header__icon" />
      <h1 className="header__heading heading-primary">
        Necesitas una pipa de Agua?
      </h1>
      <h3 className="header__text text-primary">
        En <strong>Angelopolis</strong> contamos con agua de la mejor calidad,
        servicio inigualable y precio que ayuda a tu economia{" "}
      </h3>
      <button className="btn btn--large header__btn">
        Ordena tu pipa aqui
      </button>

      <img className="header__img" src={image1} alt="Agua Potable" />
    </div>
  );
};

export default Header;
