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
  width: 40%;
`;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
export const StyledButtons = styled.div`
  margin: 2rem 0;
`;
export const StyledTitle = styled.h2`
  color: ${red};
  margin-bottom: 0;
`;
export const StyledYear = styled.p`
  color: ${white};
  font-size: 0.6rem;
  font-weight: 500;
`;

export const StyledText = styled.p`
  color: ${white};
  margin-top: 0.1rem;
`;
export const StyledCredentials = styled.div`
  font-weight: 700;
  margin: 1rem 0;
`;
export const StyledTextSpace = styled.div`
  color: ${white};
  margin-top: 1rem;
`;
