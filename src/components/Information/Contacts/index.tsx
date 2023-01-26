import React, { useContext } from "react";
import s from "./style.module.scss";
import { A } from "hookrouter";
import HeaderMain from "../../Header/HeaderMain";
// import Location from "../../Main/Location";
import Examples from "../../Main/Examples";
import { AppContext } from "../../../context";
import { SVGCollection } from "../../Pages/EnglishVersionPage";
import LocationPng from "../../../assets/location-wide.png";
import { findPath } from "../../../app/findPath";

const Contacts: React.FC = () => {
  return (
    <>
      <HeaderMain
        display={{ display: "none" }}
        className="header_main__menu_block_eng"
        background="header_main__eng"
        logo={SVGCollection.darkLogo}
        phoneIcon={SVGCollection.phoneIcon}
        arrowIcon={SVGCollection.arrowIcon}
      />
      <section className={s.main}>
        <div className={s.main_top__link}>Главная / {findPath()} /</div>
        <article className={s.main_contacts}>
          <h2 className={s.main_contacts__title}>Контактная информация</h2>
          <img src={LocationPng} alt="map" />
          <div className={s.main_contacts__text}>
            <div className={s.main_contacts__text_left}>
              <div className={s.main_contacts__text_left_phone}>
                <h6>Телефон:</h6>
                <A href="tel:+7 (812) 467-90-60">+7 (812) 467-90-60</A>
                <p>с 09:00 до 20:00 без выходных</p>
              </div>
              <div className={s.main_contacts__text_left_whatsapp}>
                <h6>WhatsApp:</h6>
                <p>+7-812-467-90-60</p>
                <A href="https://web.whatsapp.com/">Написать в Whatsapp</A>
              </div>
              <div className={s.main_contacts__text_left_email}>
                <h6>E-mail:</h6>
                <A href="mailto:info@novobani.ru">info@novobani.ru</A>
              </div>
              <div className={s.main_contacts__text_left_social}>
                <h6>Социальные сети:</h6>
                <A href="https://www.vk.ru/">Вконтакте</A>
                <A href="https://www.instagram.com/">Instagram</A>
              </div>
            </div>
            <div className={s.main_contacts__text_right}>
              <h6>Адрес производства и просмотр бань:</h6>
              <p>
                Ленинградская область, Приозерский район,{" "}
                <strong>поселок Сосново</strong>, ул. Академическая д.1
              </p>
              <A href="https://www.maps.yandex.ru/">
                Проложить маршрут в Яндекс.Навигаторе
              </A>
              <p>
                <span>Перед поездкой к нам</span>, просьба, предварительно
                звонить по телефону, производство закрытого типа, договоримся о
                времени посещения!
              </p>
            </div>
          </div>
        </article>
        <Examples className="main_examples__half_dark_theme" />
      </section>
    </>
  );
};

export default Contacts;
