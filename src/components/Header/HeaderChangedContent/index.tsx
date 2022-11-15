import React from "react";
import s from "../style.module.scss";
import { A } from "hookrouter";
import { IHeaderMain } from "../HeaderMain";

const HeaderChangedContent: React.FC<IHeaderMain> = ({ display }) => {
  return (
    <div style={display}>
      <div className={s.header_main__title_block}>
        <h1>Производим мобильные бани на заказ</h1>
        <h3>
          Реальные цены <b>от 142 200 руб.</b> - под ключ, заходи и парься!
        </h3>
      </div>
      <div className={s.header_main__adv_block}>
        <p>
          <b>Новинка!</b> Принимаем заказы на бани-бочки из сибирского кедра и
          лиственницы, цены уточняйте
        </p>
        <p>
          Сроки изготовления до 24 дней. Проведем экскурсию на производстве в
          поселке Сосново в день обращения
        </p>
        <p>Приозерский район, работаем без выходных!</p>
      </div>
      <div className={s.header_main__button_block}>
        <A href={"tel: +7(812)467-90-60"} target="_blank">
          Получить консультацию
        </A>
        <A href="/production">Посетить производство</A>
      </div>
    </div>
  );
};

export default HeaderChangedContent;
