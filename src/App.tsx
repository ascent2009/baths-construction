import React from "react";
// import logo from "./logo.svg";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
// import { Counter } from "./features/counter/Counter";
// import s from "./App.module.scss";
import { useRoutes } from "hookrouter";
// import { Routes, Route } from "react-router-dom";
import EnglishVersionPage from "./components/Pages/EnglishVersionPage";
import NotFound from "./components/Pages/NotFoundPage";

const routes = {
  "/": () => <MyApp />,
  "/english": () => <EnglishVersionPage />,
};

function MyApp() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function App() {
  const routeResult = useRoutes(routes);
  return (
    <>
      {routeResult || <NotFound />}
      {/* <Routes>
        <Route path="*" element={<App />} />
        <Route path="/english" element={<EnglishVersionPage />} />
      </Routes> */}

      {/* <div className={s.App}>
        <header className={s["App-header"]}>
          <img src={logo} className={s["App-logo"]} alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className={s["App-link"]}
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className={s["App-link"]}
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className={s["App-link"]}
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className={s["App-link"]}
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </div> */}
    </>
  );
}

export default App;
