import styled from "styled-components";

import { colors } from "../../../assets/common/colors";
const { red, white, transparentGrey, transparentLightGrey, grey } = colors;

export const StyledAbout = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const StyledImage = styled.img`
  width: 50vw;
  border-radius: 8rem;
  border: 5px solid ${transparentGrey};
`;
export const StyledContent = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: column;
  text-align: justify;
`;
export const StyledTitle = styled.h1`
  color: ${red};
`;
export const StyledTexts = styled.div`
  background-color: ${transparentGrey};
  padding: 1.5rem 3rem;
  width: 50vw;
  position: absolute;
  top: 14vw;
  left: 38vw;
  border-radius: 0.2rem;
`;

export const StyledText = styled.p`
  color: ${white};
  text-align: justify;
`;
