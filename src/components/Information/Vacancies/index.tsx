import React, { useContext } from "react";
import s from "./style.module.scss";
import { A } from "hookrouter";
import HeaderMain from "../../Header/HeaderMain";
import Location from "../../Main/Location";
import { AppContext } from "../../../context";
import { SVGCollection } from "../../Pages/EnglishVersionPage";
import { findPath } from "../../../app/findPath";

const Vacancies: React.FC = () => {
  const { workshopImages } = useContext(AppContext);
  return (
    <>
      <HeaderMain
        display={{ display: "none" }}
        className="header_main__menu_block_eng"
        background="header_main__eng"
        logo={SVGCollection.darkLogo}
        phoneIcon={SVGCollection.phoneIcon}
        arrowIcon={SVGCollection.arrowIcon}
      />
      <section className={s.main}>
        <div className={s.main_top__link}>Главная / {findPath()} /</div>
        <article className={s.main_vacancies}>
          <h2 className={s.main_vacancies__title}>
            Сейчас нам требуются плотники на постройку бань
          </h2>
          <div className={s.main_vacancies__text}>
            <div className={s.main_vacancies__text_item}>
              <h5>Обязанности:</h5>
              <p>
                Изготовление бань бочек и бань по каркасной технологии в цеху и
                с выездом на территорию заказчика, цех располагается в поселке
                Сосново, приозерский район Лен.области, возможна работа вахтовым
                методом, предоставляем общежитии для проживания за счет
                организации.
              </p>
            </div>
            <div className={s.main_vacancies__text_item}>
              <h5>Условия:</h5>
              <p>
                Оплата сдельная. Заказов много, плотник получает от 2000 руб. в
                день, в зависимости от опыта и скорости работы. Выплаты каждую
                неделю.
              </p>
            </div>
            <div className={s.main_vacancies__text_item}>
              <h5>Требования:</h5>
              <p>
                Ответственное отношение к работе, трудолюбие. Опыт
                приветствуется. Мы обучаем, готовы учиться? Научим!
              </p>
            </div>
          </div>
          <div className={s.main_vacancies__employment}>
            <div className={s.main_vacancies__employment_contact}>
              <h5>По вопросам трудоустройства звонить:</h5>
              <div>
                <A href="tel: +7(812)467-90-60">+7 (812) 467-90-60</A>
                <p>&nbsp;/ с 09:00 до 20:00 пн-сб</p>
              </div>
            </div>
            <div className={s.main_vacancies__employment_location}>
              <h5>Место работы:</h5>
              <p>
                Ленинградская область, Приозерский район, поселок Сосново, ул.
                Академическая д.1
              </p>
            </div>
          </div>
          <div className={s.main_vacancies__images}>
            {workshopImages.map(({ id, url }) => (
              <li key={id}>
                <img src={url} alt={url} />
              </li>
            ))}
          </div>
        </article>
        <Location />
      </section>
    </>
  );
};

export default Vacancies;
