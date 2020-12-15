import React from "react";
import smoothScroll from "../utils/smoothScroll";
import { ReactComponent as FacebookSvg } from "../img/SVG/facebook.svg";
import { ReactComponent as TwitterSvg } from "../img/SVG/twitter.svg";
import { ReactComponent as InstagramSvg } from "../img/SVG/instagram.svg";

const Footer = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="footer--left ">
        <h3 className="heading-secondary heading-secondary--footer mb-md">
          Mapa del Sitio
        </h3>

        <p className="footer-navigation">
          <button
            onClick={() => smoothScroll("inicio")}
            className="footer-navigation__link"
          >
            Inicio
          </button>
          <button
            onClick={() => smoothScroll("nosotros")}
            className="footer-navigation__link"
          >
            Nosotros
          </button>

          <button
            onClick={() => smoothScroll("contacto")}
            className="footer-navigation__link"
          >
            Contacto
          </button>
        </p>
      </div>

      <div className="footer--center">
        <h3 className="heading-secondary heading-secondary--footer mb-md">
          Contacto
        </h3>
        <div>
          <p className="text-primary text-primary--footer">Cruz de Mayo 9511</p>
        </div>
        <div>
          <p className="text-primary text-primary--footer">
            Col. Exhacienda Mayorazgo
          </p>
        </div>
        <div>
          <p className="text-primary text-primary--footer">
            C.P. 72480 Puebla, Puebla
          </p>
        </div>

        <div>
          <p className="text-primary text-primary--footer">222 436 2510</p>
        </div>

        <div>
          <p className="text-primary text-primary--footer">
            <a
              className="footer--center__link"
              href="mailto:pipasangelopolis@gmail.com"
            >
              pipasangelopolis@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer--right">
        <h3 className="heading-secondary heading-secondary--footer mb-md">
          Acerca de Nosotros
        </h3>
        <div className="footer--right__text-container mb-md">
          <p className="text-primary text-primary--footer">
            Somos una empresa especializada en el trasporte de Agua así como en
            el lavado de cisternas. Estamos dedicados a brindar a nuestros
            clientes un servicio de excelencia ofreciendo agua de alta calidad
            para su empresa u hogar.
          </p>
        </div>

        <div className="footer__icons">
          <a className="footer-navigation__link" href="/">
            <FacebookSvg className="footer__icons__icon" />
          </a>
          <a className="footer-navigation__link" href="/">
            <TwitterSvg className="footer__icons__icon" />
          </a>
          <a className="footer-navigation__link" href="/">
            <InstagramSvg className="footer__icons__icon" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p className="text-primary text-primary--footer copyright--text">
          Pipas de Agua Angelopolis 2020. &copy; Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
