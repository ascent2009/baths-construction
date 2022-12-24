import React, { useContext } from "react";
import s from "./style.module.scss";
import { AppContext } from "../../../context";

const ExtraOptions = () => {
  const { extraOptionsImages } = useContext(AppContext);

  const sortedImages = extraOptionsImages.sort((a, b) => a.id - b.id);
  const repeatedImages = new Array(3).fill(sortedImages).flat();

  return (
    <article className={s.main_extra}>
      <h2 className={s.main_production__title}>Дополнительные опции</h2>
      <ul className={s.main_production__image_block}>
        {repeatedImages.map(({ id, title, url, description, price }) => {
          return (
            <li key={title}>
              <div className={s.main_production__image}>
                <img src={url} alt={title} />
              </div>
              <h4 className={s.main_production__image_title}>{title}</h4>
              <p className={s.main_production__image_description}>
                {description}
              </p>
              <h4 className={s.main_production__image_price}>{price}</h4>{" "}
            </li>
          );
        })}
      </ul>
      <p className={s.main_extra__text}>
        И ещё много дополнительных опций, такие как: рундуки для хранения вещей
        в полках, полочки для хранения банных принадлежностей, уличное освещение
        бани, минишкафы с дверцами и прочее.
      </p>
    </article>
  );
};

export default ExtraOptions;
