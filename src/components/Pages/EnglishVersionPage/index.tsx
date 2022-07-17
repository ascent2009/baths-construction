import React from "react";
import s from "./style.module.scss";
// import { Link } from "react-router-dom";
import { A } from "hookrouter";

const EnglishVersionPage: React.FC = () => {
  return (
    <section className={s.main}>
      <h1>This is an english version of the site... developing as yet</h1>
      <A href="/">Back to the Russian version</A>
    </section>
  );
};

export default EnglishVersionPage;
