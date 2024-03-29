import React, { useContext, useRef, useEffect, useState } from "react";
import s from "./style.module.scss";
import Modal from "../../Modal";
import { Overlay } from "../../Overlay";
import CloseSvg from "../../../assets/close.svg";
import { LocationContext } from "../../../context";

const Location: React.FC = () =>
  {
    const { location, showModal, closeModal, modal } =
      useContext(LocationContext);
    const [loc, setLoc] = useState<string>("");
    const buttonID = useRef(null);
    useEffect(() => {
      console.log(buttonID.current);
      setLoc("location");
    }, []);

    console.log(loc);

    return (
      <article className={s.main_location}>
        {location.map(({ url }) => (
          <img key={url} src={url} alt="map" />
        ))}
        <div className={s.main_location__right}>
          <div className={s.main_location__contacts}>
            <h3 className={s.main_location__contacts_title}>
              Приезжайте к нам, организуем экскурсию и лично познакомимся
            </h3>
            <address className={s.main_location__contacts_address}>
              Ленинградская область, Приозерский район,{" "}
              <strong>поселок Сосново</strong>, ул. Академическая д.1
            </address>
            <button
              className={s.main_location__contacts_modal}
              type="button"
              onClick={(e) => (showModal ? showModal(e, "location") : null)}
              id="location"
              ref={buttonID}
            >
              Смотреть схему проезда
            </button>
            <p className={s.main_location__contacts_invitation}>
              <span>Перед поездкой к нам</span>, просьба, предварительно звонить
              по телефону, производство закрытого типа, договоримся о времени
              посещения!
            </p>
          </div>
        </div>
        {!modal && loc === "location" ? (
          <>
            <Overlay />
            <Modal className={s.main_modal} id="location">
              {location.map(({ url }) => (
                <img key={url} src={url} alt="map" />
              ))}
              <button className={s.main_modal__close} onClick={closeModal}>
                <img src={CloseSvg} alt="close" />
              </button>
            </Modal>
          </>
        ) : (
          ""
        )}
      </article>
    );
  };

export default Location;
