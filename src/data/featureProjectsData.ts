import { IFeatureProjects } from "../lib";

export const featureProjectsData: IFeatureProjects[] = [
  {
    projectName: "Sofa Project",
    image: {
      before: {
        src: "/images/before-after-images/sofaAfter.jpeg",
        alt: "Image of the sofa after it was styled by our stylists",
      },
      after: {
        src: "/images/before-after-images/sofaBefore.jpeg",
        alt: "Image of the sofa before it was styled by our stylists",
      },
    },
  },
  {
    projectName: "Chair Project",
    image: {
      before: {
        src: "/images/before-after-images/chairAfter.jpeg",
        alt: "Image of the chair after it was styled by our stylists",
      },
      after: {
        src: "/images/before-after-images/chairBefore.jpeg",
        alt: "Image of the chair before it was styled by our stylists",
      },
    },
  },
];
