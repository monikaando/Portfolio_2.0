import styled from "styled-components";
import { colors } from "../../../assets/common/colors";
const { red, white } = colors;

export const StyledHome = styled.div``;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;
export const StyledTitle = styled.h1`
  color: ${red};
  font-size: 3rem;
`;
export const StyledIntro = styled.div`
  p {
    color: ${white};
    font-size: 1.5rem;
    font-weight: 200;
    margin: 0;
  }
`;
export const StyledButtons = styled.div`
  margin-top: 5rem;
  min-width: 40vw;
`;
export const StyledImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 10%;
  width: 24%;
`;
