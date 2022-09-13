import styled from "styled-components";
import { colors } from "assets/common/colors";
const { white } = colors;

export const StyledNavigation = styled.div`
  position: fixed;
  right: 1rem;
  top: 0;
  display: flex;
`;

export const StyledNavItem = styled.a`
  color: ${white};
  margin: 1rem 2.2rem 2rem 0;
  font-size: 1.5rem;
  font-weight: 600;
`;
