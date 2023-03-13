import React, { useState, useContext } from "react";
import s from "./style.module.scss";
import HeaderMain from "../Header/HeaderMain";
import Location from "../Main/Location";
import { A } from "hookrouter";
import { AppContext } from "../../context";
import { SVGCollection } from "../Pages/EnglishVersionPage";
import Button from "../Button";
import Modal from "../Modal";
import Menu from "../Menu";
import Pagination from "../Pagination";
import ButtonSvg1 from "../../assets/location-button1.svg";
import ButtonSvg3 from "../../assets/location-button3.svg";
import ButtonSvg6 from "../../assets/location-button6.svg";
import ButtonSvg3Red from "../../assets/location-button3-red.svg";
import CloseSvg from "../../assets/close.svg";

const Projects: React.FC = () => {
  const { projectImages } = useContext(AppContext);
  const [locationModal, setLocationModal] = useState(false);
  const openLocationModal = () => setLocationModal(!locationModal);
  const closeLocationModal = () => setLocationModal(false);
  return (
    <>
      <HeaderMain
        display={{ display: "none" }}
        className="header_main__menu_block_eng"
        background="header_main__projects"
        logo={SVGCollection.darkLogo}
        phoneIcon={SVGCollection.phoneIcon}
        arrowIcon={SVGCollection.arrowIcon}
      />
      <section className={s.main}>
        <article className={s.main_location}>
          <div className={s.main_location__map}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/baths-construction.appspot.com/o/baths-built%2Flocation-built.png?alt=media&token=4e3c4185-f09d-4798-922c-57fad7525c6c"
            alt="projects map"
          />
          <Button className="main_location__map_button">
            <img src={ButtonSvg1} alt="button location 1" />
          </Button>
          <Button onClick={openLocationModal} className="main_location__map_button">
            <img src={ButtonSvg3} alt="button location 3" />
          </Button>
          <Button className="main_location__map_button">
            <img src={ButtonSvg6} alt="button location 6" />
          </Button>
          <Button className="main_location__map_button">
            <img src={ButtonSvg3Red} alt="button location 3 red" />
          </Button>
          {locationModal ? (
            <Modal className={s.main_location__map_modal}>
              <Button onClick={closeLocationModal}>
                <img src={CloseSvg} alt="close modal" />
              </Button>{" "}
              <h3>СНТ Горки-2</h3>
              <div className={s.main_location__map_modal_item}>
                <p>Баня-бочка 3,5 метра в СНТ Горки-2</p>
                <A href="/projects/gorky2">подробнее {">"}</A>
              </div>
              <div className={s.main_location__map_modal_item}>
                <p>Баня-бочка 3,5 метра в СНТ Горки-2</p>
                <A href="/projects/gorky2">подробнее {">"}</A>
              </div>
              <div className={s.main_location__map_modal_item}>
                <p>Баня-бочка 3,5 метра в СНТ Горки-2</p>
                <A href="/projects/gorky2">подробнее {">"}</A>
              </div>
            </Modal>
          ) : (
            ""
          )}
          </div>
          <div className={s.main_location__title}>
            <h2>Мы построили</h2>
            <p>С 2008 года построили более 350 бань и 70 купелей, здесь представлены только некоторые</p>
          </div>
          <Menu className={s.main_location__menu}>
            <A href="/catalogue">Все</A>
            <A href="/barrel_baths">Бани-бочки</A>
            <A href="/carcass_baths">Каркасные моб. бани</A>
            <A href="/carcass_baths">Каркасные бани</A>
          </Menu>
          <Pagination
            images={projectImages}
            imagesClassName="main_location__images"
            paginationClassName="main_location__pagination"
            loadmoreClassName="main_location__pagination_loadmore"
          />
        </article>
        
        <Location />
      </section>
    </>
  );
};

export default Projects;
