import React from "react";

interface IModal {
  children: JSX.Element | { url: string }[] | any;
  className: string;
}

const Modal: React.FC<IModal> = ({ children, className }) => {
  return <section className={className}>{children}</section>;
};

export default Modal;
