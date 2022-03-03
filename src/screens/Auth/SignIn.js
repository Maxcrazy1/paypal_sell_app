import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('SignIn');
  };

  const onForgotPasswordPressed = () => {
    console.warn('PasswordPressed');
  };

  const onSignInFb = () => {
    console.warn('sign fb');
  };
  const onSignInGmail = () => {
    console.warn('sign gmail');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"></Image>

        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton onPress={onSignInPressed} text="Inicia Sesión" />

        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot password"
          type="TERTIARY"
        />

        <CustomButton
          onPress={onSignInFb}
          text="Inicia con Facebook"
          type="TERTIARY"
          bgColor="#e7eaf4"
          fgColor="#4765a9"
        />

        <CustomButton
          onPress={onSignInGmail}
          text="Inicia con Google"
          type="TERTIARY"
          bgColor="#fae9ea"
          fgColor="#dd4d44"
        />

        <CustomButton
          onPress={onSignInGmail}
          text="Inicia con Apple"
          type="TERTIARY"
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <CustomButton
          onPress={onForgotPasswordPressed}
          text="¿No tienes cuenta? Registrate!"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    height: 200,
  },
});
export default SignIn;
