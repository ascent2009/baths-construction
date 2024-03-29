import React from "react";
import s from "./style.module.scss";
import HeaderMain from "../../Header/HeaderMain";
import DarkLogo from "../../../assets/logo-dark.svg";
import PhoneRed from "../../../assets/telephone-red.svg";
import ComingSoon from "../../../assets/coming_soon.png";
import ArrowSvg from "../../../assets/dropdown-arrow-black.svg";

console.log(window.location.pathname === "/english");

export const SVGCollection = {
  darkLogo: DarkLogo,
  phoneIcon: PhoneRed,
  arrowIcon: ArrowSvg,
};

const EnglishVersionPage: React.FC = () => {
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
        <h2 className={s.main_title}>For English speakers</h2>
        <div className={s.main_coming_soon__block}>
          <img src={ComingSoon} alt="Coming Soon" />
        </div>
       
      </section>
    </>
  );
};

export default EnglishVersionPage;
