import React, { useContext } from "react";
import s from "./style.module.scss";
import { randomImages } from "../../../app/randomImages";
import { AppContext } from "../../../context";

interface IOtherBaths {
  className: string;
}

const OtherBaths: React.FC<IOtherBaths> = ({ className }) => {
  const { prodImages } = useContext(AppContext);
  return (
    <article className={s[`${className}`]}>
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
                    <h4 className={s.main_production__image_title}>{title}</h4>
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
  );
};

export default OtherBaths;
