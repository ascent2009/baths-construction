import React from "react";
import s from "../style.module.scss";
import { ListImageType } from "../../../types";

interface IProduction {
  prodImages: ListImageType;
}

const Production: React.FC<IProduction> = ({ prodImages }) => {
  const sortedImg = prodImages.sort((a, b) => (a.price > b.price ? 1 : -1));
  return (
    <article className={s.main_production}>
      <h2 className={s.main_production__title}>
        Продукция нашего производства
      </h2>
      <p className={s.main_production__title_subtitle}>
        Принимаем заказы на <strong>январь-февраль</strong>
      </p>
      <ul className={s.main_production__image_block}>
        {sortedImg.map(({ id, title, url, description, price, novelty }) => {
          return (
            <li key={id}>
              <div className={s.main_production__image}>
                <img src={url} alt={title} />
                {novelty ? (
                  <div className={s.main_production__image_novelty}>
                    {novelty}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <h4 className={s.main_production__image_title}>{title}</h4>
              <p className={s.main_production__image_description}>
                {description}
              </p>
              <h4 className={s.main_production__image_price}>
                от {price} руб.
              </h4>{" "}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Production;
