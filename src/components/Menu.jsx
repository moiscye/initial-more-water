import React from "react";
import logo from "../img/logo_transparent.png";

const Menu = () => {
  const user = () => (
    <div className="user">
      <img className="user__logo" src={logo} alt="Logo Angelopolis" />
    </div>
  );
  return (
    <div className="menu">
      {user()}
      <ul className="navigation">
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Inicio
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Nosotros
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Cotizaciones
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Galeria
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
