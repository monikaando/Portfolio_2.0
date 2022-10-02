import React from "react";
import { projects } from "../../../assets/copy/projects";
import { Project } from "../../../interfaces";
import { Button } from "../../atoms";
import {
  StyledProjects,
  StyledProject,
  StyledButtons,
  StyledContent,
  StyledTitle,
  StyledYear,
  StyledText,
  StyledTextSpace,
  StyledCredentials,
} from "./Projects.sc";

const Projects = () => {
  return (
    <StyledProjects>
      {projects.map((item: Project) => (
        <StyledProject key={item.id}>
          <StyledTitle>{item.title}</StyledTitle>
          <StyledYear>Made in {item.year}</StyledYear>
          <iframe
            width="700"
            height="480"
            frameBorder="0"
            src={`https://www.youtube.com/embed/${item.videoId}`}
            title={item.title}
            allowFullScreen
          ></iframe>
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
            <StyledTextSpace>
              <b>Stack:</b> {item.stack}
            </StyledTextSpace>
            {item.test ? (
              <StyledTextSpace>
                <StyledCredentials>Testing credentials:</StyledCredentials>
                <StyledText>
                  <u>Login:</u> {item.test.login}
                </StyledText>
                <StyledText>
                  <u>Password:</u> {item.test.password}
                </StyledText>
              </StyledTextSpace>
            ) : null}
          </StyledContent>
        </StyledProject>
      ))}
    </StyledProjects>
  );
};
export default Projects;
