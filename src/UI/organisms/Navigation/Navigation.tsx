import React from "react";
import { UseWindowSize } from "../../../hooks";

import {
  StyledMobileNav,
  StyledNavigation,
  StyledNavItem,
} from "./Navigation.sc";
// import { resume } from 'assets/common/resume'

const Navigation = () => {
  const { width } = UseWindowSize();
  const navItems = ["Home", "About", "Projects", "Blog", "Contact"];

  return (
    <>
      {width && width < 700 ? (
        <div>
          <StyledMobileNav>Mobile Nav</StyledMobileNav>
        </div>
      ) : (
        <StyledNavigation>
          {navItems.map((item: string) => (
            <StyledNavItem
              key={item}
              // onClick={() => dispatch(setActiveTab(item))}
              // onClick={console.log(item)}
            >
              <p>{item}</p>
            </StyledNavItem>
          ))}
        </StyledNavigation>
      )}
      ;
    </>
  );
};

export default Navigation;
