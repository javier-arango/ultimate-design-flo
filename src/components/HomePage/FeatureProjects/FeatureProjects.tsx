import styles from "./FeatureProjects.module.css";

import { IFeatureProjects } from "lib";

import { CompareImages, InfoBlock } from "@components/common";

export const FeatureProjects = ({
  projects,
}: {
  projects: IFeatureProjects[];
}) => {
  return (
    <InfoBlock headline="Featured Projects">
      <div className={`padding-responsive ${styles.container}`}>
        {projects.map((project) => (
          <CompareImages
            key={project.projectName}
            before={{
              src: project.image.before.src,
              alt: project.image.before.alt,
            }}
            after={{
              src: project.image.after.src,
              alt: project.image.after.alt,
            }}
          />
        ))}
      </div>
    </InfoBlock>
  );
};
