import React, { useContext } from "react";
import s from "./style.module.scss";
import { A } from "hookrouter";
import LogoSvg from "../../assets/logo.svg";
import CallSvg from "../../assets/call.svg";
import ArrowSvg from "../../assets/dropdown-arrow.svg";
import HeaderMain from "../Header/HeaderMain";
import About from "../Main/About";
import Blog from "../Main/Blog";
import Examples from "../Main/Examples";
import Location from "../Main/Location";
import { findPath } from "../../app/findPath";
import { AppContext } from "../../context";
import { SVGCollection } from "../Main";

// export const SVGCollection = {
//   lightLogo: LogoSvg,
//   phoneIcon: CallSvg,
//   arrowIcon: ArrowSvg,
// };
const Basins: React.FC = () => {
  const { basinImages } = useContext(AppContext);
  const sortedImages = basinImages.sort((a, b) => a.id - b.id);
  return (
    <>
      <HeaderMain
        title={"Купели и фурако из лиственницы для дома и улицы"}
        subtitle={"Собственное производство - под ключ, с приступком!"}
        // text1={
        //   "Новинка! Принимаем заказы на бани-бочки из сибирского кедра и лиственницы, цены уточняйте"
        // }
        text2={
          "Сроки изготовления до 14 дней. Проведем экскурсию на производстве в поселке Сосново в день обращения"
        }
        className={"header_main__menu_block"}
        background="header_main__basins"
        logo={SVGCollection.lightLogo}
        phoneIcon={SVGCollection.phoneIcon}
        arrowIcon={SVGCollection.arrowIcon}
      />
      <section className={s.main}>
        <div className={s.main_top__link}>Главная / {findPath()} /</div>
        <article className={s.main_basins}>
          <h2 className={s.main_basins__title}>
            Продукция нашего производства
          </h2>
          <ul className={s.main_basins__images}>
            {sortedImages.map(({ id, url, title, description, price }) => (
              <li key={id} className={s.main_basins__images_item}>
                <A href={id === 1 ? "/catalogue/basins/roundbasin" : ""}>
                  <img src={url} alt={title} />
                  <h4>{title}</h4>
                  <p>{description}</p>
                  <p>{price}</p>
                </A>
              </li>
            ))}
          </ul>
        </article>
        <About className="main_about__barrel" />
        <Blog
        //  blogImages={blogImages}
        />
        <Examples className="main_examples__half_dark_theme" />
        <Location />
      </section>
    </>
  );
};
export default Basins;
