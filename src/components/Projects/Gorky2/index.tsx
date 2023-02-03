import React, { useState, useContext } from "react";
import s from "./style.module.scss";
import HeaderMain from "../../Header/HeaderMain";
import Location from "../../Main/Location";
import Invitation from "../../Catalogue/Invitation";
import Menu from "../../Menu";
import { A } from "hookrouter";
import { AppContext } from "../../../context";
import { SVGCollection } from "../../Pages/EnglishVersionPage";
import { findPath } from "../../../app/findPath";


const Gorky2: React.FC = () => {

    const {gorkyImages, projectImages} = useContext(AppContext);
    const sortedImages = gorkyImages.sort((a, b) => a.id - b.id);
    const chaleImages = ["https://firebasestorage.googleapis.com/v0/b/baths-construction.appspot.com/o/gorky2%2Fgorky-barrel-medium.png?alt=media&token=bb181375-da76-45c2-a083-9aa354be90f6", "https://firebasestorage.googleapis.com/v0/b/baths-construction.appspot.com/o/gorky2%2Fgorky-barrel-medium.png?alt=media&token=bb181375-da76-45c2-a083-9aa354be90f6"];
    
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
        <article className={s.main_gorky2}>
          <div className={s.main_gorky2__title_block}>
            <h2 className={s.main_gorky2__title}>Баня-бочка в СНТ Горки-2</h2>
          </div>
          <Menu className={s.main_gorky2__menu}>
            <p>2 июня 2021   /</p>
            <div className={s.main_gorky2__menu_links}>
                <A href="/projects">Мы построили</A>
                <A href="/barrel_baths">Бани-бочки</A>
                <A href="/information/contacts">Ленинградская область</A>
            </div>
          </Menu>
          <p className={s.main_gorky2__text}>Атмосферное, яркое и гостеприимное шале, пропитанное ароматами Jo Malone, в котором хочется расслабленно и неспешно отдыхать с бокалом вина, сидя на огромной веранде и любоваться волшебством зажженных свеч и уютом вечернего освещения из гирлянд.
          </p>
          <ul className={s.main_gorky2__images}>
            {sortedImages.map(({id, url}) => (
                <li key={id} className={s.main_gorky2__images_item}>
                    <img src={url} alt={url}/>
                </li>
            ))}  
          </ul>
          <h3 className={s.main_gorky2__subtitle}>Шале Jo Malone</h3>
          <ul className={s.main_gorky2__chale_images}>
            {chaleImages.map((item, index) => (
                <li key={index} className={s.main_gorky2__chale_images_item}>
                    <img src={item} alt={item}/>
                </li>
            ))}  
          </ul>
          <p className={s.main_gorky2__text}>Атмосферное, яркое и гостеприимное шале, пропитанное ароматами Jo Malone, в котором хочется расслабленно и неспешно отдыхать с бокалом вина, сидя на огромной веранде и любоваться волшебством зажженных свеч и уютом вечернего освещения из гирлянд.
          </p>
        </article>
        <Invitation
          title="Изготовим и доставим баню вашей мечты, в короткие сроки и по
            фиксированной цене"
          link="Посетить производство"
          className="main_invitation__block_dark_theme"
          buttonTitle="Обсудить строительство"
          buttonClass="button_red__theme"
          mb="0"
        />
        <article className={s.main_projects}>
            <h2 className={s.main_projects__title}>
                Прочие записи из раздела Мы построили
            </h2>
            <ul className={s.main_projects__images}>
                {projectImages.map(({id, url, description}) => (
                    <li className={s.main_projects__images_item} key={id}>
                        <img src={url} alt={description} />
                        <A href="">{description}</A>
                    </li>
                ))}
            </ul>
        </article>
        <Location />
      </section>
    </>
  );
};

export default Gorky2;