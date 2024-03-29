import React from "react";
import {
  ListAboutImagesType,
  ListFeaturesType,
  ListBlogImagesType,
  ListExampleImagesType,
  ListImageType,
  ListCarcassParamsImageType,
  ListLayoutType,
  ListExtraOptionsImageType,
  ListBlogKnowHowType,
  ListInfoType,
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
  carcassImages: ListExampleImagesType;
  carcassParamsImages: ListCarcassParamsImageType;
  classicBarrelImages: ListImageType;
  peakBarrelImages: ListAboutImagesType;
  liraCarcassImages: ListAboutImagesType;
  layoutImages: ListLayoutType;
  slides: ListAboutImagesType;
  extraOptionsImages: ListExtraOptionsImageType;
  sections: ListCarcassParamsImageType;
  blogKnowHowImages: ListBlogKnowHowType;
  infoImages: ListInfoType;
  workshopImages: ListExampleImagesType;
  faqImages: ListExampleImagesType;
  projectImages: ListCarcassParamsImageType;
  gorkyImages: ListExampleImagesType;
  basinImages: ListExtraOptionsImageType;
  roundBasinImages: ListAboutImagesType;
  layoutRoundImages: ListLayoutType;
  roundPriceImages: ListCarcassParamsImageType;
  extraCatalogueImages: ListInfoType;
  extraSelectionImages: ListImageType;
  extraBlogImages: ListBlogKnowHowType;
  extraGalleryImages: ListAboutImagesType
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
  carcassImages: [],
  carcassParamsImages: [],
  classicBarrelImages: [],
  peakBarrelImages: [],
  liraCarcassImages: [],
  layoutImages: [],
  slides: [],
  extraOptionsImages: [],
  sections: [],
  blogKnowHowImages: [],
  infoImages: [],
  workshopImages: [],
  faqImages: [],
  projectImages: [],
  gorkyImages: [],
  basinImages: [],
  roundBasinImages: [],
  layoutRoundImages: [],
  roundPriceImages: [],
  extraCatalogueImages: [],
  extraSelectionImages: [],
  extraBlogImages: [],
  extraGalleryImages: []
};

export const LocationContext = React.createContext(defaultValues);

export const AppContext = React.createContext(appValues);
