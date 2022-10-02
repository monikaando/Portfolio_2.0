import styled from "styled-components";

import { colors } from "../../../assets/common/colors";
const {
  red,
  mediumRed,
  darkRed,
  white,
  grey,
  darkGrey,
  transparentGrey,
  transparentLightGrey,
} = colors;

export const StyledContactcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledContactTitle = styled.h1`
  color: ${red};
  margin-bottom: 3rem;
`;
export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StyledContactFormInput = styled.input`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  border-radius: 0.1rem;
  padding-left: 1rem;
  width: 30vw;
  background-color: ${transparentGrey};
  border: none;
  color: ${white};
  margin: 0.2rem 0;
  &::placeholder {
    color: ${white};
  }
`;

export const StyledContactFormTextarea = styled.textarea`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  border-radius: 0.1rem;
  padding-left: 1rem;
  width: 30vw;
  background-color: ${transparentGrey};
  border: none;
  margin: 1rem 0 1rem 0;
  color: ${white};
  &::placeholder {
    color: ${white};
  }
`;

export const StyledButton = styled.button`
  z-index: 1;
  padding: 0.5rem 2.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.4rem;
  color: ${white};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-decoration: none;
  width: fit-content;
  border: none;
  color: ${white};
  background: ${darkRed};
  cursor: pointer;

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
`;
