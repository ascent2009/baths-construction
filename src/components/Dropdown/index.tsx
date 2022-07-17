import React from "react";

interface IDropdown {
  children: Element[] | string | JSX.Element[];
  className: string;
}

const Dropdown: React.FC<IDropdown> = ({ children, className }) => {
  return <section className={className}>{children}</section>;
};

export default Dropdown;
