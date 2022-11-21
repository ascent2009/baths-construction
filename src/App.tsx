import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Layout from "./components/Pages/Layout";
import { useRoutes } from "hookrouter";
import { db } from "./firebase";
import { fetchFirebase } from "./app/fetchFirebase";
import { onValue } from "firebase/database";
import EnglishVersionPage from "./components/Pages/EnglishVersionPage";
import NotFound from "./components/Pages/NotFoundPage";
import PersonalInfoPage from "./components/Pages/PersonalInfoPage/";
import BarrelBathsPage from "./components/Pages/BarrelBathsPage";
import CarcassBathsPage from "./components/Pages/CarcassBathsPage";
import { AppContext } from "./context";
import { LocationContext } from "./context";
import { appValues } from "./context";
import { defaultValues } from "./context";

const routes = {
  "/": () => <Main />,
  "/english": () => <EnglishVersionPage />,
  "/personal_info": () => <PersonalInfoPage />,
  "/barrel_baths": () => <BarrelBathsPage />,
  "/carcass_baths": () => <CarcassBathsPage />,
};

const App: React.FC = () => {
  const routeResult = useRoutes(routes);

  const [prodImages, setProdImages] = useState(appValues.prodImages);
  const [prodFeatures, setProdFeatures] = useState(appValues.prodFeatures);
  const [aboutImages, setAboutImages] = useState(appValues.aboutImages);
  const [blogImages, setBlogImages] = useState(appValues.blogImages);
  const [examplesImages, setExamplesImages] = useState(
    appValues.examplesImages
  );
  const [barrelImages, setBarrelImages] = useState(appValues.barrelImages);
  const [carcassImages, setCarcassImages] = useState(appValues.carcassImages);
  const [carcassParamsImages, setCarcassParamsImages] = useState(
    appValues.carcassParamsImages
  );
  const [location, setLocation] = useState(defaultValues.location);
  const [modal, setModal] = useState(defaultValues.modal);

  useEffect(() => {
    const dbProd = fetchFirebase(db, `main-production`);
    onValue(dbProd, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setProdImages([...prodImages, ...obj]);
    });
    const dbProdFeat = fetchFirebase(db, `production-features`);
    onValue(dbProdFeat, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setProdFeatures([...prodFeatures, ...obj]);
    });
    const dbAboutProd = fetchFirebase(db, `about-production`);
    onValue(dbAboutProd, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setAboutImages([...aboutImages, ...obj]);
    });
    const dbBlogImages = fetchFirebase(db, `blog`);
    onValue(dbBlogImages, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setBlogImages([...blogImages, ...obj]);
    });
    const dbExmpImages = fetchFirebase(db, `main-examples`);
    onValue(dbExmpImages, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setExamplesImages([...examplesImages, ...obj]);
    });
    const dbLocation = fetchFirebase(db, `main-location`);
    onValue(dbLocation, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setLocation([...location, ...obj]);
    });
    const dbBarrel = fetchFirebase(db, `barrel-baths`);
    onValue(dbBarrel, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setBarrelImages([...barrelImages, ...obj]);
    });
    const dbCarcass = fetchFirebase(db, `carcass-baths`);
    onValue(dbCarcass, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setCarcassImages([...carcassImages, ...obj]);
    });
    const dbCarcassParams = fetchFirebase(db, `carcass-params`);
    onValue(dbCarcassParams, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setCarcassParamsImages([...carcassParamsImages, ...obj]);
    });
  }, []);

  const showModal = (e: any, name: string) => {
    const idx = e.target.id;
    if (idx === name) setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <AppContext.Provider
      value={{
        prodImages,
        prodFeatures,
        aboutImages,
        blogImages,
        examplesImages,
        barrelImages,
        carcassImages,
        carcassParamsImages,
      }}
    >
      <LocationContext.Provider
        value={{ location, showModal, closeModal, modal }}
      >
        <Layout>{routeResult || <NotFound />}</Layout>
      </LocationContext.Provider>
    </AppContext.Provider>
  );
};

export default App;
