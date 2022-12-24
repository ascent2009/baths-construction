import React, { useState, useContext } from "react";
import s from "./style.module.scss";
import { AppContext } from "../../../context";
import ArrowSliderSvg from "../../../assets/arrow-slider.svg";

interface ISlider {
  title: string;
  className: string;
}

const Slider: React.FC<ISlider> = ({ title, className }) => {
  const { slides } = useContext(AppContext);
  const [slideIndex, setSlideIndex] = useState(1);

  const prevSlide = () => {
    if (slideIndex !== slides.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slides.length) {
      setSlideIndex(1);
    }
  };

  const nextSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slides.length);
    }
  };

  return (
    <article className={s[`${className}`]}>
      <h2 className={s.main_slider__title}>{title}</h2>
      <ol className={s.main__slider_orderedlist}>
        <li className={s.main__slider_orderedlist_item}>
          Печь дровяная Везувий Скиф Стандарт 12 ДТ-3 с чугунной дверцей,
          показана на фото выше, топка из парной (топку есть возможность вынести
          за стену - доп. опция, так же печь можно заменить на любую другую,
          даже электрическую);
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
          Пологи слева и справа вдоль всех стен помещений, в парном отделении
          левый полог глубина 45 см высота 43 см - сидячий, правый глубина 60
          см, высота 90 см - лежачий и приступок к нему (в парной есть
          возможность размещения полков Г-образным образом, печь при этом будет
          распологаться в углу - доп. опция);
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Приступок 60x30 см высотой 45 см к высокому полку в парной уже входит
          в стоимость;
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Трапы на полу в парной и помывочной комнате;
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Электропроводка и светильники во всех помещениях;
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Окно в парной и помывочной - 30 х 30 см (стеклопакет 2 стекла,
          открывается, есть возможность установки дополнительных окон - доп.
          опция);
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Двери - массив ель (есть возможность заменить на стеклянные - внешние
          стеклопакет ПВХ, внутренние каленое стекло 6 мм, матовое или цвет -
          бронза - доп. опция);
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Утепление стен и потолка 10 см Rockwool, полы утеплены Пеноплэкс, слой
          10 см;
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Покрытие корпуса бани - два слоя краски с антисептиком (Tikkurila цвет
          на выбор из каталога);
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Бетонные блоки под фундамент по 2 точки на стену 20 x 20 x 40 см;
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Договор и гарантия на изделие 18 месяцев.
        </li>
      </ol>
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
        <div onClick={prevSlide} className={s.main_slider__image_arrow_prev}>
          <img src={ArrowSliderSvg} alt="prev" />
        </div>

        <div onClick={nextSlide} className={s.main_slider__image_arrow_next}>
          <img src={ArrowSliderSvg} alt="next" />
        </div>
      </ul>
      <ul className={s.main_slider__list}></ul>

      <ol className={s.main__slider_orderedlist}>
        <li className={s.main__slider_orderedlist_item}>
          Печь дровяная Везувий Скиф Стандарт 12 ДТ-3 с чугунной дверцей,
          показана на фото выше, топка из парной (топку есть возможность вынести
          за стену - доп. опция, так же печь можно заменить на любую другую,
          даже электрическую);
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
          Пологи слева и справа вдоль всех стен помещений, в парном отделении
          левый полог глубина 45 см высота 43 см - сидячий, правый глубина 60
          см, высота 90 см - лежачий и приступок к нему (в парной есть
          возможность размещения полков Г-образным образом, печь при этом будет
          распологаться в углу - доп. опция);
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Приступок 60x30 см высотой 45 см к высокому полку в парной уже входит
          в стоимость;
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Трапы на полу вдоль всех помещений;
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Электропроводка и светильники во всех помещениях;
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Окно в парной - 30 х 30 см (стеклопакет 2 стекла, открывается, есть
          возможность установки дополнительных окон - доп. опция);
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Двери - массив ель (есть возможность заменить на стеклянные - матовое,
          цвет - бронза, каленое стекло 6 мм - доп. опция);
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Кровля финская гибкая черепица, на выбор 4 цвета коричневый, серый,
          зеленый и бордовый;
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Корпус и перегородки бани выполнен из бруса толщиной 45 мм, камерной
          сушки, материал сосна (Новинка! Сейчас есть возможность баню собрать
          полностью из кедра или лиственницы - доп. опции);
        </li>
        <li className={s.main__slider_orderedlist_item}>
          Покрытие корпуса бани - два слоя краски с антисептиком (Tikkurila цвет
          на выбор из каталога);
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
    </article>
  );
};

export default Slider;
