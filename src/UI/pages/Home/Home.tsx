import React from "react";
import {
  StyledHome,
  StyledTitle,
  StyledIntro,
  StyledContent,
  StyledImage,
} from "./Home.sc";
import { images } from "assets/common/images";
const { ms } = images;
// import { resume } from 'assets/common/resume'

const Home = () => {
  return (
    <StyledHome>
      <StyledContent>
        <StyledTitle>Monika Swidzinska</StyledTitle>
        <StyledIntro>
          I am a Frontend Developer with extensive JavaScript experience,
          passionate about bringing design to life. I am a mentor for aspiring
          developers and Ironhack ambasador.
        </StyledIntro>
      </StyledContent>
      <StyledImage src={ms} alt="Monika Swidzinska" />
    </StyledHome>
  );
};

export default Home;
