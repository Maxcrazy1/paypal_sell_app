import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import SignIn from './src/screens/Auth/SignIn';
import SignUp from './src/screens/Auth/SingUp';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <SignUp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
