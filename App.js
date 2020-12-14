import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';

// redux
import { Provider } from 'react-redux'
import { store, persistor } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
