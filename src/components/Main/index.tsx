import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
// import { A } from "hookrouter";
// import { db } from "../../firebase";
// import { ref, onValue } from "firebase/database";
import LogoSvg from "../../assets/logo.svg";
import CallSvg from "../../assets/call.svg";
import ArrowSvg from "../../assets/dropdown-arrow.svg";
import HeaderMain from "../Header/HeaderMain";
// import HeaderChangedContent from "../Header/HeaderChangedContent";
// import { LocationContext } from "../../context";
import Production from "./Production";
import About from "./About";
import Blog from "./Blog";
import Examples from "./Examples";
import Location from "./Location";
// import { defaultValues } from "../../context";
// import { AppContext } from "../../context";
// import { appValues } from "../../context";

import // ListImageType,
// ListFeaturesType,
// ListAboutImagesType,
// ListBlogImagesType,
// ListExampleImagesType,
"../../types";

export const SVGCollection = {
  lightLogo: LogoSvg,
  phoneIcon: CallSvg,
  arrowIcon: ArrowSvg,
};

const Main: React.FC = () => {
  // const [prodImages, setProdImages] = useState<ListImageType>([]);
  // const { prodFeatures, aboutImages } = useContext(AppContext);
  // const [prodFeatures, setProdFeatures] = useState(appValues.prodFeatures);
  // const [aboutImages, setAboutImages] = useState(appValues.aboutImages);
  // const [blogImages, setBlogImages] = useState<ListBlogImagesType>([]);
  // const [examplesImages, setExamplesImages] = useState<ListExampleImagesType>(
  //   []
  // );
  // const [location, setLocation] = useState(defaultValues.location);
  // const [modal, setModal] = useState(defaultValues.modal);

  // useEffect(() => {
  //   const dbRef = ref(db, `main-production`);
  //   onValue(dbRef, (snapshot) => {
  //     const snap = snapshot.val();
  //     const obj = Object.keys(snap).map((sn) => snap[sn]);
  //     setProdImages([...prodImages, ...obj]);
  //   });
  // }, []);

  // useEffect(() => {
  //   const dbRef = ref(db, `production-features`);
  //   onValue(dbRef, (snapshot) => {
  //     const snap = snapshot.val();
  //     const obj = Object.keys(snap).map((sn) => snap[sn]);
  //     setProdFeatures([...prodFeatures, ...obj]);
  //   });
  // }, []);

  // useEffect(() => {
  //   const dbRef = ref(db, `about-production`);
  //   onValue(dbRef, (snapshot) => {
  //     const snap = snapshot.val();
  //     const obj = Object.keys(snap).map((sn) => snap[sn]);
  //     setAboutImages([...aboutImages, ...obj]);
  //   });
  // }, []);

  // useEffect(() => {
  //   const dbRef = ref(db, `blog`);
  //   onValue(dbRef, (snapshot) => {
  //     const snap = snapshot.val();
  //     const obj = Object.keys(snap).map((sn) => snap[sn]);
  //     setBlogImages([...blogImages, ...obj]);
  //   });
  // }, []);

  // useEffect(() => {
  //   const dbRef = ref(db, `main-examples`);
  //   onValue(dbRef, (snapshot) => {
  //     const snap = snapshot.val();
  //     const obj = Object.keys(snap).map((sn) => snap[sn]);
  //     setExamplesImages([...examplesImages, ...obj]);
  //   });
  // }, []);

  // useEffect(() => {
  //   const dbRef = ref(db, `main-location`);
  //   onValue(dbRef, (snapshot) => {
  //     const snap = snapshot.val();
  //     const obj = Object.keys(snap).map((sn) => snap[sn]);
  //     setLocation([...location, ...obj]);
  //   });
  // }, []);

  // const showModal = () => {
  //   setModal(!modal);
  // };

  // const closeModal = () => {
  //   setModal(!modal);
  // };

  return (
    <>
      <HeaderMain
        title={"Производим мобильные бани на заказ"}
        className={"header_main__menu_block"}
        background="header_main"
        logo={SVGCollection.lightLogo}
        phoneIcon={SVGCollection.phoneIcon}
        arrowIcon={SVGCollection.arrowIcon}
      />

      <section className={s.main}>
        <div className={s.main_top__link}>Главная /</div>
        <Production tag="" />
        {/* <AppContext.Provider value={(prodFeatures, aboutImages)}> */}
        <About className="main_about" />
        {/* </AppContext.Provider> */}

        <Blog
        //  blogImages={blogImages}
        />
        <Examples className="main_examples" />
        {/* <LocationContext.Provider
          value={{ location, showModal, closeModal, modal }}
        > */}
        <Location />
        {/* </LocationContext.Provider> */}
      </section>
    </>
  );
};

export default Main;
