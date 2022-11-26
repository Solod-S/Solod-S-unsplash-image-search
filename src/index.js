import '@csstools/normalize.css';
import 'Css/my_preset.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Box } from './components/Box/Box.jsx';
import { App } from './components/App.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box
      // bg="backGroundColor"
      // display="flex"
      // flexDirection="column"
      // alignItems="end"
      // height="100vh"
      // justifyContent="center"
      >
        <BrowserRouter basename="Unsplash-Image-Search-REST-API">
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);
