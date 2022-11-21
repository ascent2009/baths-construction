import React, { useContext } from "react";
import s from "./style.module.scss";
import { A, navigate } from "hookrouter";
import Button from "../../Button";
import { AppContext } from "../../../context";

interface IExamples {
  className: string;
}

const Examples: React.FC<IExamples> = ({ className }) => {
  const { examplesImages } = useContext(AppContext);
  const sortedImages = examplesImages.sort((a, b) => a.id - b.id);
  return (
    <article className={s[`${className}`]}>
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
      <div className={s.main_examples__bottom_block}>
        <div className={s.main_examples__catalogue}>
          <p>каталог</p>
          <A href="/catalogue">Смотреть полный каталог наших бань и цены</A>
        </div>
        <div className={s.main_examples__button_block}>
          <Button
            title="Обсудить строительство"
            className="button_red__theme"
            onClick={() => navigate("tel: +7(812)467-90-60")}
          />
          <A href="/production">Посетить производство</A>
        </div>
      </div>
    </article>
  );
};

export default Examples;
