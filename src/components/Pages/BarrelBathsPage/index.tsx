import React, { useContext } from "react";
import s from "./style.module.scss";
import HeaderMain from "../../Header/HeaderMain";
import { SVGCollection } from "../../Main";
import About from "../../Main/About";
import Blog from "../../Main/Blog";
import Examples from "../../Main/Examples";
import Location from "../../Main/Location";
import Production from "../../Main/Production";
import Introduction from "../../Main/Introduction";
import { AppContext } from "../../../context";
import { findPath } from "../../../app/findPath";

const BarrelBathsPage: React.FC = () => {
  const { barrelImages } = useContext(AppContext);

  return (
    <>
      <HeaderMain
        title={"Бани-бочки из Вологодского леса от производителя"}
        className={"header_main__menu_block"}
        background="header_main__barrel"
        logo={SVGCollection.lightLogo}
        phoneIcon={SVGCollection.phoneIcon}
        arrowIcon={SVGCollection.arrowIcon}
      />
      <section className={s.main}>
        <Introduction
          images={barrelImages}
          title="бани-бочки"
          className="main_list__text"
        />
        <div className={s.main_top__link}>Главная / {findPath()} /</div>
        <Production tag="barrel" />
        <About className="main_about__barrel" />
        <Blog />
        <Examples className="main_examples__half_dark_theme" />
        <Location />
      </section>
    </>
  );
};

export default BarrelBathsPage;
