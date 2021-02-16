import React from "react";
import "./footer.css";
import mail from "../../media/statics_mail.png";
import heatset from "../../media/statics_heatset.png";
import logo_alt from "../../media/statics_logo_alt.png";
import vtex from "../../media/statics_vtex.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <h3>Localizacao</h3>
        <hr />
        <p>Avenida Andrómeda, 2000. Bloco 6 e 8</p>
        <p>Alphavile SP</p>
        <p>brasil@corebiz.ag</p>
        <p>+551130901039</p>
      </div>
      <div className="contact-container">
        <div>
          <img src={mail} alt="mail" />
          <p>ENTRE EM COTATO</p>
        </div>
        <div>
          <img src={heatset} alt="heatset" />
          <div>
            <p>FALE COM O NOSSO</p>
            <p>CONSULTOR ONLINE</p>
          </div>
        </div>
      </div>
      <div className="created-powered-container">
        <div>
          <p>Created by</p>
          <img src={logo_alt} alt="logo" />
        </div>
        <div>
          <p>Powered by</p>
          <img src={vtex} alt="vtex" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
