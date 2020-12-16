import React from "react";
import smoothScroll from "../utils/smoothScroll";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../img/carrucel-1.jpg";
import image2 from "../img/carrucel-2.jpg";
import image3 from "../img/carrucel-3.jpg";
import image4 from "../img/carrucel-4.jpg";
import image5 from "../img/carrucel-5.jpg";
import image6 from "../img/carrucel-6.jpg";
import image7 from "../img/carrucel-7.jpg";
import image8 from "../img/carrucel-8.jpg";
import image9 from "../img/carrucel-9.jpg";
import image10 from "../img/carrucel-10.jpg";

const Carroucel = () => {
  return (
    <div className="carroucel" id="gallery">
      <div className="carroucel__container">
        <h3 className="heading-primary">Galeria</h3>
        <p className="text-primary">
          Aqui te presentamos una galeria de fotos para que refresques tus ojos.
        </p>
        <p className="text-primary">
          Si estas listo para ordenar tu pipa, da click en el siguiente boton:
        </p>
        <button
          className="btn btn--large"
          onClick={() => smoothScroll("contacto")}
        >
          Ordenar Pipa
        </button>
      </div>
      {/* width="80rem"  */}
      <Carousel className="carroucel__gallery" autoPlay showArrows={true}>
        <div>
          <img src={image1} alt="pipa de agua" />
          <p className="legend carroucel__text ">
            Entregamos en tu residencia o negocio
          </p>
        </div>
        <div>
          <img src={image2} alt="cisterna antes de limpiar" />
          <p className="legend carroucel__text ">
            Cisterna antes de nuestro servicio de lavado
          </p>
        </div>
        <div>
          <img src={image3} alt="cisterna limpia" />
          <p className="legend carroucel__text ">
            Despues de nuestro servicio de lavado de cisterna
          </p>
        </div>
        <div>
          <img src={image4} alt="pipa de agua" />
          <p className="legend carroucel__text ">
            Nuestra flota de pipas en excelente estado
          </p>
        </div>
        <div>
          <img src={image5} alt="agua a punto de mojar a una mujer" />
          <p className="legend carroucel__text ">
            Solo disfruta lo que el agua hace por ti
          </p>
        </div>
        <div>
          <img src={image6} alt="Llenando alberca" />
          <p className="legend carroucel__text ">
            Servicio de llenado de albercas
          </p>
        </div>
        <div>
          <img src={image7} alt="escaleras de alberca" />
          <p className="legend carroucel__text ">
            Nuestra agua cuenta con los mas altos estandares de calidad
          </p>
        </div>
        <div>
          <img src={image8} alt="pies mojados " />
          <p className="legend carroucel__text ">
            Disfruta el agua mas limpia de la region
          </p>
        </div>
        <div>
          <img src={image9} alt="mujer dentro de una alberca" />
          <p className="legend carroucel__text ">Te unes?</p>
        </div>
        <div>
          <img src={image10} alt="agua cristalina" />
          <p className="legend carroucel__text ">Agua es vida</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Carroucel;
