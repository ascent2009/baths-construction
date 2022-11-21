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

const CarcassBathsPage: React.FC = () => {
  const { carcassImages, carcassParamsImages } = useContext(AppContext);
  const sortedImages = carcassParamsImages.sort((a, b) => a.id - b.id);
  return (
    <>
      <HeaderMain
        title={"Производим мобильные каркасные бани на заказ"}
        className={"header_main__menu_block"}
        background="header_main"
        logo={SVGCollection.lightLogo}
        phoneIcon={SVGCollection.phoneIcon}
        arrowIcon={SVGCollection.arrowIcon}
      />
      <section className={s.main}>
        <Introduction
          images={carcassImages}
          title="каркассной бани"
          className="main_list__text_carcass"
        />
        <article className={s.main_params}>
          <h2 className={s.main_params__title}>
            Наши каркасные бани держат тепло до двух суток
          </h2>
          <p className={s.main_params__title_subtitle}>
            Утепление 10 см в стенах, полу и крыше!
          </p>
          <ul className={s.main_params__image_block}>
            {sortedImages.map(({ id, title, url, description }) => {
              return (
                <li key={id}>
                  <div className={s.main_params__image}>
                    <img src={url} alt={title} />
                  </div>
                  <h4 className={s.main_params__image_title}>{title}</h4>
                  <p className={s.main_params__image_description}>
                    {description}
                  </p>
                </li>
              );
            })}
          </ul>
        </article>
        <div className={s.main_top__link}>Главная /</div>
        <Production tag="carcass" />
        <About className="main_about__barrel" />
        <Blog />
        <Examples className="main_examples__half_dark_theme" />
        <Location />
      </section>
    </>
  );
};

export default CarcassBathsPage;
