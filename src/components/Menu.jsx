import React, { useState } from "react";
import smoothScroll from "../utils/smoothScroll";
import classNames from "classnames";
import { ReactComponent as Drop } from "../img/SVG/droplet.svg";

import { ReactComponent as MenuSvg } from "../img/SVG/menu.svg";
const Menu = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const toggleCollapsible = (show) => {
    if (show && isToggleOn) {
      setIsToggleOn(!show);
    } else {
      setIsToggleOn(show);
    }
  };

  const user = () => (
    <div className="user">
      <Drop className="user__logo" />
      <h3 className="user__heading">
        <span className="user__heading-span">A</span>ngelopolis
      </h3>
    </div>
  );
  return (
    <div id="inicio" className="menu">
      {user()}
      <button
        onClick={() => {
          toggleCollapsible(true);
        }}
        onBlur={() => {
          toggleCollapsible(false);
        }}
        className="menu__burguer-btn"
      >
        <MenuSvg />
      </button>

      <div
        className={
          isToggleOn
            ? classNames("navigation", "navigation--toggle")
            : "navigation"
        }
      >
        <li className="navigation__item">
          <button
            onClick={() => smoothScroll("inicio")}
            className="navigation__link"
          >
            Inicio
          </button>
        </li>
        <li className="navigation__item">
          <button
            onClick={() => smoothScroll("nosotros")}
            className="navigation__link"
          >
            Nosotros
          </button>
        </li>
        <li className="navigation__item">
          <button
            onClick={() => smoothScroll("contacto")}
            className="navigation__link"
          >
            Contacto
          </button>
        </li>
      </div>
    </div>
  );
};

export default Menu;
