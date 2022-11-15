import React from "react";
import s from "./style.module.scss";
import HeaderMain from "../../Header/HeaderMain";
import { SVGCollection } from "../../Main";
import { A } from "hookrouter";
import Tools from "../../../assets/tools.png";
import Worker from "../../../assets/worker.png";

const NotFound: React.FC = () => {
  return (
    <>
      <HeaderMain
        display={{ display: "none" }}
        className={"header_main__menu_block"}
        background="header_main__404"
        logo={SVGCollection.lightLogo}
        phoneIcon={SVGCollection.phoneIcon}
        arrowIcon={SVGCollection.arrowIcon}
      />
      <section className={s.main_404}>
        <h2 className={s.main_404__title}>Ошибка 404</h2>
        <h1 className={s.main_404__subtitle}>Страница не найдена</h1>
        <div className={s.main_404__text_block}>
          <p className={s.main_404__text}>
            К сожалению, страница, на которую Вы пытались перейти, не найдена.
            Возможно, Вы сделали опечатку, когда набирали адрес страницы или же
            ссылка, на которую Вы нажали, устарела.
          </p>
          <p className={s.main_404__text}>
            Приглашаем посетить <A href={"/"}>главную страницу сайта.</A>
          </p>
        </div>
        <div className={s.main_404__image_block}>
          <img className={s.main_404__tools_image} src={Tools} alt="tools" />
          <img className={s.main_404__worker_image} src={Worker} alt="worker" />
        </div>
      </section>
    </>
  );
};

export default NotFound;
