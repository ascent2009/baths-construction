import React, { useContext } from "react";
import s from "./style.module.scss";
import HeaderMain from "../../Header/HeaderMain";
import { SVGCollection } from "../../Main";
import About from "../../Main/About";
import Blog from "../../Main/Blog";
import Examples from "../../Main/Examples";
import Location from "../../Main/Location";
import Production from "../../Main/Production";
import { AppContext } from "../../../context";

const BarrelBathsPage: React.FC = () => {
  const { barrelImages } = useContext(AppContext);
  const sortedImages = barrelImages.sort((a, b) => a.id - b.id);
  return (
    <>
      <HeaderMain
        title={"Бани-бочки из Вологодского леса от производителя"}
        className={"header_main__menu_block"}
        background="header_main__barrel"
        logo={SVGCollection.lightLogo}
        phoneIcon={SVGCollection.phoneIcon}
        arrowIcon={SVGCollection.arrowIcon}
      />
      <section className={s.main}>
        <div className={s.main_introduction__block}>
          <h2 className={s.main_introduction__title}>
            В базовую стоимость каждой нашей бани-бочки входит
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
                  Окно для проветривания в парной 30 х 30 см (стеклопакет 2
                  стекла);
                </li>
                <li className={s.main_list__item}>
                  Двери деревянные - массив;
                </li>
                <li className={s.main_list__item}>
                  Кровля финская гибкая черепица, на выбор 4 цвета;
                </li>
                <li className={s.main_list__item}>
                  Покрытие корпуса бани - два слоя краски с антисептиком
                  Tikkurila, цвет на выбор из каталога;
                </li>
                <li className={s.main_list__item}>
                  Бетонные блоки под фундамент по 2 точки на опору 40 x 20 x 20
                  см.
                </li>
              </ol>
              <p className={s.main_list__text}>
                Много дополнительного функционала, смотрите его в проектах далее
                на страницах сайта или уточняйте, сделаем вашу баню уникальной,
                и как Вы её видите!
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
        </div>

        <div className={s.main_top__link}>Главная /</div>
        <Production tag="barrel" />
        <About className="main_about__barrel" />
        <Blog />
        <Examples className="main_examples__half_dark_theme" />
        <Location />
      </section>
    </>
  );
};

export default BarrelBathsPage;
