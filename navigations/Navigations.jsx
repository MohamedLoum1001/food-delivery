
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/login/Login';
import AppComponent from '../components/App/AppComponent';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AppComponent" component={AppComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
