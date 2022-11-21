import React from "react";
import s from "./style.module.scss";

interface IButton {
  title: string;
  className: string;
  // onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IButton> = ({ title, className, onClick }) => {
  return (
    <button type="button" className={s[`${className}`]} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
