import React from "react";
import s from "./style.module.scss";
import { SVGCollection } from "../Pages/EnglishVersionPage";
import HeaderMain from "../Header/HeaderMain";
import Location from "../Main/Location";
import Production from "../Main/Production";
import Blog from "../Main/Blog";
import Invitation from "./Invitation";
import { findPath } from "../../app/findPath";

const Catalogue: React.FC = () => {
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
        <Production tag="" />
        <Blog />
        <Invitation
          title="Изготовим и доставим баню вашей мечты, в короткие сроки и по
            фиксированной цене"
          link="Посетить производство"
          className="main_invitation__block_dark_theme"
          buttonTitle="Обсудить строительство"
          buttonClass="button_red__theme"
          mb="0"
        />
        <Location />
      </section>
    </>
  );
};

export default Catalogue;
