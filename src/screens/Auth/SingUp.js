import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onSignUpPressed = () => {
    console.warn('SignUp');
  };

  const onForgotPasswordPressed = () => {
    console.warn('PasswordPressed');
  };

  const onSignUpFb = () => {
    console.warn('sign fb');
  };
  const onSignUpGmail = () => {
    console.warn('sign gmail');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Crea tu propia cuenta</Text>
        <CustomInput
          placeholder="Usuario"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Contraseña"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Confirmar contraseña"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        <CustomButton onPress={onSignUpPressed} text="Registrate" />

        <Text style={styles.text}>
          Al registrate aceptas nuestros{' '}
          <Text onPress={onSignUpFb} style={styles.link}>
            terminos y condiciones
          </Text>
        </Text>
        <CustomButton
          onPress={onSignUpFb}
          text="Inicia con Facebook"
          type="TERTIARY"
          bgColor="#e7eaf4"
          fgColor="#4765a9"
        />

        <CustomButton
          onPress={onSignUpGmail}
          text="Inicia con Google"
          type="TERTIARY"
          bgColor="#fae9ea"
          fgColor="#dd4d44"
        />

        <CustomButton
          onPress={onSignUpGmail}
          text="Inicia con Apple"
          type="TERTIARY"
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Ya tienes cuenta? Inicia sesión"
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#fdb075',
  },
});
export default SignUp;
