import styled from "styled-components";
import { colors } from "assets/common/colors";
const { red, white } = colors;

export const StyledHome = styled.div``;
export const StyledContent = styled.div`
  margin: 10% 0 0 10%;
  display: flex;
  flex-direction: column;
  width: 52%;
`;

export const StyledTitle = styled.h1`
  color: ${red};
  font-size: 4.5rem;
`;
export const StyledIntro = styled.div`
  p {
    color: ${white};
    font-size: 2rem;
    font-weight: 200;
    margin: 0;
  }
`;
export const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0;
  margin-top: 5rem;
`;
export const StyledImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 10%;
  width: 25%;
`;
