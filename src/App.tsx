import React, { FC, ReactElement } from "react";
import { Navigation } from "./UI/organisms";
import { Socials } from "./UI/molecules";
import { StyledApp, StyledContent } from "./App.sc";
import { Home } from "./UI/pages";

const App: FC = (): ReactElement => {
  return (
    <StyledApp>
      <Navigation />
      <StyledContent>
        <Home />
        {/* here add rendering content acording to what was clicked in the menu */}
        {/* {activeTab === 'home' && ()} */}
      </StyledContent>
      <Socials />
    </StyledApp>
  );
};

export default App;
