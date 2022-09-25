import React, { useState } from "react";
import s from "../style.module.scss";
import { ListFeaturesType, ListAboutImagesType } from "../../../types";
import { A } from "hookrouter";
import Modal from "../../Modal";
import PaperPlaneSvg from "../../../assets/paper-plane.svg";

interface IAbout {
  prodFeatures: ListFeaturesType;
  aboutImages: ListAboutImagesType;
  // showModal: () => void;
  // closeModal: () => void;
  // modal: boolean;
  // setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const About: React.FC<IAbout> = ({
  prodFeatures,
  aboutImages,
  // showModal,
  // closeModal,
  // modal,
  // setModal,
}) => {
  const [modal, setModal] = useState<boolean>(!false);

  const showModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

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
          <button
            type="button"
            onClick={showModal}
            className={s.main_about__details_text}
          >
            Ответим на все возникшие вопросы
          </button>
          <h3 className={s.main_about__details_phone}>+7 (812) 467-90-60</h3>
          <p className={s.main_about__details_timeline}>
            с 09:00 до 20:00 без выходных
          </p>
        </div>
      </ul>
      {!modal ? (
        <Modal className={s.main_modal__about}>
          <div className={s.main_modal__about_block}>
            <h1 className={s.main_modal__about_title}>
              Ответим на Ваши вопросы
            </h1>
            <p className={s.main_modal__about_text}>
              Ответим на все возникшие вопросы и рассчитаем стоимость. Заполните
              форму ниже и мы сами перезвоним в течении 10 минут, звонок
              бесплатный, и совершенно не к чему Вас не обязывает.
            </p>
            <form method="POST" action="" className={s.main_modal__about_form}>
              <input
                type="text"
                placeholder="Ваше имя"
                className={s.main_modal__about_input}
              />
              <input
                type="phone"
                placeholder="Ваш телефон"
                className={s.main_modal__about_input}
              />
              <div className={s.main_modal__about_button_block}>
                <button
                  type="submit"
                  className={s.main_modal__about_submit}
                  onSubmit={handleSubmit}
                >
                  <img src={PaperPlaneSvg} alt="paper plane" />
                  Отправить
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className={s.main_modal__about_close}
                >
                  Закрыть
                </button>
              </div>
            </form>

            <p className={s.main_modal__about_personal}>
              Оставляя заявку Вы даете согласие на обработку своих{" "}
              <span>персональных данных</span>.
            </p>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </article>
  );
};

export default About;
