export type Project = {
  id: number;
  name: string;
  description: string;
  screenshotUrl: string;
  tech: {
    imgSrc: string;
    name: string;
  }[];
  repoUrl: string;
  demoUrl: string;
};
