import React, { useContext } from "react";
import s from "./style.module.scss";
import { LocationContext } from "../../context";

export const Overlay = () => {
  const { closeModal } = useContext(LocationContext);
  return <div className={s.overlay} onClick={closeModal}></div>;
};
