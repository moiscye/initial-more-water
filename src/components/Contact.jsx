import React, { useState } from "react";
import smoothScroll from "../utils/smoothScroll";
import axios from "axios";
import image1 from "../img/map.jpg";
import { ReactComponent as SuccessSvg } from "../img/SVG/success.svg";
const Contact = () => {
  const initialState = {
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  };
  const [contactDetails, setContactDetails] = useState(initialState);
  const [error, setError] = useState(false);
  const [isSent, setIsSent] = useState(false);
  let { fullName, phoneNumber, email, message } = contactDetails;

  const handleChange = (e) => {
    var data = { ...contactDetails };
    data[e.target.name] = e.target.value;
    setContactDetails(data);
    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) {
      setError(true);
      smoothScroll("form");
      return;
    }

    let res = await axios.post(`.netlify/functions/contact`, contactDetails);
    if (res.status === 200) {
      setContactDetails(initialState);
      setIsSent(true);
      smoothScroll("contacto");
    }
  };

  const validateFields = () => {
    return fullName && phoneNumber && email && message;
  };

  const errorMessage = () => {
    return (
      <div className="form__error">
        <p className="text-primary text-primary--error">
          Tienes que llenar todos los campos para continuar
        </p>
      </div>
    );
  };

  const formSection = () => {
    return (
      <>
        <form id="form" className="form" onSubmit={handleSubmit}>
          {error ? errorMessage() : null}
          <label className="form__label">
            Nombre Completo <span className="required">*</span>
          </label>
          <input
            name="fullName"
            value={fullName}
            type="text"
            className="form__input"
            onChange={handleChange}
          />
          <label className="form__label">
            Email <span className="required">*</span>
          </label>
          <input
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            className="form__input"
          />
          <label type="number" className="form__label">
            Telefono <span className="required">*</span>
          </label>
          <input
            name="phoneNumber"
            value={phoneNumber}
            type="tel"
            className="form__input"
            onChange={handleChange}
          />
          <label className="form__label">
            Mensaje <span className="required">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            rows="10"
            cols="50"
            className="form__textarea"
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn btn--md">
            Enviar Mensaje
          </button>
        </form>
        {containerSection()}
      </>
    );
  };

  const containerSection = () => {
    return (
      <div className="contact__container">
        <h1 className="contact__heading">Como te podemos ayudar?</h1>
        <p className="contact__text">
          Por favor envienos un mensaje con sus dudas, comentarios o si requiere
          una <strong>cotizacion detallada</strong>.
        </p>
        <p className="contact__text ">
          Nos pondremos en contacto con usted a la brevedad posible.
        </p>
        <h1 className="contact__heading contact__heading--extra-margin">
          Gracias!
        </h1>
      </div>
    );
  };

  const sentSection = () => {
    return (
      <div className="form form--success">
        <SuccessSvg className="form__icon" />
        <h1 className="heading-primary">Tu mensaje ha sido enviado!</h1>
        <p className="text-primary">En breve te contactaremos</p>
        <button
          onClick={() => setIsSent(false)}
          type="button"
          className="btn btn--md"
        >
          Enviar Otro Mensaje
        </button>
      </div>
    );
  };

  return (
    <div
      id="contacto"
      className="contact"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
      }}
    >
      {!isSent ? formSection() : sentSection()}
    </div>
  );
};

export default Contact;
