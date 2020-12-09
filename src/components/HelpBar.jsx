import React from "react";
import { ReactComponent as ArrowF } from "../img/SVG/arrow_forward_ios.svg";

const HelpBar = ({ text }) => {
  return (
    <div className="help-bar">
      <p className="  heading-primary help-bar__text">{text}</p>
      <ArrowF className="help-bar__arrow-f" />
    </div>
  );
};

export default HelpBar;
