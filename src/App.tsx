import React from "react";
import Main from "./components/Main";
import Layout from "./components/Pages/Layout";
import { useRoutes } from "hookrouter";
import EnglishVersionPage from "./components/Pages/EnglishVersionPage";
import NotFound from "./components/Pages/NotFoundPage";

const routes = {
  "/": () => <Main />,
  "/english": () => <EnglishVersionPage />,
};

// function MyApp() {
//   return <Main />;
// }

const App = () => {
  const routeResult = useRoutes(routes);

  return <Layout>{routeResult || <NotFound />}</Layout>;
};

export default App;
