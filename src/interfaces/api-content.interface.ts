export interface IApiContent {
  name: string;
  categories: string[];
  url: string;
  description: string;
  free: boolean;
  image?: string;
}

export interface IApiContentList {
  [key: string]: IApiContent;
}
