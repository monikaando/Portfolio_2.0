import styled from "styled-components";
import { colors } from "../../../assets/common/colors";
const { white } = colors;

export const StyledMobileNav = styled.h4`
  color: ${white};
`;
export const StyledNavigation = styled.div`
  position: fixed;
  right: 1rem;
  top: 0;
  display: flex;
`;

export const StyledNavItem = styled.button`
  color: ${white};
  margin: 1rem 2.2rem 2rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  background: none;
  border-style: none;
`;
