import React from "react";
import { ListAboutImagesType } from "./types";

interface ILocation {
  location: ListAboutImagesType;
  showModal?: () => void;
  closeModal?: () => void;
  modal: boolean;
  setModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultValues: ILocation = {
  location: [],
  modal: !false,
};

export const LocationContext = React.createContext(defaultValues);
