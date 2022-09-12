import { FC, ReactElement } from 'react'

import { Navigation } from 'UI/organisms'
import { StyledApp } from './App.sc'

const App: FC = (): ReactElement => {
  return (
    <StyledApp>
     <Navigation />
    </StyledApp>
  );
}

export default App;
