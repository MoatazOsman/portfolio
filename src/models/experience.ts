export interface Experience {
  date: string;
  title: string;
  companyName: string;
  companyRegion: string;
  description: string;
  projects: Project[];
}

interface Project {
  title: string;
  description: string;
  stores?: Store[];
}

interface Store {
  type: STORE;
  url: string;
}

export enum STORE {
  APPSTORE,
  GOOGLE_PLAY,
  WEB,
  APP_GALLERY,
}
