import React, { useContext } from "react";
import s from "./style.module.scss";
import { A } from "hookrouter";
import { AppContext } from "../../../context";

const LayoutOptions: React.FC = () => {
  const { layoutImages } = useContext(AppContext);

  return (
    <article className={s.main_layout}>
      <h2 className={s.main_layout__title}>Варианты планировок</h2>
      <ul className={s.main_layout__image_block}>
        {layoutImages.map(
          ({
            title,
            subtitle,
            url,
            description,
            price,
            turnkey,
            ask,
            getcost,
          }) => {
            return (
              <li key={title}>
                <h4 className={s.main_layout__image_title}>
                  <span style={{ fontWeight: "600" }}>{title}</span> /{" "}
                  {subtitle}
                </h4>
                <div className={s.main_layout__image}>
                  <img src={url} alt={title} />
                </div>
                <p className={s.main_layout__image_description}>
                  {description}
                </p>
                <div className={s.main_layout__image_bottom_block}>
                  {price ? (
                    <div className={s.main_layout__image_price_block}>
                      <h4 className={s.main_layout__image_price}>
                        <span>Цена:</span> {price} руб.
                      </h4>{" "}
                      {turnkey ? (
                        <div className={s.main_layout__image_turnkey}>
                          {turnkey}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                  {ask ? (
                    <div className={s.main_layout__image_ask}>
                      <A href="">{ask}</A>
                    </div>
                  ) : (
                    ""
                  )}
                  {getcost ? (
                    <div className={s.main_layout__image_getcost}>
                      <A href="">{getcost}</A>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>
            );
          }
        )}
      </ul>
      <p className={s.main_layout__discussion}>
        Вариации планировок приведены в качестве примера, все размеры помещений
        и дополнительные опции обсуждаются на этапе расчета стоимости в
        зависимости от ваших пожеланий.
      </p>
      <div className={s.main_layout__extra}>
        <p>
          Стены можно двигать - увеличивая или уменьшая помещения, высоту и
          глубину полков можно менять, расположение тоже, добавлять и убирать
          дополнительные окна, выносить топку печи или кран с горячей водой за
          стену. Это все обсуждаемо, мы за расчет не берем деньги! У нас
          собственное производство и мы можем это себе позволить, для нас каждая
          баня - индивидуальная!
        </p>
        <p>
          Много дополнительного функционала, который поможет сделать баню
          эксклюзивной, и такой какой Вы её видите, смотрите его ниже по
          странице.
        </p>
      </div>
      <div className={s.main_layout__link_block}>
        <A href="/catalogue">назад в каталог</A>
        <A href="">Смотреть планировки и цены на другие размеры</A>
      </div>
    </article>
  );
};

export default LayoutOptions;
