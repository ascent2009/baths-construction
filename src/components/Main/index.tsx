import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
// import { A } from "hookrouter";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";

import Production from "./Production";
import About from "./About";
import Blog from "./Blog";
import Examples from "./Examples";
import Location from "./Location";
import Modal from "../Modal";
import CloseSvg from "../../assets/close.svg";

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
    console.log("modal: ", modal);
  };

  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <section className={s.main}>
      <div className={s.main_top__link}>Главная /</div>
      <Production prodImages={prodImages} />
      <About prodFeatures={prodFeatures} aboutImages={aboutImages} />
      <Blog blogImages={blogImages} />
      <Examples examplesImages={examplesImages} />
      <Location location={location} showModal={showModal} />
      {!modal ? (
        <Modal className={s.main_modal}>
          {location.map(({ url }) => (
            <img key={url} src={url} alt="map" />
          ))}
          <button className={s.main_modal__close} onClick={closeModal}>
            <img src={CloseSvg} alt="close" />
          </button>
        </Modal>
      ) : (
        ""
      )}
    </section>
  );
};

export default Main;
