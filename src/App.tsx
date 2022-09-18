import React, { FC, ReactElement } from "react";
import { Navigation } from "./UI/organisms";
import { Socials } from "./UI/molecules";
import { StyledApp, StyledContent } from "./App.sc";
import { Home, About, Projects, Blog, Contact } from "./UI/pages";
import { useAppSelector } from "./hooks/hooks";

const App: FC = (): ReactElement => {
  const activeTab = useAppSelector((state) => state.navigation.activeTab);

  return (
    <StyledApp>
      <Navigation />
      <StyledContent>
        {activeTab === "Home" && <Home />}
        {activeTab === "About" && <About />}
        {activeTab === "Projects" && <Projects />}
        {activeTab === "Blog" && <Blog />}
        {/* {activeTab === "Contact" && <Contact />} */}
      </StyledContent>
      <Socials />
    </StyledApp>
  );
};

export default App;
