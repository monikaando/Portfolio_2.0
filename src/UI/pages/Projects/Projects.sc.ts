import styled from "styled-components";

import { colors } from "../../../assets/common/colors";
const { red, white } = colors;

export const StyledProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
`;
export const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  max-width: 70%;
  /* height: 15rem; */
`;
export const StyledButtons = styled.div`
  margin: 2rem 0;
`;
export const StyledTitle = styled.h2`
  color: ${red};
`;

export const StyledText = styled.p`
  color: ${white};
  margin: 0;
`;
