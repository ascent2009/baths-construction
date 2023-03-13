import React, { useContext } from "react";
import s from "./style.module.scss";
import HeaderMain from "../Header/HeaderMain";
import Location from "../Main/Location";
import Pagination from "../Pagination";
import Invitation from "../Catalogue/Invitation";
import Menu from "../Menu";
import { A } from "hookrouter";
import { AppContext } from "../../context";
import { SVGCollection } from "../Pages/EnglishVersionPage";
import { findPath } from "../../app/findPath";

const BlogPage: React.FC = () => {
  const { blogImages } = useContext(AppContext);

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
        <article className={s.main_blog}>
          <div className={s.main_blog__title_block}>
            <h2 className={s.main_blog__title}>Наш блог</h2>
          </div>
          <Menu className={s.main_blog__menu}>
            <A href="/blog">Все разделы</A>
            <A href="/blog/knowhow">Наши будни</A>
            <A href="/blog/knowhow">Полезные статьи</A>
            <A href="">Отзывы клиентов</A>
            <A href="/blog/knowhow">Наши будни</A>
            <A href="/blog/knowhow">Полезные статьи</A>
            <A href="">Отзывы клиентов</A>
            <A href="">О наболевшем</A>
            <A href="">Наши новости</A>
          </Menu>
          <Pagination
            images={blogImages}
            imagesClassName="main_blog__images"
            paginationClassName="main_blog__pagination"
            loadmoreClassName="main_blog__pagination_loadmore"
          />
        </article>
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

export default BlogPage;
