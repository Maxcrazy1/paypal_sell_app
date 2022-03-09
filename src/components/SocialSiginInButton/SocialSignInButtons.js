import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
  const onSignInFb = () => {
    console.warn('sign fb');
  };
  const onSignInGmail = () => {
    console.warn('sign gmail');
  };

  return (
    <>
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
    </>
  );
};

export default SocialSignInButtons;
