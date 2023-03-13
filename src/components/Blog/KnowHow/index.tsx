import React, { useContext } from "react";
import s from "./style.module.scss";
import HeaderMain from "../../Header/HeaderMain";
import Location from "../../Main/Location";
import Blog from "../../Main/Blog";
import Invitation from "../../Catalogue/Invitation";
import Menu from "../../Menu";
import { A } from "hookrouter";
import { AppContext } from "../../../context";
import { SVGCollection } from "../../Pages/EnglishVersionPage";
import { findPath } from "../../../app/findPath";

const KnowHow: React.FC = () => {
  const { blogKnowHowImages } = useContext(AppContext);
  const sortedImages = blogKnowHowImages.sort((a, b) =>
    a.date > b.date ? 1 : -1
  );

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
        <article className={s.main_knowhow}>
          <ul className={s.main_knowhow__images}>
            {sortedImages.map(
              ({ title, date, link, url, description }, index) => (
                <li key={index} className={s.main_knowhow__images_item}>
                  <A href="">
                    <h2 className={s.main_knowhow__images_item_title}>
                      {title}
                    </h2>
                    {date ? (
                      <div className={s.main_knowhow__images_item_date_link}>
                        {date} / <span>{link}</span>
                      </div>
                    ) : (
                      ""
                    )}
                    {description ? (
                      <div className={s.main_knowhow__images_item_text}>
                        {description.split(".").map((d) => (
                          <p style={{ margin: "0" }}>{d}</p>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                    {url ? <img src={url} alt={title} /> : ""}
                  </A>
                </li>
              )
            )}
          </ul>

          <Menu className={s.main_knowhow__menu}>
            <A href="/blog">Наш Блог</A>
            <A href="/blog/knowhow">Наши будни</A>
            <A href="/blog/knowhow">Полезные статьи</A>
            <A href="">Отзывы клиентов</A>
            <A href="">О наболевшем</A>
            <A href="">Наши новости</A>
          </Menu>
        </article>
        <div className={s.main_catalogue}>
          <p>каталог</p>
          <A href="/catalogue">Смотреть полный каталог наших бань и цены</A>
        </div>
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

export default KnowHow;
