import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import napa from "../../assets/napa.png";
import {useTranslation} from "react-i18next";

function Footer() {

  const {t} = useTranslation();

  return (
    <footer className="footer">
      <div className="div1">
        <div className="footerr">
        <div className="div2">
          <div className="brandd">
            <img src={logo} alt="rasm" />
            AlfaBest
          </div>
          <div className="foot-li">
            <ul>
              <li><a href="/carrier">{t("li1")}</a></li>
              <li><a href="/purchase">{t("li2")}</a></li>
              <li><a href="/about">{t("li3")}</a></li>
              <li><a href="/cooperation">{t("li4")}</a></li>
              <li><a href="/contact">{t("li5")}</a></li>
              <li><a href="/cooperation">{t("li6")}</a></li>
          
            </ul>
          </div>
          <div className="foot-li2">
            <ul>
              <li><a href="/household">{t("li7")}</a></li>
              <li><a href="/catering">{t("li8")}</a></li>
              <li><a href="/transportation">{t("li9")}</a></li>
              <li><a href="/engineering">{t("li10")}</a></li>
          
            </ul>
          </div>
        </div>
        <div className="social">
          <p>{t("podpis")}</p>
          <div className="iccons">
            <i id="socicon" className="ri-telegram-line"></i>
            <i id="socicon" className="ri-instagram-line"></i>
            <i id="socicon" className="ri-facebook-circle-fill"></i>
          </div>
        </div>
        </div>
      </div>
      <div>
        <div className="div3">
          <img src={napa} alt="rasm" />
          <div>
            <p>{t("yordam")}</p>
            <p>{t("hamkor")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
