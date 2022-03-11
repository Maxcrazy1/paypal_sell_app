import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmail = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const onConfirmEmailPressed = () => {
    navigation.navigate('NewPassword');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
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
          onPress={onSignInPressed}
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
