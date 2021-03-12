import React from "react";
import { FooterSection } from "./styles";

const Footer = (props) => {
  return (
    <FooterSection>
      <figure>
        <img src={props.logo} />
      </figure>
      <div>
        <p>{props.copyrights}</p>
      </div>
    </FooterSection>
  );
};

export default Footer;
