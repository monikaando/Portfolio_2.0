import React from "react";
import {
  StyledHome,
  StyledTitle,
  StyledIntro,
  StyledButtons,
  StyledContent,
  StyledImage,
} from "./Home.sc";
import { images, links } from "../../../assets/common/links";
import { Button } from "../../atoms";
const { businessPhoto } = images;
const { resume, email } = links;

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
          <Button color={"red"} text={"Resume"} link={resume} />
          <Button color={"grey"} text={"Contact"} link={email} />
        </StyledButtons>
      </StyledContent>
      <StyledImage src={businessPhoto} alt="Monika Swidzinska" />
    </StyledHome>
  );
};

export default Home;
