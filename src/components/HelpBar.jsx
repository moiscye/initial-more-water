import React from "react";
import smoothScroll from "../utils/smoothScroll";
import { ReactComponent as ArrowF } from "../img/SVG/arrow_forward_ios.svg";

const HelpBar = ({ text, redirectTo }) => {
  return (
    <div className="help-bar" onClick={() => smoothScroll(redirectTo)}>
      <p className="  heading-primary help-bar__text">{text}</p>
      <ArrowF className="help-bar__arrow-f" />
    </div>
  );
};

export default HelpBar;
