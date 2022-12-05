import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './components/App/App.jsx';
import { store, persistor } from 'redux/store.js';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/Global.style.js';
import { theme } from './constants/theme';
import { Box } from './components/Box/Box.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="Unsplash-Image-Search-REST-API">
      <Box>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
            <GlobalStyle />
          </PersistGate>
        </Provider>
      </Box>
    </BrowserRouter>
  </React.StrictMode>
);
