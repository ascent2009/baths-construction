import React, { useContext } from "react";
import s from "./style.module.scss";
import { A } from "hookrouter";
import HeaderMain from "../../Header/HeaderMain";
import Location from "../../Main/Location";
import Examples from "../../Main/Examples";
import { AppContext } from "../../../context";
import { SVGCollection } from "../../Pages/EnglishVersionPage";
import { findPath } from "../../../app/findPath";

const Questions: React.FC = () => {
  const { faqImages } = useContext(AppContext);
  const sortedImages = faqImages.sort((a, b) => a.id - b.id);
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
        <article className={s.main_faq}>
          <h2 className={s.main_faq__title}>Частые вопросы</h2>
          <div className={s.main_faq__link}>
            <A href="">Как давно существует ваша компания?</A>
            <A href="">Где можно посмотреть ваши выполненные проекты?</A>
            <A href="">Как давно существует ваша компания?</A>
            <p>С 2007 года наша компания занимается изготовлением и продажей пиломатериалов. Являемся одними из первых и самых крупных производителей и <span>оптовым поставщиком</span> пиломатериалов на территории Санкт-Петербурга.</p>
            <ul className={s.main_faq__link_images_list}>
              {sortedImages.map(({ id, url }) => (
                <li key={id} className={s.main_faq___link_images_list_item}>
                  <img src={url} alt={url} />
                </li>
              ))}
            </ul>
            <A href="">Где можно посмотреть ваши выполненные проекты?</A>
          </div>
        </article>
        <Examples className="main_examples__half_dark_theme" />
        <Location />
      </section>
    </>
  );
};

export default Questions;
