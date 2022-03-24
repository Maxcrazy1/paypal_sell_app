import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
