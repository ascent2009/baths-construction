import React from "react";
import s from "./style.module.scss";
import Button from "../../Button";
import Menu from "../../Menu";
import { A } from "hookrouter";
import { ListAboutImagesType } from "../../../types";

interface IBathType {
  title: string;
  subtitle: string;
  images: ListAboutImagesType;
  className: string;
}

const BathType: React.FC<IBathType> = ({
  title,
  subtitle,
  images,
  className,
}) => {
  return (
    <article className={s[`${className}`]}>
      <h2 className={s.main_production__title}>{title}</h2>
      <p className={s.main_production__title_subtitle}>{subtitle}</p>
      <ul className={s.main_production__image_block}>
        {images.map(({ url }) => {
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
              Цена указана за базовую комплектации "под ключ" материал - сосна,
              ель, смотрите{" "}
              <span>ниже по странице что входит в эту стоимость</span>, а также
              дополнительные опции и примеры планировок помещений.
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
              отдельно. Доставим на манипуляторе в собранном виде и установим в
              течении 2 - 3 часов, готовность бани - "заходи и парься".
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
          <p className={s.main_production__params_technology}>
            Эта баня <span>держит тепло до двух часов</span> в сильные морозы,
            утепление 10 см в стенах, полу и крыше! Сделано по каркасной
            технологии.
          </p>
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
            <A href="">Технология изготовления</A>
            <A href="">Фото готовых бань</A>
            <A href="">Наше производство</A>
          </Menu>
        </div>
      </div>
      <div className={s.main_round__params_block}>
        <div className={s.main_production__params_cost_block}>
          <div className={s.main_production__params_cost}>
            <div className={s.main_production__cost}>
              <h5>Размеры 100x100x110 см,</h5>
              <p>вместимость 1 чел.</p>
              <h4>96 500 руб.</h4>
            </div>
            <div className={s.main_production__cost}>
              <h5>Размеры 120x120x110 см,</h5>
              <p>вместимость 2 чел.</p>
              <h4>75 000 руб.</h4>
            </div>
          </div>
          <div className={s.main_production__params_price}>
            <p>
              Цена указана за базовую комплектации "под ключ" материал - сосна,
              ель, смотрите{" "}
              <span>ниже по странице что входит в эту стоимость</span>, а также
              дополнительные опции и размеры.
            </p>
          </div>
          {/* <div className={s.main_production__params_new}>
            <p>
              Новинка! Корпус данной бани можно выполнить{" "}
              <span>из кедра или лиственницы</span> - премиум исполнение!
            </p>
          </div> */}
          <div className={s.main_production__params_text}>
            <p>
              Стоимость доставки по Ленинградской области рассчитывается
              отдельно. Доставим собственными силами в собранном виде и
              установим по месту в течении 1 - 2 часов.
            </p>
            <p>
              Так же есть услуга сборки у Вас на участке - привезем в
              разобранном виде и соберем по месту.
            </p>
            <p>Стоимость сборки на участке 15% от стоимости купели.</p>
          </div>
          <div className={s.main_production__params_service}>
            <A href="">Узнать стоимость доставки и установки</A>
          </div>
          {/* <p className={s.main_production__params_technology}>
            Эта баня <span>держит тепло до двух часов</span> в сильные морозы,
            утепление 10 см в стенах, полу и крыше! Сделано по каркасной
            технологии.
          </p> */}
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
            <A href="">Размерный ряд</A>
            <A href="">Комплектация купели</A>
            <A href="">Дополнительные опции</A>
          </Menu>
        </div>
      </div>
    </article>
  );
};

export default BathType;
