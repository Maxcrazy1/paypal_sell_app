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
import SocialSignInButtons from '../../components/SocialSiginInButton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onSignInPressed = () => {
    // navigation.navigate('Home');

    axios
      .post('http://10.0.2.2:3000/login', {
        user: {
          email,
          password,
        },
      })
      .then(function (response) {
        console.log(JSON.stringify(response));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ResetPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton onPress={onSignInPressed} text="Inicia Sesión" />
        <SocialSignInButtons />

        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot password"
          type="TERTIARY"
        />

        <CustomButton
          onPress={onSignUpPressed}
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
