import React from "react";
import Main from "./components/Main";
import Layout from "./components/Pages/Layout";
import { useRoutes } from "hookrouter";
import EnglishVersionPage from "./components/Pages/EnglishVersionPage";
import NotFound from "./components/Pages/NotFoundPage";
import PersonalInfoPage from "./components/Pages/PersonalInfoPage/";
import BarellBathsPage from "./components/Pages/BarrelBathsPage";

const routes = {
  "/": () => <Main />,
  "/english": () => <EnglishVersionPage />,
  "/personal_info": () => <PersonalInfoPage />,
  "/barell_baths": () => <BarellBathsPage />,
};

const App = () => {
  const routeResult = useRoutes(routes);

  return <Layout>{routeResult || <NotFound />}</Layout>;
};

export default App;
