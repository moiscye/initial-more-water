import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <form className="form">
        <label className="form__label">
          Nombre Completo <span className="required">*</span>
        </label>
        <input type="text" className="form__input" />
        <label className="form__label">
          Email <span className="required">*</span>
        </label>
        <input type="text" className="form__input" />
        <label type="number" className="form__label">
          Telefono
        </label>
        <input type="text" className="form__input" />
        <label className="form__label">
          Mensaje <span className="required">*</span>
        </label>
        <textarea rows="10" cols="50" className="form__textarea"></textarea>
        <button className="btn btn--md">Enviar Mensaje</button>
      </form>

      <div className="contact__container">
        <h1 className="contact__heading">Como te podemos ayudar?</h1>
        <p className="contact__text">
          Por favor envianos un mensaje detallado con tus dudas o comentarios.
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
