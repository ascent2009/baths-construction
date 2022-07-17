export type ListImageType =
  | {
      id: string;
      title: string;
      url: string;
      price: string;
      description: string;
      novelty: string;
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
