import React, { useContext } from "react";
import s from "./style.module.scss";
import { A } from "hookrouter";
import HeaderMain from "../../Header/HeaderMain";
import Location from "../../Main/Location";
import Blog from "../../Main/Blog";
import Examples from "../../Main/Examples";
import Slider from "../../Catalogue/Slider";
import Button from "../../Button";
import Invitation from "../../Catalogue/Invitation";
import { AppContext } from "../../../context";
import { SVGCollection } from "../../Pages/EnglishVersionPage";
import { findPath } from "../../../app/findPath";

const AboutUs: React.FC = () => {
  const { aboutImages, workshopImages } = useContext(AppContext);

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
        <article className={s.main_about}>
          <h2 className={s.main_about__title}>О нас и нашем производстве</h2>
          <div className={s.main_about__images}>
            <ul className={s.main_about__images_list}>
              {aboutImages.map(({ url }) => {
                return (
                  <li key={url} className={s.main_about__images_list_item}>
                    <img src={url} alt="pic" />
                  </li>
                );
              })}
            </ul>
            <div className={s.main_about__images_text}>
              <div className={s.main_about__images_text_item}>
                <h3>Опыт в деревообработке с 2007 года</h3>
                <p>
                  Основное направление нашей компании это изготовление и продажа
                  пиломатериалов. Являемся одними из первых и самым крупным
                  производителем и оптовым поставщиком пиломатериалов на
                  территории Санкт-Петербурга. Наша продукция поставляется не
                  только по Ленинградской области но и за счет близкого
                  расположения к границе с европой в Германию, Эстонию и
                  Финляндию.
                </p>
              </div>
              <div className={s.main_about__images_text_item}>
                <h3>Производим мобильные бани с 2015 года</h3>
                <p>
                  За все время работы мы изготовили более 700 бань-бочек, а с
                  2020 года мы расширили ассортимент и наладили производство
                  утепленных бань выполненных по каркасной технологии, которые
                  так же доставляются к заказчику на манипуляторе или на тралле.
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className={s.main_workshop}>
          <h2 className={s.main_workshop__title}>
            Производственные цеха площадью 1500 кв.м. в 70 км от КАД
          </h2>
          <div className={s.main_workshop__features}>
            <p>
              Оптимизировали расходы, чтобы сделать наши бани еще более
              доступными для каждого
            </p>
            <p>
              Работаем с проверенными поставщиками и материалами - несем
              ответственность за качество по договору
            </p>
          </div>
          <div className={s.main_workshop__images}>
            {workshopImages.map(({ id, url }) => (
              <li key={id}>
                <img src={url} alt={url} />
              </li>
            ))}
          </div>
          <div className={s.main_workshop__text}>
            <div className={s.main_workshop__text_item}>
              <h3>Собственные сушильные камеры</h3>
              <p>
                Выдерживаем заготовки согласно ГОСТ в специально построенных
                сушильных камерах периодического действия, доводя их до
                влажности 12-14%
              </p>
            </div>
            <div className={s.main_workshop__text_warning}>
              Не используем сухостой и мертвую древесину!
            </div>
          </div>
        </article>
        <Slider className="main_slider__notext" />
        <article className={s.main_unique}>
          <h2 className={s.main_unique__title}>Сделаем вашу баню уникальной</h2>
          <p className={s.main_unique__suggest}>
            Работая с нами вы можете заказать не только стандартное исполнение
            корпуса бани, но и полную перепланировку помещений увеличив или
            сократив парную, помывочную или предбанник, переместить или
            расширить дверные проемы. Индивидуальное наполнение - столы,
            рундуки, шкафы, стеклянные двери, печное оборудование,
            дополнительные окна, материалы исполнения полков, стен и пола - все
            это фиксируется в договоре с подробной схемой планировки.
          </p>
          <div className={s.main_unique__visit}>
            <p>
              Всегда есть возможность подъехать к нам в цех и увидеть качество
              пиломатериала и процесс сборки корпусов, зайти внутрь бани и
              оценить габариты помещений.
            </p>
            <Button
              title="Посетить производство"
              className="button_red__theme_visit_production"
            />
          </div>
          <A href="http://www.maps.google.com" className={s.main_unique__link}>
            Смотреть схему проезда
          </A>
        </article>
        <Examples className="main_examples__light_theme" />
        <Blog />
        <Invitation
          title="Изготовим и доставим баню вашей мечты, в короткие сроки и по
            фиксированной цене"
          link="Посетить производство"
          className="main_invitation__block_dark_theme"
          buttonTitle="Обсудить строительство"
          buttonClass="button_red__theme"
          mb="0"
        />
        <Location />
      </section>
    </>
  );
};

export default AboutUs;
