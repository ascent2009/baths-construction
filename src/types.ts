export type ListImageType =
  | {
      id: string;
      title: string;
      url: string;
      price: string;
      description: string;
      novelty: string;
      // link: string;
    }[];

export type ListFeaturesType =
  | {
      ID: string;
      link: string;
      description: string;
    }[];

export type ListAboutImagesType =
  | {
      url: string;
    }[];

export type ListBlogImagesType =
  | {
      date: string;
      chapter: string;
      title: string;
      url: string;
    }[];

export type ListExampleImagesType =
  | {
      id: number;
      url: string;
    }[];

export type ListCarcassParamsImageType =
  | {
      id: number;
      title: string;
      url: string;
      description: string;
    }[];

export type ListLayoutType =
  | {
      title: string;
      subtitle: string;
      url: string;
      price: string;
      description: string;
      turnkey: string;
      ask: string;
      getcost: string;
    }[];

export type ListExtraOptionsImageType =
  | {
      id: number;
      title: string;
      url: string;
      price: string;
      description: string;
    }[];

export type ListBlogKnowHowType =
  | {
      link: string;
      date: string;
      title: string;
      url: string;
      description: string;
      subtitle: string;
    }[];

export type ListInfoType =
  | {
      link: string;
      id: number;
      title: string;
      url: string;
    }[];
