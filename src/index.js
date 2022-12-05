import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'styles/Global.style.js';
import { Box } from './components/Box/Box.jsx';
import { App } from './components/App/App.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box>
        <Provider store={store}>
          <BrowserRouter basename="Unsplash-Image-Search-REST-API">
            <PersistGate loading={null} persistor={persistor}>
              <App />
              <GlobalStyle />
            </PersistGate>
          </BrowserRouter>
        </Provider>
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);
