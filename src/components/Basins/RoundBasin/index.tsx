import React, { useContext } from "react";
import s from "./style.module.scss";
import HeaderMain from "../../Header/HeaderMain";
import BathType from "../../Catalogue/BathType";
import OtherBaths from "../../Catalogue/OtherBaths";
import Location from "../../Main/Location";
import Blog from "../../Main/Blog";
import Examples from "../../Main/Examples";
import Invitation from "../../Catalogue/Invitation";
import LayoutOptions from "../../Catalogue/LayoutOptions";
import ExtraOptions from "../../Catalogue/ExtraOptions";
import { A } from "hookrouter";
import { AppContext } from "../../../context";
import { SVGCollection } from "../../Pages/EnglishVersionPage";
import { findPath } from "../../../app/findPath";

const RoundBasin = () => {
  const { roundBasinImages, layoutRoundImages, roundPriceImages } =
    useContext(AppContext);
  const reversedImages = roundBasinImages.reverse();
  const sortedImages = roundPriceImages.sort((a, b) => a.id - b.id);

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
          title="Купель круглая, вместимость 1-2 человека"
          subtitle="Диаметр 100 и 120 см, высота купели 110 см. Сделано из лиственницы сорта АB."
          images={reversedImages}
          className="main_round"
        />
        <LayoutOptions
          images={layoutRoundImages}
          className="main_layout__round"
        />
        <article className={s.main_round__price}>
          <h2 className={s.main_round__price_title}>
            В базовую стоимость каждой нашей купели входит
          </h2>
          <ul className={s.main_round__price_images}>
            {sortedImages.map(({ id, url, description }) => (
              <li key={id} className={s.main_round__price_images_item}>
                <img src={url} alt={url} />
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </article>
        <Invitation
          title="Изготовим и доставим купель вашей мечты, в короткие сроки и по фиксированной цене"
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

export default RoundBasin;
