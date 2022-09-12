import React from "react";
import {
  StyledHome,
  StyledTitle,
  StyledIntro,
  StyledButtons,
  StyledContent,
  StyledImage,
} from "./Home.sc";
import Button from "UI/atoms/Button/Button";
import { images, resume, email } from "assets/common/links";
const { ms } = images;

const Home = () => {
  return (
    <StyledHome>
      <StyledContent>
        <StyledTitle>Monika Swidzinska</StyledTitle>
        <StyledIntro>
          <p>
            I am a <b>Frontend Developer</b> with extensive JavaScript
            experience, passionate about bringing design to life.
          </p>
          <p>
            I am a <b>mentor</b> for aspiring developers as well as an{" "}
            <b> Ironhack ambassador</b>.
          </p>
        </StyledIntro>
        <StyledButtons>
          <Button color={"red"} text={"Resume"} link={resume.link} />
          <Button color={"grey"} text={"Contact Me"} link={email.email} />
        </StyledButtons>
      </StyledContent>
      <StyledImage src={ms} alt="Monika Swidzinska" />
    </StyledHome>
  );
};

export default Home;
