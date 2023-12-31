import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyles} />
          <App />
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
