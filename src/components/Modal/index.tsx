import React from "react";

interface IModal {
  children: JSX.Element | { url: string }[] | any;
  className: string;
  id?: string;
}

const Modal: React.FC<IModal> = ({ children, className, id }) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

export default Modal;
