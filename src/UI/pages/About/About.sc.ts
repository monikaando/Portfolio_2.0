import styled from "styled-components";

import { colors } from "../../../assets/common/colors";
const { red, white } = colors;

export const StyledAbout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const StyledImage = styled.img`
  height: 25rem;
`;
export const StyledContent = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  text-align: justify;
`;
export const StyledTitle = styled.h1`
  color: ${red};
`;

export const StyledText = styled.p`
  color: ${white};
  font-weight: 500;
`;
