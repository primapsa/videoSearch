import '@mantine/core/styles.css';
import '@/styles/index.scss';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from './Router';
import { theme } from './theme';
import { store, persistor } from './store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MantineProvider theme={theme}>
        <Router />
      </MantineProvider>
    </PersistGate>
  </Provider>
);
export default App;
