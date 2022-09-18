import React from "react";
import { projects } from "../../../assets/copy/projects";
import { Project } from "../../../interfaces";
import YouTubeVideo from "../../../thirdParty/YouTube";
import { StyledProject, StyledTitle, StyledDescription } from "./Projects.sc";

const Projects = () => {
  return (
    <>
      {projects.map((item: Project) => (
        <StyledProject key={item.id}>
          <YouTubeVideo videoId={item.videoId} />
          <StyledTitle>{item.title}</StyledTitle>
          <StyledDescription>{item.description}</StyledDescription>
        </StyledProject>
      ))}
    </>
  );
};
export default Projects;
