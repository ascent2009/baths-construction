import React from "react";
import s from "./style.module.scss";
// import { Link } from "react-router-dom";
import { A } from "hookrouter";
import HeaderMain from "../../Header/HeaderMain";
import DarkLogo from "../../../assets/logo-dark.svg";

const EnglishVersionPage: React.FC = () => {
  const SVGCollection = {
    darkLogo: DarkLogo,
  };

  return (
    <>
      <HeaderMain
        style={{ display: "none" }}
        className="header_main__menu_block_404"
        background="header_main__404"
        logo={SVGCollection.darkLogo}
      />
      <section className={s.main}>
        <h1>This is an english version of the site... developing as yet</h1>
        <A href="/">Back to the Russian version</A>
      </section>
    </>
  );
};

export default EnglishVersionPage;
