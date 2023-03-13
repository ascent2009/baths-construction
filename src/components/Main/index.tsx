import React from "react";
import s from "./style.module.scss";
import LogoSvg from "../../assets/logo.svg";
import CallSvg from "../../assets/call.svg";
import ArrowSvg from "../../assets/dropdown-arrow.svg";
import HeaderMain from "../Header/HeaderMain";
import Production from "./Production";
import About from "./About";
import Blog from "./Blog";
import Examples from "./Examples";
import Location from "./Location";

export const SVGCollection = {
  lightLogo: LogoSvg,
  phoneIcon: CallSvg,
  arrowIcon: ArrowSvg,
};

const Main: React.FC = () => {
  return (
    <>
      <HeaderMain
        title={"Производим мобильные бани на заказ"}
        subtitle={"Реальные цены от 142 200 руб. - под ключ, заходи и парься!"}
        text1={
          "Новинка! Принимаем заказы на бани-бочки из сибирского кедра и лиственницы, цены уточняйте"
        }
        text2={
          "Сроки изготовления до 24 дней. Проведем экскурсию на производстве в поселке Сосново в день обращения"
        }
        className={"header_main__menu_block"}
        background="header_main"
        logo={SVGCollection.lightLogo}
        phoneIcon={SVGCollection.phoneIcon}
        arrowIcon={SVGCollection.arrowIcon}
      />

      <section className={s.main}>
        <div className={s.main_top__link}>Главная /</div>
        <Production tag="" />
        <About className="main_about" />
        <Blog />
        <Examples className="main_examples" />
        <Location />
      </section>
    </>
  );
};

export default Main;
