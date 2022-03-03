import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import SignIn from './src/screens/Auth/SignIn';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <SignIn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
