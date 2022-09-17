import styled, { css } from "styled-components";
import { colors } from "../../../assets/common/colors";

const { white, mediumRed, darkRed, grey, darkGrey } = colors;

type StyledButtonProps = {
  color: "red" | "grey";
};
export const StyledButton = styled.a<StyledButtonProps>`
  z-index: 1;
  padding: 0.5rem 2.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.4rem;
  color: ${white};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-decoration: none;
  width: fit-content;
  margin-right: 4rem;

  ${({ color }) =>
    color === "red" &&
    css`
      color: ${white};
      background: ${darkRed};
      &:hover {
        background: ${mediumRed};
        color: ${white};
      }
    `}
  ${({ color }) =>
    color === "grey" &&
    css`
      background-color: ${grey};
      color: ${white};
      &:hover {
        color: ${white};
        background-color: ${darkGrey};
      }
    `}
`;
