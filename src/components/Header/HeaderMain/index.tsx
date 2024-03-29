import React, { useState, useCallback } from "react";
import s from "../style.module.scss";
import Dropdown from "../../Dropdown/index";
import HeaderChangedContent from "../HeaderChangedContent";
import { A } from "hookrouter";
import FireSvg from "../../../assets/fire.svg";
import Menu from "../../Menu/index";
import SandwichSvg from "../../../assets/sandwich-mobile.svg";
import EmailWhiteSvg from "../../../assets/email-white.svg";
import WhatsappWhiteSvg from "../../../assets/whatsapp-white.svg";
import CloseWhiteSvg from "../../../assets/close-white.svg";

export interface IHeaderMain {
  display?: object;
  title?: string;
  subtitle?: string;
  className?: string;
  background?: string;
  logo?: string;
  phoneIcon?: string;
  arrowIcon?: string;
  text1?: string;
  text2?: string;
}

const HeaderMain: React.FC<IHeaderMain> = ({
  title,
  subtitle,
  text1,
  text2,
  display,
  className,
  background,
  logo,
  phoneIcon,
  arrowIcon,
}) => {
  const [dropdown, setDropdown] = useState<boolean>(!false);
  const [arrowDirection, setArrowDirection] = useState<{}>({});
  const [aboutDropdown, setAboutDropdown] = useState<boolean>(!false);
  const [catalogueDropdown, setCatalogueDropdown] = useState<boolean>(!false);
  const [mobileDropdown, setMobileDropdown] = useState<boolean>(!false);
  const aStyle = {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#333333",
  };

  const showAboutDropdown = () => {
    setAboutDropdown(!aboutDropdown);
    setArrowDirection({ transform: "rotate(180deg)" });
    setCatalogueDropdown(true);
  };

  const showCatalogueDropdown = () => {
    setCatalogueDropdown(!catalogueDropdown);
    setArrowDirection({ transform: "rotate(180deg)" });
    setAboutDropdown(true);
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
                      style={{ marginLeft: "37px" }}
                      href="/catalogue"
                      className={s.header_main__dropdown_mobile_submenu_title}
                    >
                      <h4>Каталог</h4>
                    </A>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="/catalogue/classic_barrel">
                        Классические бани-бочки
                      </A>
                    </li>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="#">Квадро бани-бочки</A>
                    </li>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="#">Овальные бани-бочки</A>
                    </li>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="/catalogue/carcass_baths/carcass_lira">
                        Каркассные бани серия Лира
                      </A>
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
                      <A href="/information/about">О нас</A>
                    </li>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="/information/vacancies">Вакансии</A>
                    </li>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="/information/faq">Вопросы и ответы</A>
                    </li>
                    <li className={s.header_main__dropdown_mobile_submenu_item}>
                      <A href="/information/contacts">Контакты</A>
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
            <A className={s.header_main__menu_item} href="/">
              Главная
            </A>
            <button type="button" onClick={showCatalogueDropdown}>
              Каталог
              <img
                src={arrowIcon}
                alt="arrow"
                style={!catalogueDropdown ? arrowDirection : {}}
              />
            </button>
            <button type="button" onClick={showAboutDropdown}>
              Информация
              <img
                src={arrowIcon}
                alt="arrow"
                style={!aboutDropdown ? arrowDirection : {}}
              />
            </button>
            <A className={s.header_main__menu_item} href="/blog">
              Наш блог
              <img src={FireSvg} alt="fire" />
            </A>
            {!aboutDropdown ? (
              <Dropdown className={s.header_main__menu_dropdown}>
                <A id="dropdown" href={"/information/about"} style={aStyle}>
                  О нас
                </A>
                <A id="dropdown" href="/information/faq" style={aStyle}>
                  Вопросы и ответы
                </A>
                <A id="dropdown" href="/information/vacancies" style={aStyle}>
                  Вакансии
                </A>
                <A id="dropdown" href={"/information/contacts"} style={aStyle}>
                  Контакты
                </A>
              </Dropdown>
            ) : (
              ""
            )}
            {!catalogueDropdown ? (
              <Dropdown className={s.header_main__menu_dropdown_catalogue}>
                <A
                  id="dropdown"
                  href={"/catalogue/classic_barrel"}
                  style={aStyle}
                >
                  Классические бани-бочки
                </A>
                <A id="dropdown" href="#" style={aStyle}>
                  Квадро бани-бочки
                </A>
                <A id="dropdown" href="#" style={aStyle}>
                  Овальные бани-бочки
                </A>
                <A
                  id="dropdown"
                  href={"/catalogue/carcass_baths/carcass_lira"}
                  style={aStyle}
                >
                  Каркасные бани серия Лира
                </A>
                <A id="dropdown" href={"#"} style={aStyle}>
                  Каркасные бани серия Флора
                </A>
              </Dropdown>
            ) : (
              ""
            )}
          </Menu>
          <div className={s.header_main__phone}>
            <img src={phoneIcon} alt="call" />
            <A href={"tel: +7(812)467-90-60"} target="_blank">
              +7 (812) 467-90-60
            </A>
          </div>
        </div>
        <HeaderChangedContent
          display={display}
          title={title}
          subtitle={subtitle}
          text1={text1}
          text2={text2}
        />
      </section>
    </header>
  );
};

export default HeaderMain;
