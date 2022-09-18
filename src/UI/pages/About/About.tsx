import React from "react";

import {
  StyledAbout,
  StyledImage,
  StyledContent,
  StyledTitle,
  StyledText,
} from "./About.sc";
import { images } from "../../../assets/common/links";
const { ironhackPhoto } = images;

const About = () => {
  return (
    <StyledAbout>
      <StyledImage
        src={ironhackPhoto}
        alt="Monika Swidzinska Ironhack Amsterdam"
      />
      <StyledContent>
        <StyledTitle>Who I am?</StyledTitle>
        <StyledText>
          I am Frontend Developer with React and Vue expertise based in the
          Netherlands. I enjoy working in an Agile team and developing modern
          solutions for websites and applications, especially in close
          collaboration with UX/UI designers.
        </StyledText>
        <StyledText>
          After years in the marketing industry, I decided to pursue my dream of
          building an international career as a Frontend Developer. As a result
          of my excellent performance at Ironhack Fullstack Web Development
          Bootcamp, I was offered the position of Teacher Assistant. My career
          path then led me to work for various projects and companies.
        </StyledText>
        <StyledText>
          I currently work for Samsung Electronics Benelux using ReactJS and
          creating marketing pages, components, web apps, A/B testing scripts
          and much more.
        </StyledText>
        <StyledText>
          As an Ironhack Ambassardor, I am working closely with the school,
          helping them grow and prosper.
        </StyledText>
        <StyledText>
          On top of my day job, I'm a mentor who supports others on their
          journey to becoming Frontend Developers.
        </StyledText>
        <StyledText>
          If I am not coding, you can find me clibing in a boulder gym,
          rollerskating in a park, or exploring new places.
        </StyledText>
      </StyledContent>
    </StyledAbout>
  );
};
export default About;
