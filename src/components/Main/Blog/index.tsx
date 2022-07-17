import React from "react";
import s from "../style.module.scss";
import { A } from "hookrouter";
import { ListBlogImagesType } from "../../../types";

interface IBlog {
  blogImages: ListBlogImagesType;
}

const Blog: React.FC<IBlog> = ({ blogImages }) => {
  return (
    <article className={s.main_blog}>
      <div className={s.main_blog__title_block}>
        <h2 className={s.main_blog__title}>Наш блог</h2>
        <A href="/blog">Смотреть все записи</A>
      </div>

      <ul className={s.main_blog__images}>
        {blogImages.map(({ date, chapter, title, url }) => {
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
    </article>
  );
};

export default Blog;
