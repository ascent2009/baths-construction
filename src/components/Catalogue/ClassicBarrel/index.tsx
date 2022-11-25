import React, { useContext } from "react";
import s from "../style.module.scss";
import { SVGCollection } from "../../Pages/EnglishVersionPage";
import HeaderMain from "../../Header/HeaderMain";
import Location from "../../Main/Location";
// import Production from "../../Main/Production";
import Blog from "../../Main/Blog";
import { A } from "hookrouter";
import { findPath } from "../../../app/findPath";
import { randomImages } from "../../../app/randomImages";
import { AppContext } from "../../../context";
// import { ListImageType } from "../../../types";

const ClassicBarrel: React.FC = () => {
  const { prodImages, classicBarrelImages } = useContext(AppContext);
  const repeatedImages = new Array(3).fill(classicBarrelImages).flat();

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
        <article className={s.main_classic}>
          <h2 className={s.main_production__title}>Классические бани-бочки</h2>
          <ul className={s.main_production__image_block}>
            {repeatedImages.map(({ id, title, url, description, price }) => {
              return (
                <li key={title}>
                  <div className={s.main_production__image}>
                    <img src={url} alt={title} />
                  </div>
                  <h4 className={s.main_production__image_title}>{title}</h4>
                  <p className={s.main_production__image_description}>
                    {description}
                  </p>
                  <h4 className={s.main_production__image_price}>
                    от {price} руб. <span>/ Планировки и цены</span>
                  </h4>{" "}
                </li>
              );
            })}
          </ul>
        </article>
        <article className={s.main_production}>
          <h2 className={s.main_production__title}>
            Прочие бани нашего производства
          </h2>
          <ul className={s.main_production__image_block}>
            {
              new Set(
                randomImages(prodImages).map(
                  ({ id, title, url, description, price }) => {
                    return (
                      <li key={title}>
                        <div className={s.main_production__image}>
                          <img src={url} alt={title} />
                        </div>
                        <h4 className={s.main_production__image_title}>
                          {title}
                        </h4>
                        <p className={s.main_production__image_description}>
                          {description}
                        </p>
                        <h4 className={s.main_production__image_price}>
                          от {price} руб.
                        </h4>{" "}
                      </li>
                    );
                  }
                )
              )
            }
          </ul>
        </article>
        <div
          className={s.main_invitation__block}
          style={{ marginBottom: "80px" }}
        >
          <h4 className={s.main_invitation__title}>
            Изготовим и доставим баню вашей мечты, в короткие сроки и по
            фиксированной цене
          </h4>
          <div className={s.main_invitation__button_block}>
            <A href={"tel: +7(812)467-90-60"} target="_blank">
              Обсудить строительство
            </A>
            <A href="/production">Посетить производство</A>
          </div>
        </div>
        <Blog />
        <Location />
      </section>
    </>
  );
};

export default ClassicBarrel;
