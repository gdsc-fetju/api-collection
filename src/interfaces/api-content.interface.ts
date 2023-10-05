export interface IApiContent {
  name: string;
  categories: string[];
  url: string;
  description: string;
  free: boolean;
}

export interface IApiContentList {
  [key: string]: IApiContent;
}