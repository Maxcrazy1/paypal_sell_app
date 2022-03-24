import {View, Text} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {selectCurrentUser} from '../../store/auth/reducer';

const mapStateToProps = state => {
  return {
    user: selectCurrentUser(state),
  };
};
const Index = ({user}) => {
  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Welcome {user}</Text>
    </View>
  );
};

export default connect(mapStateToProps, null)(Index);
