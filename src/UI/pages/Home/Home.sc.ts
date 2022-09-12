import styled from "styled-components";
import { colors } from "assets/common/colors";
const { red, white } = colors;

export const StyledHome = styled.div``;
export const StyledContent = styled.div`
  margin: 7% 0 0 10%;
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const StyledTitle = styled.h1`
  color: ${red};
  font-size: 5rem;
`;
export const StyledIntro = styled.p`
  color: ${white};
  font-size: 2rem;
`;
export const StyledImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 10%;
  width: 25%;
`;
