import React, { useContext } from "react";
import s from "./style.module.scss";
import { A } from "hookrouter";
import HeaderMain from "../Header/HeaderMain";
import Location from "../Main/Location";
import Blog from "../Main/Blog";
import Invitation from "../Catalogue/Invitation";
import { AppContext } from "../../context";
import { SVGCollection } from "../Pages/EnglishVersionPage";
import { findPath } from "../../app/findPath";

const Information: React.FC = () => {
  const { infoImages } = useContext(AppContext);
  const sortedImages = infoImages.sort((a, b) => a.id - b.id);

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
        <h2 className={s.main_title}>Информация</h2>
        <ul className={s.main_images__list}>
          {sortedImages.map(({ id, title, url, link }) => (
            <li key={id} className={s.main_images__list_item}>
              <A href={link}>
                <img src={url} alt={title} />
                <h2 className={s.main_images__list_item_title}>{title}</h2>
              </A>
            </li>
          ))}
        </ul>

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

export default Information;
