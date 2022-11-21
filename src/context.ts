import React from "react";
import {
  ListAboutImagesType,
  ListFeaturesType,
  ListBlogImagesType,
  ListExampleImagesType,
  ListImageType,
} from "./types";

interface ILocation {
  location: ListAboutImagesType;
  showModal?: (e: any, name: string) => void;
  closeModal?: () => void;
  modal: boolean;
  setModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IApp {
  prodFeatures: ListFeaturesType;
  aboutImages: ListAboutImagesType;
  blogImages: ListBlogImagesType;
  examplesImages: ListExampleImagesType;
  prodImages: ListImageType;
  barrelImages: ListExampleImagesType;
}

export const defaultValues: ILocation = {
  location: [],
  modal: !false,
};

export const appValues: IApp = {
  prodFeatures: [],
  aboutImages: [],
  blogImages: [],
  examplesImages: [],
  prodImages: [],
  barrelImages: [],
};

export const LocationContext = React.createContext(defaultValues);

export const AppContext = React.createContext(appValues);
