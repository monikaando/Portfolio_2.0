import React from "react";
import { StyledNavigation, StyledNavItem } from "./Navigation.sc";
// import { resume } from 'assets/common/resume'

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledNavItem>Home</StyledNavItem>
      <StyledNavItem>About</StyledNavItem>
      <StyledNavItem>Projects</StyledNavItem>
      <StyledNavItem>Blog</StyledNavItem>
      <StyledNavItem>Contact</StyledNavItem>
    </StyledNavigation>
  );
};

export default Navigation;
