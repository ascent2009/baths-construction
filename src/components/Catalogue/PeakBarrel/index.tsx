import React, { useContext } from "react";
import s from "../style.module.scss";
import { SVGCollection } from "../../Pages/EnglishVersionPage";
import HeaderMain from "../../Header/HeaderMain";
import Location from "../../Main/Location";
import Invitation from "../Invitation";
import OtherBaths from "../OtherBaths";
import LayoutOptions from "../LayoutOptions";
import ExtraOptions from "../ExtraOptions";
import BathType from "../BathType";
import Slider from "../Slider";
import Blog from "../../Main/Blog";
import Examples from "../../Main/Examples";
// import Button from "../../Button";
// import Menu from "../../Menu";
import { A } from "hookrouter";
import { findPath } from "../../../app/findPath";
// import { randomImages } from "../../../app/randomImages";
import { AppContext } from "../../../context";
// import { ListImageType } from "../../../types";
// import ArrowSliderSvg from "../../../assets/arrow-slider.svg";

const PeakBarrel: React.FC = () => {
  const {
    // prodImages,
    // classicBarrelImages,
    peakBarrelImages,
    layoutImages,
    // slides,
    // extraOptionsImages,
  } = useContext(AppContext);
  // const [slideIndex, setSlideIndex] = useState(1);

  // const prevSlide = () => {
  //   if (slideIndex !== slides.length) {
  //     setSlideIndex(slideIndex + 1);
  //   } else if (slideIndex === slides.length) {
  //     setSlideIndex(1);
  //   }
  //   console.log(slideIndex);
  // };

  // const nextSlide = () => {
  //   if (slideIndex !== 1) {
  //     setSlideIndex(slideIndex - 1);
  //   } else if (slideIndex === 1) {
  //     setSlideIndex(slides.length);
  //   }
  //   console.log(slideIndex);
  // };

  // const sortedImages = extraOptionsImages.sort((a, b) => a.id - b.id);
  // const repeatedImages = new Array(3).fill(sortedImages).flat();

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
        <BathType
          title="Баня-бочка 3+ с козырьком"
          subtitle="Длина 3,5 или 4 м, диаметр 210-230 см, два помещения - парная и
          предбанник."
          className="main_peak"
          images={peakBarrelImages}
        />
        {/* <article className={s.main_peak}>
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
        </article> */}
        {/* <article className={s.main_layout}>
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
        </article> */}
        <LayoutOptions images={layoutImages} className="main_layout" />
        <Slider
          title="В базовую стоимость каждой нашей бани-бочки входит"
          className="main_slider"
        />
        {/* <article className={s.main_slider}>
          <h2 className={s.main_slider__title}>
            В базовую стоимость каждой нашей бани-бочки входит
          </h2>
          <ul className={s.main_slider__image_block}>
            {slides
              .map(({ url }, index) => (
                <li
                  key={url}
                  className={
                    slideIndex === index + 1
                      ? s.main_slider__image_item_active
                      : s.main_slider__image_item
                  }
                >
                  <img src={url} alt={url} />
                </li>
              ))
              .reverse()}
            <div
              onClick={prevSlide}
              className={s.main_slider__image_arrow_prev}
            >
              <img src={ArrowSliderSvg} alt="prev" />
            </div>

            <div
              onClick={nextSlide}
              className={s.main_slider__image_arrow_next}
            >
              <img src={ArrowSliderSvg} alt="next" />
            </div>
          </ul>
          <ul className={s.main_slider__list}></ul>

          <ol className={s.main__slider_orderedlist}>
            <li className={s.main__slider_orderedlist_item}>
              Печь дровяная Везувий Скиф Стандарт 12 ДТ-3 с чугунной дверцей,
              показана на фото выше, топка из парной (топку есть возможность
              вынести за стену - доп. опция, так же печь можно заменить на любую
              другую, даже электрическую);
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Защита от нагрева на полу и стене;
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Камни печные Габбро-диабаз 40 кг;
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Бак для воды - нержавейка 58 литров с краном;
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Дымоход с искрогасителем;
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Пологи слева и справа вдоль всех стен помещений, в парном
              отделении левый полог глубина 45 см высота 43 см - сидячий, правый
              глубина 60 см, высота 90 см - лежачий и приступок к нему (в парной
              есть возможность размещения полков Г-образным образом, печь при
              этом будет распологаться в углу - доп. опция);
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Приступок 60x30 см высотой 45 см к высокому полку в парной уже
              входит в стоимость;
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Трапы на полу вдоль всех помещений;
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Электропроводка и светильники во всех помещениях;
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Окно в парной - 30 х 30 см (стеклопакет 2 стекла, открывается,
              есть возможность установки дополнительных окон - доп. опция);
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Двери - массив ель (есть возможность заменить на стеклянные -
              матовое, цвет - бронза, каленое стекло 6 мм - доп. опция);
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Кровля финская гибкая черепица, на выбор 4 цвета коричневый,
              серый, зеленый и бордовый;
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Корпус и перегородки бани выполнен из бруса толщиной 45 мм,
              камерной сушки, материал сосна (Новинка! Сейчас есть возможность
              баню собрать полностью из кедра или лиственницы - доп. опции);
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Покрытие корпуса бани - два слоя краски с антисептиком (Tikkurila
              цвет на выбор из каталога);
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Стяжные элементы из перфорированного оцинкованного металла с
              возможностью регулировки на зимний и летний период эксплуатации;
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Опорные лаги под баню и бетонные блоки под фундамент по 2 точки на
              лагу 20 x 20 x 40 см;
            </li>
            <li className={s.main__slider_orderedlist_item}>
              Договор и гарантия на изделие 1 год.
            </li>
          </ol>
        </article> */}
        <Invitation
          title="Изготовим и доставим баню вашей мечты, в короткие сроки и по фиксированной цене"
          link="Задать вопросы"
          className="main_invitation__block"
          buttonTitle="Оформить заказ"
          buttonClass="button_red__theme_order"
        />
        {/* <article className={s.main_extra}>
          <h2 className={s.main_production__title}>Дополнительные опции</h2>
          <ul className={s.main_production__image_block}>
            {repeatedImages.map(({ id, title, url, description, price }) => {
              return (
                <li key={title}>
                  <div className={s.main_production__image}>
                    <img src={url} alt={title} />
                  </div>
                  <h4 className={s.main_production__image_title}>{title}</h4>
                  <p className={s.main_production__image_description}>
                    {description}
                  </p>
                  <h4 className={s.main_production__image_price}>{price}</h4>{" "}
                </li>
              );
            })}
          </ul>
          <p className={s.main_extra__text}>
            И ещё много дополнительных опций, такие как: рундуки для хранения
            вещей в полках, полочки для хранения банных принадлежностей, уличное
            освещение бани, минишкафы с дверцами и прочее.
          </p>
        </article> */}
        <ExtraOptions />
        <Examples className="main_examples__half_dark_theme" />
        <OtherBaths className="main_production__peak" />
        <Blog />
        <Location />
      </section>
    </>
  );
};

export default PeakBarrel;
