import React from "react";
import { ReactComponent as PresentationSvg } from "../img/SVG/presentation.svg";
import { ReactComponent as DriverSvg } from "../img/SVG/drivers-license-o.svg";
import { ReactComponent as TruckSvg } from "../img/SVG/truck.svg";
import { ReactComponent as LockSvg } from "../img/SVG/lock.svg";
import { ReactComponent as MapSvg } from "../img/SVG/map-pin.svg";
import { ReactComponent as CardSvg } from "../img/SVG/credit-card.svg";
const featureList = [
  {
    title: "Entregas con un solo click",
    description:
      "Tomamos tu pedido en nuestra pagina y te lo llevamos de forma immediata. Tambien te la podemos llevar a la hora que a ti se te facilite.",
    logo: <TruckSvg className="features__icon" />,
  },
  {
    title: "Choferes experimentados",
    description:
      "Nuestros choferes cuentan con gran experiencia en el ramo y ademas conocen muy la ciudad y los alrededores.",
    logo: <DriverSvg className="features__icon" />,
  },
  {
    title: "Camiones con GPS",
    description:
      "Nuestros camiones cuentan con GPS para facilitar y disminuir el tiempo de entrega de tu pipa de agua. ",
    logo: <MapSvg className="features__icon" />,
  },
  {
    title: "Seguridad para tu hogar",
    description:
      "Nuestros choferes van uniformados para que los identifiques facilmente. Tambien nuestros camiones estan rotulados para facil indentificacion.",
    logo: <LockSvg className="features__icon" />,
  },
  {
    title: "Controla tus pedidos",
    description:
      "Te proporcianamos con una lista de los pedidos que haz realizado para que controles facilmente las finanzas de tu empresa u hogar.",
    logo: <PresentationSvg className="features__icon" />,
  },
  {
    title: "Pagos Seguros",
    description:
      "Ya sea que pagues por medios electronicos o que pagues a nuestros choferes. Tu seguridad es lo mas importante.",
    logo: <CardSvg className="features__icon" />,
  },
];

const Features = () => {
  return (
    <div className="features">
      <h1 className="features__heading heading-primary">
        Lo que nos distingue:
      </h1>
      <div className="features__grid">
        {featureList.map(({ title, description, logo }, id) => (
          <div className="features__cell" key={id}>
            {logo}
            <h4 className="features__head--secondary">{title}</h4>
            <p className="features__text">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
