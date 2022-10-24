import styled, { css } from "styled-components";
import { colors } from "../../../assets/common/colors";
const { white, darkRed } = colors;

type StyledNavItemProps = {
  activeTabNav: string;
};
export const StyledMobileNav = styled.h4`
  color: ${white};
`;
export const StyledNavigation = styled.nav`
  position: fixed;
  right: 1rem;
  top: 0;
  display: flex;
`;

export const StyledNavItem = styled.a<StyledNavItemProps>`
  background: none;
  border-style: none;
  margin: 1.5rem 2.2rem 2rem 0;
  cursor: pointer;
  span {
    color: ${white};
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }
  ${({ activeTabNav }) =>
    activeTabNav &&
    css`
      border-bottom: 2px solid ${white};
    `}
`;
