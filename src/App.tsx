import { FC, ReactElement } from "react";

import { Navigation } from "UI/organisms";
import Home from "UI/pages/Home/Home";
import { StyledApp, StyledContent } from "./App.sc";

const App: FC = (): ReactElement => {
  return (
    <StyledApp>
      <Navigation />
      <StyledContent>
        <Home />
        {/* here add rendering content acording to what was clicked in the menu */}
        {/* {activeTab === 'home' && ()} */}
      </StyledContent>
      {/* <Socials/> */}
    </StyledApp>
  );
};

export default App;
