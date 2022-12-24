import React, { useState, useContext } from "react";
import s from "./style.module.scss";
import HeaderMain from "../Header/HeaderMain";
import Location from "../Main/Location";
// import Blog from "../Main/Blog";
import Invitation from "../Catalogue/Invitation";
import Menu from "../Menu";
import Button from "../Button";
import { A } from "hookrouter";
import { AppContext } from "../../context";
import { SVGCollection } from "../Pages/EnglishVersionPage";
import PaginationArrowSvg from "../../assets/arrow-pagination.svg";
import { findPath } from "../../app/findPath";

const BlogPage: React.FC = () => {
  const { blogImages } = useContext(AppContext);
  const repeatedImages = new Array(16).fill(blogImages).flat();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [disabledButton, setDisabledButton] = useState(false);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItemsPage = repeatedImages.slice(firstItemIndex, lastItemIndex);
  // console.log("currentItemsPage: ", currentItemsPage);

  const pageNumbers: number[] = [];
  for (let i = 1; i <= repeatedImages.length / itemsPerPage; i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };
  const nextPage = () => {
    if (currentPage !== pageNumbers.length) {
      setCurrentPage((prev) => prev + 1);
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const loadMore = () => {
    if (currentPage <= pageNumbers.length) setItemsPerPage((prev) => prev + 3);
  };

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

        {/* <Blog /> */}
        <article className={s.main_blog}>
          <div className={s.main_blog__title_block}>
            <h2 className={s.main_blog__title}>Наш блог</h2>
            {/* <A href="/blog">Смотреть все записи</A> */}
          </div>
          <Menu className={s.main_blog__menu}>
            {/* <h4>Быстрая навигация:</h4> */}
            <A href="">Все разделы</A>
            <A href="">Наши будни</A>
            <A href="">Полезные статьи</A>
            <A href="">Отзывы клиентов</A>
            <A href="">Наши будни</A>
            <A href="">Полезные статьи</A>
            <A href="">Отзывы клиентов</A>
            <A href="">О наболевшем</A>
            <A href="">Наши новости</A>
          </Menu>
          <ul className={s.main_blog__images}>
            {currentItemsPage.map(({ date, chapter, title, url }) => {
              return (
                <li className={s.main_blog__images_item} key={title}>
                  <div className={s.main_blog__image}>
                    <img src={url} alt={title} />
                  </div>
                  <div className={s.main_blog__images_item_text}>
                    <p>{date}</p>
                    <p>{chapter}</p>
                  </div>

                  <h3 className={s.main_blog__images_item_title}>{title}</h3>
                </li>
              );
            })}
          </ul>
          <Button
            onClick={loadMore}
            className="main_blog__pagination_button_loadmore"
            title="Загрузить ещё"
          />

          <div className={s.main_blog__pagination}>
            <Button
              onClick={prevPage}
              className={
                disabledButton
                  ? "main_blog__pagination_button_disabled"
                  : "main_blog__pagination_button"
              }
            >
              <img src={PaginationArrowSvg} alt="arrow-prev" />
            </Button>
            <ul className={s.main_blog__pagination_list}>
              {pageNumbers.map((number) => (
                <li
                  key={number}
                  onClick={() => paginate(number)}
                  className={
                    currentPage === number
                      ? s.main_blog__pagination_list_item_active
                      : s.main_blog__pagination_list_item
                  }
                >
                  <A href="">{number}</A>
                </li>
              ))}
            </ul>
            <Button
              onClick={nextPage}
              className={
                disabledButton
                  ? "main_blog__pagination_button_disabled"
                  : "main_blog__pagination_button"
              }
            >
              <img src={PaginationArrowSvg} alt="arrow-next" />
            </Button>
          </div>
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
