import React, { useState, useEffect } from "react";
import s from "./style.module.scss";
import { SVGCollection } from "../EnglishVersionPage";
import HeaderMain from "../../Header/HeaderMain";
import Location from "../../Main/Location";
import { db } from "../../../firebase";
import { ref, onValue } from "firebase/database";
import { A } from "hookrouter";
import { LocationContext } from "../../../context";
import { defaultValues } from "../../../context";

import { ListAboutImagesType } from "../../../types";

const PersonalInfoPage: React.FC = () => {
  const [location, setLocation] = useState<ListAboutImagesType>(
    defaultValues.location
  );
  const [modal, setModal] = useState<boolean>(defaultValues.modal);

  const showModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const dbRef = ref(db, `main-location`);
    onValue(dbRef, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setLocation([...location, ...obj]);
    });
  }, []);

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
        <div className={s.main_top__link}>Главная /</div>
        <h2 className={s.main_title}>
          Политика в отношении обработки персональных данных
        </h2>

        <ol className={s.main_list}>
          <li className={s.main_list__item}>
            Общие положения
            <p className={s.main_list__item_text}>
              Настоящая политика обработки персональных данных составлена в
              соответствии с требованиями Федерального закона от 27.07.2006.
              №152-ФЗ «О персональных данных» и определяет порядок обработки
              персональных данных и меры по обеспечению безопасности
              персональных данных ИП "Комаров А. С." (далее – Оператор).
            </p>
            <ol className={s.main_list__sublist}>
              <li className={s.main_list__sublist_item}>
                Оператор ставит своей важнейшей целью и условием осуществления
                своей деятельности соблюдение прав и свобод человека и
                гражданина при обработке его персональных данных, в том числе
                защиты прав на неприкосновенность частной жизни, личную и
                семейную тайну.
              </li>
              <li className={s.main_list__sublist_item}>
                Настоящая политика Оператора в отношении обработки персональных
                данных (далее – Политика) применяется ко всей информации,
                которую Оператор может получить о посетителях веб-сайта
                https://banibochki78.ru/.
              </li>
            </ol>
          </li>
          <li className={s.main_list__item}>
            Основные понятия, используемые в Политике
            <p className={s.main_list__item_text}>
              Автоматизированная обработка персональных данных – обработка
              персональных данных с помощью средств вычислительной техники;
            </p>
            <p className={s.main_list__item_text}>
              Блокирование персональных данных – временное прекращение обработки
              персональных данных (за исключением случаев, если обработка
              необходима для уточнения персональных данных);
            </p>
            <p className={s.main_list__item_text}>
              Веб-сайт – совокупность графических и{" "}
              <span>информационных материалов</span>, а также программ для ЭВМ и
              баз данных, обеспечивающих их доступность в сети интернет по
              сетевому адресу https://banibochki78.ru/;
            </p>
            <p className={s.main_list__item_text}>
              Информационная система персональных данных — совокупность
              содержащихся в базах данных персональных данных, и обеспечивающих
              их обработку информационных технологий и технических средств;
            </p>
            <p className={s.main_list__item_text}>
              Обезличивание персональных данных — действия, в результате которых
              невозможно определить без использования дополнительной информации
              принадлежность персональных данных конкретному Пользователю или
              иному субъекту персональных данных;
            </p>
          </li>
        </ol>
        <div className={s.main_invitation__block}>
          <h4 className={s.main_invitation__title}>
            Изготовим и доставим баню вашей мечты, в короткие сроки и по
            фиксированной цене
          </h4>
          <div className={s.main_invitation__button_block}>
            <A href={"tel: +7(812)467-90-60"} target="_blank">
              Обсудить строительство
            </A>
            <A href="/production">Посетить производство</A>
          </div>
        </div>
        <LocationContext.Provider
          value={{ location, showModal, closeModal, modal }}
        >
          <Location />
        </LocationContext.Provider>
      </section>
    </>
  );
};

export default PersonalInfoPage;
