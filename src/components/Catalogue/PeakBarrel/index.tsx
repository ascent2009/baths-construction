import React, { useContext } from "react";
import s from "../style.module.scss";
import { SVGCollection } from "../../Pages/EnglishVersionPage";
import HeaderMain from "../../Header/HeaderMain";
import Location from "../../Main/Location";
import Invitation from "../Invitation";
import OtherBaths from "../OtherBaths";
import LayoutOptions from "../LayoutOptions";
import ExtraOptions from "../ExtraOptions";
import BathType from "../BathType";
import Slider from "../Slider";
import Blog from "../../Main/Blog";
import Examples from "../../Main/Examples";
import { findPath } from "../../../app/findPath";
import { AppContext } from "../../../context";

const PeakBarrel: React.FC = () => {
  const { peakBarrelImages, layoutImages } = useContext(AppContext);
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
        <BathType
          title="Баня-бочка 3+ с козырьком"
          subtitle="Длина 3,5 или 4 м, диаметр 210-230 см, два помещения - парная и
          предбанник."
          className="main_peak"
          images={peakBarrelImages}
        />
        <LayoutOptions images={layoutImages} className="main_layout" />
        <Slider
          title="В базовую стоимость каждой нашей бани-бочки входит"
          className="main_slider"
        />
        <Invitation
          title="Изготовим и доставим баню вашей мечты, в короткие сроки и по фиксированной цене"
          link="Задать вопросы"
          className="main_invitation__block"
          buttonTitle="Оформить заказ"
          buttonClass="button_red__theme_order"
        />
        <ExtraOptions />
        <Examples className="main_examples__half_dark_theme" />
        <OtherBaths className="main_production__peak" />
        <Blog />
        <Location />
      </section>
    </>
  );
};

export default PeakBarrel;
