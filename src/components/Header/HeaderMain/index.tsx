import React, { useState, useCallback } from "react";
import s from "../style.module.scss";
import Dropdown from "../../Dropdown/index";
import HeaderChangedContent from "../HeaderChangedContent";
import { A } from "hookrouter";
// import LogoSvg from "../../../assets/logo.svg";
import FireSvg from "../../../assets/fire.svg";
import Menu from "../../Menu/index";
import ArrowSvg from "../../../assets/dropdown-arrow.svg";
import SandwichSvg from "../../../assets/sandwich-mobile.svg";
import EmailWhiteSvg from "../../../assets/email-white.svg";
import WhatsappWhiteSvg from "../../../assets/whatsapp-white.svg";
import CloseWhiteSvg from "../../../assets/close-white.svg";

export interface IHeaderMain {
  style?: object;
  className?: string;
  background?: string;
  logo?: string;
  phoneIcon?: string;
  arrowIcon?: string;
}

const HeaderMain: React.FC<IHeaderMain> = ({
  style,
  className,
  background,
  logo,
  phoneIcon,
  arrowIcon,
}) => {
  const [dropdown, setDropdown] = useState<boolean>(!false);
  const [arrowDirection, setArrowDirection] = useState<{}>({});
  const [aboutDropdown, setAboutDropdown] = useState<boolean>(!false);
  const [mobileDropdown, setMobileDropdown] = useState<boolean>(!false);
  const [email] = useState<string>("info@novobani.ru");

  const showDropdown = () => {
    setDropdown(!dropdown);
    console.log("dropdown: ", dropdown);
  };

  const showAboutDropdown = () => {
    setAboutDropdown(!aboutDropdown);
    setArrowDirection({ transform: "rotate(180deg)" });
  };

  const showMobileDropdown = () => {
    setMobileDropdown(!mobileDropdown);
    setArrowDirection({ transform: "rotate(180deg)" });
    console.log(arrowDirection);
  };

  const handleEscape = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "Escape") {
        setDropdown(dropdown);
        setMobileDropdown(!mobileDropdown);
        console.log("dropdown: ", dropdown);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // const menuBlock = "header_main__menu_block";

  return (
    <header className={s.header}>
      <section className={s[`${background}`]}>
        <div className={s[`${className}`]}>
          <A href="/">
            <img src={logo} alt="logo" />
          </A>
          <button
            type="button"
            className={s.header_main__sandwich_mobile}
            onClick={showMobileDropdown}
            onKeyDown={(event) => handleEscape(event)}
          >
            <img
              src={SandwichSvg}
              alt="sandwich"
              style={!mobileDropdown ? arrowDirection : {}}
            />
          </button>
          {!mobileDropdown ? (
            <Dropdown className={s.header_main__dropdown_mobile}>
              <button
                type="button"
                className={s.header_main__dropdown_mobile_close}
                onClick={showMobileDropdown}
              >
                <img src={CloseWhiteSvg} alt="close" />
              </button>
              <nav className={s.header_main__dropdown_mobile_menu}>
                <ul className={s.header_main__dropdown_mobile_submenu}>
                  <A
                    href="/"
                    className={s.header_main__dropdown_mobile_submenu_title}
                  >
                    <h4>Главная</h4>
                  </A>
                </ul>
                <ul className={s.header_main__dropdown_mobile_submenu}>
                  <ul className={s.header_main__dropdown_mobile_subsubmenu}>
                    <A
                      href="/catalogue"
                      className={s.header_main__dropdown_mobile_submenu_title}
                    >
                      <h4>Каталог</h4>
                    </A>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="#">Классические бани-бочки</A>
                    </li>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="#">Квадро бани-бочки</A>
                    </li>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="#">Овальные бани-бочки</A>
                    </li>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="#">Каркассные бани серия Лира</A>
                    </li>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="#">Каркассные бани серия Флора</A>
                    </li>
                  </ul>
                </ul>
                <ul className={s.header_main__dropdown_mobile_submenu}>
                  <ul className={s.header_main__dropdown_mobile_subsubmenu}>
                    <A
                      href="/information"
                      className={s.header_main__dropdown_mobile_submenu_title}
                    >
                      <h4>Информация</h4>
                    </A>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="/about">О нас</A>
                    </li>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="/vacancies">Вакансии</A>
                    </li>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="/faq">Вопросы и ответы</A>
                    </li>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="/contacts">Контакты</A>
                    </li>
                  </ul>
                </ul>
                <ul className={s.header_main__dropdown_mobile_submenu}>
                  <A
                    href="/blog"
                    className={s.header_main__dropdown_mobile_submenu_title}
                  >
                    <h4>Наш блог</h4>
                  </A>
                </ul>
              </nav>
              <div className={s.header_main__dropdown_mobile_contacts}>
                <div className={s.header_main__dropdown_mobile_contacts_item}>
                  <img src={phoneIcon} alt="call" />
                  <A href={"tel: +7(812)467-90-60"} target="_blank">
                    <b style={{ textDecoration: "none" }}>+7 (812) 467-90-60</b>
                  </A>
                </div>
                <div className={s.header_main__dropdown_mobile_contacts_item}>
                  <img src={EmailWhiteSvg} alt="email" />
                  <A href={"mailto:info@novobani.ru"} target="_blank">
                    info@novobani.ru
                  </A>
                </div>
                <div className={s.header_main__dropdown_mobile_contacts_item}>
                  <img src={WhatsappWhiteSvg} alt="whatsapp" />
                  <A href={"https://web.whatsapp.com/"} target="_blank">
                    Написать в Whatsapp
                  </A>
                </div>
              </div>
            </Dropdown>
          ) : (
            ""
          )}

          <Menu className={s.header_main__menu}>
            <A href="#main">Главная</A>
            <A href="#catalogue">
              Каталог
              <img src={arrowIcon} alt="arrow" />
            </A>
            <button type="button" onClick={showAboutDropdown}>
              Информация
              <img
                src={arrowIcon}
                alt="arrow"
                style={!aboutDropdown ? arrowDirection : {}}
              />
            </button>
            <A href="/blog">
              Наш блог
              <img src={FireSvg} alt="fire" />
            </A>
          </Menu>
          <div className={s.header_main__phone}>
            <img src={phoneIcon} alt="call" />
            <A href={"tel: +7(812)467-90-60"} target="_blank">
              +7 (812) 467-90-60
            </A>
          </div>
        </div>
        <HeaderChangedContent style={style} />
        {/* <div className={s.header_main__title_block}>
          <h1>Производим мобильные бани на заказ</h1>
          <h3>
            Реальные цены <b>от 142 200 руб.</b> - под ключ, заходи и парься!
          </h3>
        </div>
        <div className={s.header_main__adv_block}>
          <p>
            <b>Новинка!</b> Принимаем заказы на бани-бочки из сибирского кедра и
            лиственницы, цены уточняйте
          </p>
          <p>
            Сроки изготовления до 24 дней. Проведем экскурсию на производстве в
            поселке Сосново в день обращения
          </p>
          <p>Приозерский район, работаем без выходных!</p>
        </div>
        <div className={s.header_main__button_block}>
          <A href={"tel: +7(812)467-90-60"} target="_blank">
            Получить консультацию
          </A>
          <A href="/production">Посетить производство</A>
        </div> */}
      </section>
      {!aboutDropdown ? (
        <Dropdown className={s.header_main__menu_dropdown}>
          <A href={"#about"}>О нас</A>
          <A href="/faq">Вопросы и ответы</A>
          <A href="/vacancies">Вакансии</A>
          <A href={"/contacts"}>Контакты</A>
        </Dropdown>
      ) : (
        ""
      )}
    </header>
  );
};

export default HeaderMain;
