import React, { useContext } from "react";
import s from "../style.module.scss";
import { SVGCollection } from "../../Pages/EnglishVersionPage";
import HeaderMain from "../../Header/HeaderMain";
import Location from "../../Main/Location";
// import Production from "../../Main/Production";
import Blog from "../../Main/Blog";
import Examples from "../../Main/Examples";
import Button from "../../Button";
import Menu from "../../Menu";
import { A } from "hookrouter";
import { findPath } from "../../../app/findPath";
import { randomImages } from "../../../app/randomImages";
import { AppContext } from "../../../context";
// import { ListImageType } from "../../../types";

const PeakBarrel: React.FC = () => {
  const {
    // prodImages,
    // classicBarrelImages,
    peakBarrelImages,
    layoutImages,
    slides,
  } = useContext(AppContext);

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
        <article className={s.main_peak}>
          <h2 className={s.main_production__title}>
            Баня-бочка 3+ с козырьком
          </h2>
          <p className={s.main_production__title_subtitle}>
            Длина 3,5 или 4 м, диаметр 210-230 см, два помещения - парная и
            предбанник.
          </p>
          <ul className={s.main_production__image_block}>
            {peakBarrelImages.map(({ url }) => {
              return (
                <li key={url}>
                  <div className={s.main_production__image}>
                    <img src={url} alt={url} />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={s.main_production__params_block}>
            <div className={s.main_production__params_cost_block}>
              <div className={s.main_production__params_cost}>
                <div className={s.main_production__cost}>
                  <h5>Длина 3,5 метра,</h5>
                  <p>диаметр 2,1 метра</p>
                  <h4>164 100 руб.</h4>
                </div>
                <div className={s.main_production__cost}>
                  <h5>Длина 4 метра,</h5>
                  <p>диаметр 2,1 метра</p>
                  <h4>173 600 руб.</h4>
                </div>
              </div>
              <div className={s.main_production__params_price}>
                <p>
                  Цена указана за базовую комплектации "под ключ" материал -
                  сосна, ель, смотрите{" "}
                  <span>ниже по странице что входит в эту стоимость</span>, а
                  также дополнительные опции и примеры планировок помещений.
                </p>
              </div>
              <div className={s.main_production__params_new}>
                <p>
                  Новинка! Корпус данной бани можно выполнить{" "}
                  <span>из кедра или лиственницы</span> - премиум исполнение!
                </p>
              </div>
              <div className={s.main_production__params_text}>
                <p>
                  Стоимость доставки по Ленинградской области рассчитывается
                  отдельно. Доставим на манипуляторе в собранном виде и
                  установим в течении 2 - 3 часов, готовность бани - "заходи и
                  парься".
                </p>
                <p>
                  Если, нет возможности манипулятору проехать - соберем у Вас на
                  участке за 2-4 дня, но, надо учитывать погодные условия, такие
                  бани не собираются в дождливую погоду.
                </p>
                <p>Стоимость сборки на участке 10% от стоимости бани.</p>
              </div>
              <div className={s.main_production__params_service}>
                <A href="">Узнать стоимость доставки и установки</A>
              </div>
            </div>
            <div className={s.main_production__params_nav_block}>
              <div className={s.main_production__params_nav_button}>
                <Button
                  title="Оформить заказ"
                  className="button_red__theme_order"
                />
                <A href="">Задать вопросы</A>
              </div>
              <div className={s.main_production__params_nav_changes}>
                <p>
                  Всегда есть возможность изготовить баню-бочку с увеличенным
                  диаметром - внутри шире и выше, уточняйте по стоимости.
                </p>
              </div>
              <Menu className={s.main_production__params_nav_menu}>
                <h4>Быстрая навигация:</h4>
                <A href="">Планировки помещений</A>
                <A href="">Комплектация бани</A>
                <A href="">Дополнительные опции</A>
                <A href="">Фото готовых бань</A>
                <A href="">Наше производство</A>
              </Menu>
            </div>
          </div>
        </article>
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
            Вариации планировок приведены в качестве примера, все размеры
            помещений и дополнительные опции обсуждаются на этапе расчета
            стоимости в зависимости от ваших пожеланий.
          </p>
          <div className={s.main_layout__extra}>
            <p>
              Стены можно двигать - увеличивая или уменьшая помещения, высоту и
              глубину полков можно менять, расположение тоже, добавлять и
              убирать дополнительные окна, выносить топку печи или кран с
              горячей водой за стену. Это все обсуждаемо, мы за расчет не берем
              деньги! У нас собственное производство и мы можем это себе
              позволить, для нас каждая баня - индивидуальная!
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
        <article className={s.main_slider}>
          <h2 className={s.main_slider__title}>
            В базовую стоимость каждой нашей бани-бочки входит
          </h2>
          <ul className={s.main_slider__image_block}>
            {slides.map(({ url }) => (
              <li className={s.main_slider__image_item}>
                <img src={url} alt={url} />
              </li>
            ))}
          </ul>

          <ul className={s.main_slider__list}></ul>
        </article>
        {/* <article className={s.main_production}>
          <h2 className={s.main_production__title}>
            Прочие бани нашего производства
          </h2>
          <ul className={s.main_production__image_block}>
            {
              new Set(
                randomImages(prodImages).map(
                  ({ id, title, url, description, price }) => {
                    return (
                      <li key={title}>
                        <div className={s.main_production__image}>
                          <img src={url} alt={title} />
                        </div>
                        <h4 className={s.main_production__image_title}>
                          {title}
                        </h4>
                        <p className={s.main_production__image_description}>
                          {description}
                        </p>
                        <h4 className={s.main_production__image_price}>
                          от {price} руб.
                        </h4>{" "}
                      </li>
                    );
                  }
                )
              )
            }
          </ul>
        </article> */}
        <div
          className={s.main_invitation__block}
          style={{ marginBottom: "80px", background: "#FFF9E2" }}
        >
          <h4 className={s.main_invitation__title} style={{ color: "#333333" }}>
            Изготовим и доставим баню вашей мечты, в короткие сроки и по
            фиксированной цене
          </h4>
          <div className={s.main_invitation__button_block}>
            <A href={"tel: +7(812)467-90-60"} target="_blank">
              Обсудить строительство
            </A>
            <A style={{ color: "#DA5C3E" }} href="/production">
              Посетить производство
            </A>
          </div>
        </div>
        <Examples className="main_examples__half_dark_theme" />
        <Blog />
        <Location />
      </section>
    </>
  );
};

export default PeakBarrel;
