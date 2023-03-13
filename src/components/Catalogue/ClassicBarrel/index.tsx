import React, { useContext } from "react";
import s from "../style.module.scss";
import { SVGCollection } from "../../Pages/EnglishVersionPage";
import HeaderMain from "../../Header/HeaderMain";
import Location from "../../Main/Location";
import Invitation from "../Invitation";
import OtherBaths from "../OtherBaths";
import Blog from "../../Main/Blog";
import { A } from "hookrouter";
import { findPath } from "../../../app/findPath";
import { AppContext } from "../../../context";

const ClassicBarrel: React.FC = () => {
  const { classicBarrelImages } = useContext(AppContext);
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
            {repeatedImages.map(({ id, title, url, description, price }, index) => {
              return (
                <li key={index}>
                  <div className={s.main_production__image}>
                    <img src={url} alt={title} />
                  </div>
                  <h4 className={s.main_production__image_title}>{title}</h4>
                  <p className={s.main_production__image_description}>
                    {description}
                  </p>
                  <h4 className={s.main_production__image_price}>
                    от {price} руб.{" "}
                    <span>
                      /{" "}
                      <A href={`/catalogue/classic_barrel/${id}`}>
                        Планировки и цены
                      </A>
                    </span>
                  </h4>{" "}
                </li>
              );
            })}
          </ul>
        </article>
        <OtherBaths className="main_production" />
        <Invitation
          title="Изготовим и доставим баню вашей мечты, в короткие сроки и по
            фиксированной цене"
          link="Посетить производство"
          className="main_invitation__block_dark_theme"
          buttonTitle="Обсудить строительство"
          buttonClass="button_red__theme"
        />
        <Blog />
        <Location />
      </section>
    </>
  );
};

export default ClassicBarrel;
