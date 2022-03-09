import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';

const ConfirmEmail = () => {
  const [email, setEmail] = useState('');

  const onConfirmEmailPressed = () => {
    console.warn('ConfirmEmail');
  };

  const onForgotPasswordPressed = () => {
    console.warn('PasswordPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>¿Has olvidado la contraseña?</Text>
        <CustomInput
          placeholder="Correo eléctronico"
          value={email}
          setValue={setEmail}
        />
        <CustomButton onPress={onConfirmEmailPressed} text="Enviar código" />

        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Ya recordaste? Inicia sesión"
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
export default ConfirmEmail;
