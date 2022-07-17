import React from "react";
import s from "../style.module.scss";
import { A } from "hookrouter";
import { ListExampleImagesType } from "../../../types";

interface IExamples {
  examplesImages: ListExampleImagesType;
}

const Examples: React.FC<IExamples> = ({ examplesImages }) => {
  const sortedImages = examplesImages.sort((a, b) => a.id - b.id);
  return (
    <article className={s.main_examples}>
      <h2 className={s.main_examples__title}>
        Ежегодно изготавливаем более 100 мобильных бань
      </h2>
      <ul className={s.main_examples__images}>
        {sortedImages.map(({ id, url }) => {
          return (
            <li className={s.main_examples__images_item} key={id}>
              <img src={url} alt={url} />
            </li>
          );
        })}
      </ul>
      <div className={s.main_examples__catalogue}>
        <p>каталог</p>
        <A href="/catalogue">Смотреть полный каталог наших бань и цены</A>
      </div>
    </article>
  );
};

export default Examples;
