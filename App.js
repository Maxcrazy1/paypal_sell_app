import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Orders from './pages/Orders/List';
import DetailsOrder from './pages/Orders/Details';

const Search = () => (
  <View style={styles.container}>
    <Text>Search</Text>
  </View>
);

const App = () => {
  const Tab = createBottomTabNavigator(); // here!
  return (
    <NavigationContainer>
      {/* here! */}
      <Tab.Navigator>
        <Tab.Screen name="orders" component={Orders} />
        <Tab.Screen name="details" component={DetailsOrder} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
