import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from "./theme/theme";
import { Router } from "./components/router/Router";

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
