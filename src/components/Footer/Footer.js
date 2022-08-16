import React from "react";
import { useHistory } from "react-router-dom";
import Waves from "../Waves/Waves";
import logo from "../../images/logoolddark.svg";
import logoDark from "../../images/logoold.png";
import "./Footer.css";

function Footer({ theme }) {
  let history = useHistory();

  function handleClick(path) {
    history.push(`/${path}`);
  }

  return (
    <>
      {theme === "dark" ? (
        <Waves
          pos={"down"}
          svg={
            "M0,96L60,90.7C120,85,240,75,360,90.7C480,107,600,149,720,160C840,171,960,149,1080,144C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          }
        />
      ) : (
        <Waves
          pos={"up"}
          svg={
            "M0,64L48,58.7C96,53,192,43,288,69.3C384,96,480,160,576,176C672,192,768,160,864,133.3C960,107,1056,85,1152,69.3C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          }
        />
      )}
      <footer
        className={`footer ${theme === "dark" ? "footer__thme_dark" : null}`}
      >
        <div
          className={`footer__content ${
            theme === "dark" ? "footer__content_dark" : null
          }`}
        >
          <div className="footer__logo-wrapper">
            <img
              className="logo footer__logo"
              src={theme === "dark" ? logoDark : logo}
              alt="Логотип"
            />
            <h3 className="footer__tagline">
              Актуальные IT решения с 1992 года
            </h3>
          </div>
          <div className="footer__contact">
            <h3 className="footer__contact_title">Контакты</h3>
            <p className="footer__contact_item">
              <a
                href="tel: +74959848069"
                className={`footer__contact_link ${
                  theme === "dark" ? "footer__contact_link_dark" : ""
                }`}
              >
                (+7) 495-984-80-69
              </a>
            </p>
            <p className="footer__contact_item">
              <a
                href="mailto: info@m-cti.ru"
                className={`footer__contact_link ${
                  theme === "dark" ? "footer__contact_link_dark" : ""
                }`}
              >
                info@m-cti.ru
              </a>
            </p>
            <button
              className="footer__contact_button"
              onClick={() => handleClick("contacts")}
            >
              Связаться с нами
            </button>
          </div>
        </div>
        <p className="footer__copyright">© 2022 ЦТИ</p>
      </footer>
    </>
  );
}

export default Footer;
