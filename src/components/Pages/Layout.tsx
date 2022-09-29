import React from "react";
import Header from "../Header";
import Footer from "../Footer";

interface ILayout {
  children?: JSX.Element | HTMLElement | string | never[];
}

const Layout: React.FC<ILayout> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
