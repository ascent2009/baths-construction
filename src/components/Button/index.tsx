import React from "react";
import s from "./style.module.scss";

interface IButton {
  children?: HTMLElement | JSX.Element | string;
  title?: string;
  className?: string;
  // onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IButton> = ({ children, title, className, onClick }) => {
  return (
    <button type="button" className={s[`${className}`]} onClick={onClick}>
      {children}
      {title}
    </button>
  );
};

export default Button;
