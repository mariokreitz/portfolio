export type Project = {
  id: number;
  name: string;
  descriptionEN: string;
  descriptionDE: string;
  screenshotUrl: string;
  tech: {
    imgSrc: string;
    name: string;
  }[];
  repoUrl: string;
  demoUrl: string;
};
