import React from "react";
import s from "../style.module.scss";
import { A } from "hookrouter";
import { IHeaderMain } from "../HeaderMain";

const HeaderChangedContent: React.FC<IHeaderMain> = ({
  display,
  title,
  subtitle,
  text1,
  text2,
}) => {
  return (
    <div style={display}>
      <div className={s.header_main__title_block}>
        <h1
          style={{
            width:
              title === "Производим мобильные бани на заказ" ? "548px" : "auto",
          }}
        >
          {title}
        </h1>
        <h3>{subtitle}</h3>
      </div>
      <div className={s.header_main__adv_block}>
        <p>{text1}</p>
        <p>{text2}</p>
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
