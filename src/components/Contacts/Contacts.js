import React from "react";

import contactsBg from "../../images/contacts.png";
import phone from "../../images/mobile-phone.png";
import head from "../../images/user.png";
import map from "../../images/placeholder.png";
import email from "../../images/email.png";
import "./Contacts.css";

function Contacts() {
  const styles = {
    "--bg": `url(${contactsBg})`,
  };

  return (
    <section className="contacts" style={styles}>
      <div className="contacts__content" style={styles}>
        <h2 className="contacts__title">Контакты</h2>
        <div className="contacts__column">
          <div className="contacts__detail-wrapper">
            <img src={head} className="contacts__ico" />
            <div>
              <h3 className="contacts__detail-title">Генеральный директор</h3>
              <p className="contacts_detail-info">
                Каневский Анатолий Владимирович
              </p>
            </div>
          </div>
          <div className="contacts__detail-wrapper">
            <img src={map} className="contacts__ico" />
            <div>
              <div>
                <h3 className="contacts__detail-title">Адрес</h3>
                <a
                  href="https://yandex.ru/maps/-/CCUFAZUCCC"
                  className="contacts_detail-info contacts__link"
                  target="_blank"
                >
                  Москва ул. Каланчевская д. 20 стр. 7
                </a>
              </div>
            </div>
          </div>
          <div className="contacts__detail-wrapper">
            <img src={phone} className="contacts__ico" />
            <div>
              <h3 className="contacts__detail-title">Телефон</h3>
              <a
                href="tel: +74959848069"
                className="contacts__detail-info contacts__link"
              >
                (+7) 495-984-80-69
              </a>
            </div>
          </div>
          <div className="contacts__detail-wrapper">
            <img src={email} className="contacts__ico" />
            <div>
              <h3 className="contacts__detail-title">Email</h3>
              <a
                href="mailto: info@m-cti.ru"
                className="contacts_detail-info contacts__link"
              >
                info@m-cti.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
