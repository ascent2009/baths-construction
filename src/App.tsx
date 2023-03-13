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
import Catalogue from "./components/Catalogue";
import ClassicBarrel from "./components/Catalogue/ClassicBarrel";
import PeakBarrel from "./components/Catalogue/PeakBarrel";
import CarcassLira from "./components/Catalogue/CarcassLira";
import ExtraCatalogue from "./components/Catalogue/ExtraCatalogue";
import Blog from "./components/Blog";
import KnowHow from "./components/Blog/KnowHow";
import Information from "./components/Information";
import AboutUs from "./components/Information/AboutUs";
import Vacancies from "./components/Information/Vacancies";
import Questions from "./components/Information/Questions";
import Contacts from "./components/Information/Contacts";
import SuccessfulOrder from "./components/SuccessfulOrder";
import Basins from "./components/Basins";
import RoundBasin from "./components/Basins/RoundBasin";
import Projects from "./components/Projects";
import Gorky2 from "./components/Projects/Gorky2";
import { AppContext } from "./context";
import { LocationContext } from "./context";
import { appValues } from "./context";
import { defaultValues } from "./context";

const routes = {
  "/": () => <Main />,
  "/english": () => <EnglishVersionPage />,
  "/personal_info": () => <PersonalInfoPage />,
  "/catalogue": () => <Catalogue />,
  "/barrel_baths": () => <BarrelBathsPage />,
  "/carcass_baths": () => <CarcassBathsPage />,
  "/catalogue/classic_barrel": () => <ClassicBarrel />,
  "/catalogue/classic_barrel/peak_barrel": () => <PeakBarrel />,
  "/catalogue/carcass_baths/carcass_lira": () => <CarcassLira />,
  "/catalogue/basins": () => <Basins />,
  "/catalogue/basins/roundbasin": () => <RoundBasin />,
  "/catalogue/extra_catalogue": () => <ExtraCatalogue />,
  "/blog": () => <Blog />,
  "/blog/knowhow": () => <KnowHow />,
  "/information": () => <Information />,
  "/information/about": () => <AboutUs />,
  "/information/vacancies": () => <Vacancies />,
  "/information/faq": () => <Questions />,
  "/information/contacts": () => <Contacts />,
  "/success": () => <SuccessfulOrder />,
  "/projects": () => <Projects />,
  "/projects/gorky2": () => <Gorky2 />,
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
  const [classicBarrelImages, setClassicBarrelImages] = useState(
    appValues.classicBarrelImages
  );
  const [peakBarrelImages, setPeakBarrelImages] = useState(
    appValues.peakBarrelImages
  );
  const [liraCarcassImages, setLiraCarcassImages] = useState(
    appValues.liraCarcassImages
  );
  const [slides, setSlides] = useState(appValues.slides);
  const [layoutImages, setLayoutImages] = useState(appValues.layoutImages);
  const [extraOptionsImages, setExtraOptionsImages] = useState(
    appValues.extraOptionsImages
  );
  const [sections, setSections] = useState(appValues.sections);
  const [blogKnowHowImages, setBlogKnowHowImages] = useState(
    appValues.blogKnowHowImages
  );
  const [infoImages, setInfoImages] = useState(appValues.infoImages);
  const [workshopImages, setWorkshopImages] = useState(
    appValues.workshopImages
  );
  const [faqImages, setFaqImages] = useState(appValues.faqImages);
  const [projectImages, setProjectImages] = useState(appValues.projectImages);
  const [gorkyImages, setGorkyImages] = useState(appValues.gorkyImages);
  const [basinImages, setBasinImages] = useState(appValues.basinImages);
  const [roundBasinImages, setRoundBasinImages] = useState(
    appValues.roundBasinImages
  );
  const [layoutRoundImages, setLayoutRoundImages] = useState(
    appValues.layoutRoundImages
  );
  const [roundPriceImages, setRoundPriceImages] = useState(
    appValues.roundPriceImages
  );
  const [extraCatalogueImages, setExtraCatalogueImages] = useState(
    appValues.extraCatalogueImages
  );
  const [extraSelectionImages, setExtraSelectionImages] = useState(
    appValues.extraSelectionImages
  );
  const [extraBlogImages, setExtraBlogImages] = useState(
    appValues.extraBlogImages
  );
  const [extraGalleryImages, setExtraGalleryImages] = useState(
    appValues.extraGalleryImages
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
    const dbClassicBarrel = fetchFirebase(db, `classic_barrel`);
    onValue(dbClassicBarrel, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setClassicBarrelImages([...classicBarrelImages, ...obj]);
    });
    const dbPeakBarrel = fetchFirebase(db, `peak-barrel`);
    onValue(dbPeakBarrel, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setPeakBarrelImages([...peakBarrelImages, ...obj]);
    });
    const dbLiraCarcass = fetchFirebase(db, `lira-carcass`);
    onValue(dbLiraCarcass, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setLiraCarcassImages([...liraCarcassImages, ...obj]);
    });
    const dbLayout = fetchFirebase(db, `layout-options`);
    onValue(dbLayout, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setLayoutImages([...layoutImages, ...obj]);
    });
    const dbSlides = fetchFirebase(db, `slides`);
    onValue(dbSlides, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setSlides([...slides, ...obj]);
    });
    const dbExtraOptions = fetchFirebase(db, `extra-options`);
    onValue(dbExtraOptions, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setExtraOptionsImages([...extraOptionsImages, ...obj]);
    });
    const dbSections = fetchFirebase(db, `section`);
    onValue(dbSections, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setSections([...sections, ...obj]);
    });
    const dbKnowHow = fetchFirebase(db, `blog-knowhow`);
    onValue(dbKnowHow, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setBlogKnowHowImages([...blogKnowHowImages, ...obj]);
    });
    const dbInfo = fetchFirebase(db, `information`);
    onValue(dbInfo, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setInfoImages([...infoImages, ...obj]);
    });
    const dbWorkshop = fetchFirebase(db, `workshop`);
    onValue(dbWorkshop, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setWorkshopImages([...workshopImages, ...obj]);
    });
    const dbFaq = fetchFirebase(db, `faq`);
    onValue(dbFaq, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setFaqImages([...faqImages, ...obj]);
    });
    const dbProjects = fetchFirebase(db, `baths-built`);
    onValue(dbProjects, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setProjectImages([...projectImages, ...obj]);
    });
    const dbGorky = fetchFirebase(db, `gorky2`);
    onValue(dbGorky, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setGorkyImages([...gorkyImages, ...obj]);
    });
    const dbBasins = fetchFirebase(db, `basins`);
    onValue(dbBasins, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setBasinImages([...basinImages, ...obj]);
    });
    const dbRound = fetchFirebase(db, `round-basin`);
    onValue(dbRound, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setRoundBasinImages([...roundBasinImages, ...obj]);
    });
    const dbRoundLayout = fetchFirebase(db, `layout-round-options`);
    onValue(dbRoundLayout, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setLayoutRoundImages([...layoutRoundImages, ...obj]);
    });
    const dbRoundPrice = fetchFirebase(db, `round-price`);
    onValue(dbRoundPrice, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setRoundPriceImages([...roundPriceImages, ...obj]);
    });
    const dbExtraBarrel = fetchFirebase(db, `extra-catalogue`);
    onValue(dbExtraBarrel, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setExtraCatalogueImages([...extraCatalogueImages, ...obj]);
    });
    const dbExtraSelection = fetchFirebase(db, `extra-catalogue-selection`);
    onValue(dbExtraSelection, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setExtraSelectionImages([...extraSelectionImages, ...obj]);
    });
    const dbExtraBlog = fetchFirebase(db, `extra-blog`);
    onValue(dbExtraBlog, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setExtraBlogImages([...extraBlogImages, ...obj]);
    });
    const dbExtraGallery = fetchFirebase(db, `extra-gallery`);
    onValue(dbExtraGallery, (snapshot) => {
      const snap = snapshot.val();
      const obj = Object.keys(snap).map((sn) => snap[sn]);
      setExtraGalleryImages([...extraGalleryImages, ...obj]);
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
        classicBarrelImages,
        peakBarrelImages,
        liraCarcassImages,
        layoutImages,
        slides,
        extraOptionsImages,
        sections,
        blogKnowHowImages,
        infoImages,
        workshopImages,
        faqImages,
        projectImages,
        gorkyImages,
        basinImages,
        roundBasinImages,
        layoutRoundImages,
        roundPriceImages,
        extraCatalogueImages,
        extraSelectionImages,
        extraBlogImages,
        extraGalleryImages,
      }}
    >
      <LocationContext.Provider
        value={{
          location,
          showModal,
          closeModal,
          modal,
        }}
      >
        <Layout>{routeResult || <NotFound />}</Layout>
      </LocationContext.Provider>
    </AppContext.Provider>
  );
};

export default App;
