import React from "react";
import s from "./style.module.scss";
// import { AppContext } from "../../../context";
import { ListExampleImagesType } from "../../../types";

interface IIntroduction {
  images: ListExampleImagesType;
  // carcassImages: ListExampleImagesType;
  title: string;
  className: string;
}

const Introduction: React.FC<IIntroduction> = ({
  images,
  title,
  className,
}) => {
  //   const { barrelImages } = useContext(AppContext);
  const sortedImages = images.sort((a, b) => a.id - b.id);
  return (
    <article className={s.main_introduction__block}>
      <h2 className={s.main_introduction__title}>
        В базовую стоимость каждой нашей {title} входит
      </h2>
      <div className={s.main_introduction__list_block}>
        <div className={s.main_list__block}>
          <ol className={s.main_list}>
            <li className={s.main_list__item}>
              Печь дровяная Везувий Скиф Стандарт 12 ДТ-3;
            </li>
            <li className={s.main_list__item}>
              Камни печные Габбро-диабаз 40 кг;
            </li>
            <li className={s.main_list__item}>
              Защита от нагрева на полу и стене;
            </li>
            <li className={s.main_list__item}>
              Бак для воды нержавейка 58 литров с краном;
            </li>
            <li className={s.main_list__item}>Дымоход с искрогасителем;</li>
            <li className={s.main_list__item}>
              Пологи и трапы на пол вдоль всех помещений;
            </li>
            <li className={s.main_list__item}>
              Электропроводка и светильники;
            </li>
            <li className={s.main_list__item}>
              Окно для проветривания в парной 30 х 30 см (стеклопакет 2 стекла);
            </li>
            <li className={s.main_list__item}>Двери деревянные - массив;</li>
            <li className={s.main_list__item}>
              Кровля финская гибкая черепица, на выбор 4 цвета;
            </li>
            <li className={s.main_list__item}>
              Покрытие корпуса бани - два слоя краски с антисептиком Tikkurila,
              цвет на выбор из каталога;
            </li>
            <li className={s.main_list__item}>
              Бетонные блоки под фундамент по 2 точки на опору 40 x 20 x 20 см.
            </li>
          </ol>
          <p className={s[`${className}`]}>
            Много дополнительного функционала, смотрите его в проектах далее на
            страницах сайта или уточняйте, сделаем вашу баню уникальной, и как
            Вы её видите!
          </p>
        </div>

        <ul className={s.main_list__image_block}>
          {sortedImages.map(({ id, url }) => {
            return (
              <li className={s.main_list__image_item} key={id}>
                <img src={url} alt={url} />
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default Introduction;
