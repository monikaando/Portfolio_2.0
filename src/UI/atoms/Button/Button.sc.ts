import styled, { css } from "styled-components";
import { colors } from "../../../assets/common/colors";

const { white, mediumRed, darkRed, grey, darkGrey } = colors;

type StyledButtonProps = {
  color: "red" | "grey";
};
export const StyledButton = styled.button<StyledButtonProps>`
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
  border: none;
  ${({ color }) =>
    color === "red" &&
    css`
      color: ${white};
      background: ${darkRed};

      &:hover {
        background: ${mediumRed};
        color: ${white};
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
      }
      &:active {
        transform: translateY(-2px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
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
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
      }
      &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      }
    `};
`;
