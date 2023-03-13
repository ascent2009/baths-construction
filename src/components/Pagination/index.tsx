import React, { useState } from "react";
import s from "./style.module.scss";
import PaginationArrowSvg from "../../assets/arrow-pagination.svg";
import { A } from "hookrouter";
import Button from "../Button";
import { ListBlogImagesType, ListCarcassParamsImageType } from "../../types";

interface IPagination {
  images: ListBlogImagesType | ListCarcassParamsImageType;
  imagesClassName?: string;
  paginationClassName?: string;
  loadmoreClassName?: string;
}

const Pagination: React.FC<IPagination> = ({
  images,
  imagesClassName,
  paginationClassName,
  loadmoreClassName,
}) => {
  const repeatedImages = new Array(16).fill(images).flat();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [disabledButton, setDisabledButton] = useState(false);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItemsPage = repeatedImages.slice(firstItemIndex, lastItemIndex);

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
      const pageNumbers: number[] = [];
      for (let i = 1; i <= repeatedImages.length / itemsPerPage; i++) {
        pageNumbers.push(i);
      }
    } else {
      const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

      const prevPage = () => {
        if (currentPage !== 1) {
          setCurrentPage((prev) => prev - 1);
          setDisabledButton(false);
        } else {
          setDisabledButton(true);
        }
      };
      setDisabledButton(true);
    }
  };

  const loadMore = () => {
    if (currentPage <= pageNumbers.length) setItemsPerPage((prev) => prev + 3);
  };
  return (
    <>
      <ul className={s[`${imagesClassName}`]}>
        {currentItemsPage.map(
          ({ date, chapter, title, url, description, id }, index) => {
            return (
              <li className={s.main_blog__images_item} key={index}>
                <div className={s.main_blog__image}>
                  <img src={url} alt={title ? title : url} />
                </div>
                <div className={s.main_blog__images_item_text}>
                  <p>{date ? date : ""}</p>
                  <p>{chapter ? chapter : ""}</p>
                  <p>{description ? description : ""}</p>
                </div>

                <h3 className={s.main_blog__images_item_title}>{title}</h3>
              </li>
            );
          }
        )}
      </ul>
      <Button
        onClick={loadMore}
        className={loadmoreClassName}
        title="Загрузить ещё"
      />

      <div className={s[`${paginationClassName}`]}>
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
    </>
  );
};

export default Pagination;
