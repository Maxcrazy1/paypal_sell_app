import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';

const ConfirmEmail = () => {
  const [code, setCode] = useState('');

  const onConfirmEmailPressed = () => {
    console.warn('ConfirmEmail');
  };

  const onForgotPasswordPressed = () => {
    console.warn('PasswordPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>
          Inserta el código para restablecer la contraseña
        </Text>
        <CustomInput placeholder="Usuario" value={code} setValue={setCode} />
        <CustomButton onPress={onConfirmEmailPressed} text="Restablecer" />

        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Reenviar código"
          type="SECONDARY"
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
export default ConfirmEmail;
