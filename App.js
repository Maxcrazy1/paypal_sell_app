import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import SignIn from './src/screens/Auth/SignIn';
import SignUp from './src/screens/Auth/SingUp';
import ConfirmEmail from './src/screens/Auth/ConfirmEmail';
import ResetPassword from './src/screens/Auth/ResetPassword';
import NewPassword from './src/screens/Auth/NewPassword';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <NewPassword />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
