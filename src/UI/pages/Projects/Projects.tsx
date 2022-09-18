import React from "react";
import { projects } from "../../../assets/copy/projects";
import { Project } from "../../../interfaces";
import YouTubeVideo from "../../../thirdParty/YouTube";
import { Button } from "../../atoms";
import {
  StyledProjects,
  StyledProject,
  StyledButtons,
  StyledContent,
  StyledTitle,
  StyledText,
} from "./Projects.sc";

const Projects = () => {
  return (
    <StyledProjects>
      {projects.map((item: Project) => (
        <StyledProject key={item.id}>
          {" "}
          <StyledTitle>{item.title}</StyledTitle>
          <YouTubeVideo videoId={item.videoId} />{" "}
          <StyledButtons>
            {item.github ? (
              <Button color={"red"} text={"Github"} link={item.github} />
            ) : null}
            {item.live_version ? (
              <Button
                color={"grey"}
                text={"Website"}
                link={item.live_version}
              />
            ) : null}
          </StyledButtons>
          <StyledContent>
            <StyledText>{item.description}</StyledText>
            {item.description2 ? (
              <StyledText>{item.description2}</StyledText>
            ) : null}
            <StyledText>
              <b>Stack:</b> {item.stack}
            </StyledText>
            {item.test ? (
              <>
                <StyledText>
                  <b>Login:</b> {item.test.login}
                </StyledText>
                <StyledText>
                  <b>Password:</b> {item.test.password}
                </StyledText>
              </>
            ) : null}
          </StyledContent>
        </StyledProject>
      ))}
    </StyledProjects>
  );
};
export default Projects;
