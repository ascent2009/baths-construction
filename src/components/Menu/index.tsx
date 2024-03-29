import React from "react";

interface IMenu {
  children: any;
  className: string;
}

const Menu: React.FC<IMenu> = ({ children, className }) => {
  return <nav className={className}>{children}</nav>;
};

export default Menu;
