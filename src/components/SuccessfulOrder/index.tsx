import React, { useContext } from "react";
import s from "./style.module.scss";
import { A } from "hookrouter";
import { SVGCollection } from "../Main";
import HeaderMain from "../Header/HeaderMain";
import Location from "../Main/Location";
import { AppContext } from "../../context";

const SuccessfulOrder: React.FC = () => {
  const { examplesImages } = useContext(AppContext);
  const sortedImages = examplesImages.sort((a, b) => a.id - b.id);

  return (
    <>
      <HeaderMain
        display={{ display: "none" }}
        className={"header_main__menu_block"}
        background="header_main__success"
        logo={SVGCollection.lightLogo}
        phoneIcon={SVGCollection.phoneIcon}
        arrowIcon={SVGCollection.arrowIcon}
      />
      <section className={s.main}>
        <article className={s.main_success}>
          <h2>Заявка принята</h2>
          <h1>Спасибо за обращение</h1>
          <div className={s.main_success__text}>
            <p>
              Мы свяжемся с Вами в ближайшее время и ответим на все возникшии
              вопросы, примем заказ или договоримся о времени посещения нашего
              производства.
            </p>
            <p>
              Обычно мы перезваниваем в течении 10 минут в рабочие часы с 09:00
              до 20:00 семь дней в неделю.
            </p>
          </div>
        </article>
        <article className={s.main_examples}>
          <div className={s.main_examples__title}>
            <h3>
              А пока вы ждете нашего звонка, посмотрите фотогалерею наших
              рабочих будней
            </h3>
            <div className={s.main_examples__title_link}>
              <h4>Каталог</h4>
              <A href="/catalogue">Перейти в каталог наших бань</A>
            </div>
          </div>
          <ul
            className={s.main_examples__images}
            style={{ marginBottom: "43px" }}
          >
            {sortedImages.map(({ id, url }) => {
              return (
                <li className={s.main_examples__images_item} key={id}>
                  <img src={url} alt={url} />
                </li>
              );
            })}
          </ul>
          <ul className={s.main_examples__images}>
            {sortedImages.map(({ id, url }) => {
              return (
                <li className={s.main_examples__images_item} key={id}>
                  <img src={url} alt={url} />
                </li>
              );
            })}
          </ul>
        </article>
        <Location />
      </section>
    </>
  );
};

export default SuccessfulOrder;
