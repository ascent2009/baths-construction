import React, { useState, useCallback } from "react";
import s from "./style.module.scss";
import { A } from "hookrouter";
import EmailSvg from "../../assets/email.svg";
import WhatsappSvg from "../../assets/whatsapp.svg";
import EnvelopeSvg from "../../assets/envelope.svg";
import Dropdown from "../Dropdown/index";

const Header: React.FC = () => {
  const [dropdown, setDropdown] = useState<boolean>(!false);
  const [mobileDropdown, setMobileDropdown] = useState<boolean>(!false);
  const [email] = useState<string>("info@novobani.ru");

  const showDropdown = () => {
    setDropdown(!dropdown);
    console.log("dropdown: ", dropdown);
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
      <section className={s.header_top}>
        <div className={s.header_top__left}>
          {window.location.pathname !== "/english" ? (
            <A href={"/english"}>For English speakers</A>
          ) : (
            <A href={"/"}>К русской версии</A>
          )}
        </div>
        <div className={s.header_top__right}>
          <div className={s.header_top__right_email}>
            <img src={EmailSvg} alt="email" />
            <button
              type="button"
              onClick={showDropdown}
              onKeyDown={(event) => handleEscape(event)}
            >
              info@novobani.ru
            </button>
          </div>
          <div className={s.header_top__right_whatsapp}>
            <img src={WhatsappSvg} alt="whatsapp" />
            <A href={"https://web.whatsapp.com/"} target="_blank">
              Написать в Whatsapp
            </A>
          </div>
        </div>
      </section>
      {!dropdown ? (
        <Dropdown className={s.header_top__dropdown}>
          <div className={s.header_top__dropdown_email}>
            <img src={EnvelopeSvg} alt="envelope" />
            <A href={"mailto:info@novobani.ru"} target="_blank">
              info@novobani.ru
            </A>
          </div>
          <div className={s.header_top__dropdown_email}>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(email);
                alert(`Электронная почта ${email} скопирована в буфер обмена`);
              }}
            >
              Copy
            </button>
          </div>

          <div className={s.header_top__dropdown_email}>
            <A href="mailto:" target="_blank">
              New email
            </A>
          </div>
        </Dropdown>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
