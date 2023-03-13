import React, { useContext } from "react";
import s from "../style.module.scss";
import HeaderMain from "../../Header/HeaderMain";
import Location from "../../Main/Location";
import Invitation from "../Invitation";
import OtherBaths from "../OtherBaths";
import BathType from "../BathType";
import LayoutOptions from "../LayoutOptions";
import ExtraOptions from "../ExtraOptions";
import Slider from "../Slider";
import Blog from "../../Main/Blog";
import Examples from "../../Main/Examples";
import { A } from "hookrouter";
import { findPath } from "../../../app/findPath";
import { AppContext } from "../../../context";
import { SVGCollection } from "../../Pages/EnglishVersionPage";

const CarcassLira: React.FC = () => {
  const { liraCarcassImages, sections, layoutImages } = useContext(AppContext);

  const sortedImages = sections.sort((a, b) => a.id - b.id);

  function splitText(str: string) {
    let splittedString = str.split(".");
    let length = splittedString.length;
    let newArr, slicedOne, slicedTwo, slicedThree;
    if (length === 8) {
      slicedOne = splittedString.slice(0, 2).join(".");
      slicedTwo = splittedString
        .slice(2)
        .join(".")
        .replace("Tikkurila.", "Tikkurila");
      newArr = [slicedOne, slicedTwo];
    } else if (length === 5) {
      slicedOne = splittedString.slice(0, 1).join(".");
      slicedTwo = splittedString
        .slice(1)
        .join(".")
        .replace("доп. опции.", "доп. опции");
      newArr = [slicedOne, slicedTwo];
    } else {
      slicedOne = splittedString.slice(0, 2).join(".");
      slicedTwo = splittedString.slice(2, length - 2).join(".");
      slicedThree = splittedString
        .slice(-2)
        .join(".")
        .replace("1900 мм.", "1900 мм");
      newArr = [slicedOne, slicedTwo, slicedThree];
    }

    return newArr;
  }

  function insertLink(str: string) {
    let replaced = (
      <A
        style={{
          textDecoration: "underline",
          color: "#4F4F4F",
          fontSize: "16px",
          lineHeight: "22px",
        }}
        href="#"
      >
        доп. опции
      </A>
    );
    return str.includes("доп. опции")
      ? str.replace("доп. опции.", `${replaced}`)
      : str;
  }

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
          title="Мобильная баня Лира 4+ стекло"
          subtitle="Длина 4 или 4,5 м, ширина 2,3 м, 2 помещения - предбанник и парная + стеклянная дверь и доп. окно в парной."
          images={liraCarcassImages}
          className="main_lira"
        />
        <LayoutOptions images={layoutImages} className="main_layout" />
        <Slider
          title="В базовую стоимость каждой бани Лира входит"
          className="main_slider__lira"
        />
        <article className={s.main_technology}>
          <h2 className={s.main_technology__title}>
            Бани Лира - утепленные и держат тепло до двух суток!
          </h2>
          <ul className={s.main_technology__list}>
            {sortedImages.map(({ id, title, url, description }, index) => {
              return (
                <li className={s.main_technology__list_item} key={index}>
                  <img src={url} alt={title} />
                  <div className={s.main_technology__list_item_text_block}>
                    <h4 className={s.main_technology__list_item_title}>
                      {title}
                    </h4>
                    <div className={s.main_technology__list_item_description}>
                      {splitText(description).map((d) => {
                        return (
                          <p className={s.main_technology__list_item_text}>
                            {d}.
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </article>
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

export default CarcassLira;
