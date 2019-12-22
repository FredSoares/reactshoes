import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/gobal';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
