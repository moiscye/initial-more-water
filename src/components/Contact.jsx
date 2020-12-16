import React, { useState } from "react";
import axios from "axios";
import image1 from "../img/map.jpg";
const Contact = () => {
  const initialState = {
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  };
  const [contactDetails, setContactDetails] = useState(initialState);

  let { fullName, phoneNumber, email, message } = contactDetails;

  const handleChange = (e) => {
    var data = { ...contactDetails };
    data[e.target.name] = e.target.value;
    setContactDetails(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactDetails);
    axios.post(`.netlify/functions/contact`, contactDetails);
  };

  return (
    <div
      id="contacto"
      className="contact"
      style={{
        backgroundImage: `url(${image1}) left`,
        backgroundSize: "cover",
      }}
    >
      <form className="form" onSubmit={handleSubmit}>
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
          type="text"
          className="form__input"
        />
        <label type="number" className="form__label">
          Telefono <span className="required">*</span>
        </label>
        <input
          name="phoneNumber"
          value={phoneNumber}
          type="text"
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
    </div>
  );
};

export default Contact;
