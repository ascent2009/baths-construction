import React from "react";
import s from "../style.module.scss";
import { ListFeaturesType, ListAboutImagesType } from "../../../types";
import { A } from "hookrouter";

interface IAbout {
  prodFeatures: ListFeaturesType;
  aboutImages: ListAboutImagesType;
}

const About: React.FC<IAbout> = ({ prodFeatures, aboutImages }) => {
  return (
    <article className={s.main_about} id={"about"}>
      <h2 className={s.main_about__title}>
        Коротко о нас и нашем производстве
      </h2>
      <p className={s.main_about__description}>
        С 2007 года наша компания занимается изготовлением и продажей
        пиломатериалов. Являемся одними из первых и самых крупных производителей
        и оптовым поставщиком пиломатериалов на территории Санкт-Петербурга.{" "}
      </p>
      <ul className={s.main_about__features}>
        {prodFeatures.map(({ ID, description, link }) => {
          return (
            <li key={ID} className={s.main_about__features_item}>
              <h3 className={s.main_about__features_id}>{ID}</h3>
              <p className={s.main_about__features_description}>
                {description}&nbsp;
                {link ? (
                  <A href={"http://www.googlemaps.com"} target="_blank">
                    {link}
                  </A>
                ) : (
                  ""
                )}
              </p>
            </li>
          );
        })}
      </ul>
      <ul className={s.main_about__images}>
        {aboutImages.map(({ url }) => {
          return (
            <li key={url} className={s.main_about__images_item}>
              <img src={url} alt="pic" />
            </li>
          );
        })}
        <div className={s.main_about__details}>
          <h4 className={s.main_about__details_title}>
            Подробнее о нашем производстве
          </h4>
          <p className={s.main_about__details_text}>
            Ответим на все возникшие вопросы
          </p>
          <h3 className={s.main_about__details_phone}>+7 (812) 467-90-60</h3>
          <p className={s.main_about__details_timeline}>
            с 09:00 до 20:00 без выходных
          </p>
        </div>
      </ul>
    </article>
  );
};

export default About;
