import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
// import { A } from "hookrouter";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import LogoSvg from "../../assets/logo.svg";
import CallSvg from "../../assets/call.svg";
import ArrowSvg from "../../assets/dropdown-arrow.svg";
import HeaderMain from "../Header/HeaderMain";
// import HeaderChangedContent from "../Header/HeaderChangedContent";

import Production from "./Production";
import About from "./About";
import Blog from "./Blog";
import Examples from "./Examples";
import Location from "./Location";

import {
  ListImageType,
  ListFeaturesType,
  ListAboutImagesType,
  ListBlogImagesType,
  ListExampleImagesType,
} from "../../types";

const Main: React.FC = () => {
  const [prodImages, setProdImages] = useState<ListImageType>([]);
  const [prodFeatures, setProdFeatures] = useState<ListFeaturesType>([]);
  const [aboutImages, setAboutImages] = useState<ListAboutImagesType>([]);
  const [blogImages, setBlogImages] = useState<ListBlogImagesType>([]);
  const [examplesImages, setExamplesImages] = useState<ListExampleImagesType>(
    []
  );
  const [location, setLocation] = useState<ListAboutImagesType>([]);
  const [modal, setModal] = useState<boolean>(!false);

  const SVGCollection = {
    lightLogo: LogoSvg,
    phoneIcon: CallSvg,
    arrowIcon: ArrowSvg,
  };

  useEffect(() => {
    const dbRef = ref(db, `main-production`);
    onValue(dbRef, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setProdImages([...prodImages, ...obj]);
    });
  }, []);

  useEffect(() => {
    const dbRef = ref(db, `production-features`);
    onValue(dbRef, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setProdFeatures([...prodFeatures, ...obj]);
    });
  }, []);

  useEffect(() => {
    const dbRef = ref(db, `about-production`);
    onValue(dbRef, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setAboutImages([...aboutImages, ...obj]);
    });
  }, []);

  useEffect(() => {
    const dbRef = ref(db, `blog`);
    onValue(dbRef, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setBlogImages([...blogImages, ...obj]);
    });
  }, []);

  useEffect(() => {
    const dbRef = ref(db, `main-examples`);
    onValue(dbRef, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setExamplesImages([...examplesImages, ...obj]);
    });
  }, []);

  useEffect(() => {
    const dbRef = ref(db, `main-location`);
    onValue(dbRef, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setLocation([...location, ...obj]);
    });
  }, []);

  const showModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <HeaderMain
        className={"header_main__menu_block"}
        background="header_main"
        logo={SVGCollection.lightLogo}
        phoneIcon={SVGCollection.phoneIcon}
        arrowIcon={SVGCollection.arrowIcon}
      />

      <section className={s.main}>
        <div className={s.main_top__link}>Главная /</div>
        <Production prodImages={prodImages} />
        <About
          prodFeatures={prodFeatures}
          aboutImages={aboutImages}
          // showModal={showModal}
          // closeModal={closeModal}
          // modal={modal}
          // setModal={setModal}
        />
        <Blog blogImages={blogImages} />
        <Examples examplesImages={examplesImages} />
        <Location
          location={location}
          showModal={showModal}
          closeModal={closeModal}
          modal={modal}
          setModal={setModal}
        />
      </section>
    </>
  );
};

export default Main;
