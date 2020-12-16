import React from "react";
import image1 from "../img/services-1.jpg";
import { ReactComponent as Checkmark } from "../img/SVG/checkmark.svg";
import { ReactComponent as Idea } from "../img/SVG/idea.svg";
const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services__left">
        <img src={image1} alt="Regando agua con una manguera" />
      </div>
      <div className="services__right">
        <ul className="services__list">
          <div className="heading-primary mb-md services__heading">
            Servicios que ofrecemos:
          </div>
          <li className="services__list--item">
            <Checkmark className="services__list__icon" />
            <p className="text-primary">Pipa de agua de 4,000 litros.</p>
          </li>
          <li className="services__list--item">
            <Checkmark className="services__list__icon" />
            <p className="text-primary">Pipa de agua de 10,000 litros.</p>
          </li>
          <li className="services__list--item">
            <Checkmark className="services__list__icon" />
            <p className="text-primary">Pipa de agua de 20,000 litros.</p>
          </li>

          <li className="services__list--item">
            <Checkmark className="services__list__icon" />
            <p className="text-primary">Lavado y desinfectado de Cisternas.</p>
          </li>

          <li className="services__list--item">
            <Idea className="services__list__icon services__list__icon--last" />
            <p className="text-primary">
              {" "}
              Las pipas de agua incluyen <strong>45 metros</strong> de manguera.
              Si requiere mas manguera la ofrecemos por un costo adicional.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
