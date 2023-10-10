import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import History from '../../Screens/History';
import User from '../../Screens/User';
import Favoris from '../../Screens/Favoris';
import Home from '../../Screens/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppComponent = () => {
  const navigateToScreenInTab = (navigation, screenName) => {
    navigation.navigate(screenName);
  };

  const HomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <Icon onPress={() => navigateToScreenInTab(navigation, 'Home')} />
            ),
          })}
        />
      </Stack.Navigator>
    );
  };

  const FavorisStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name='Favoris'
          component={Favoris}
          options={({ navigation }) => ({
            headerRight: () => (
              <Icon onPress={() => navigateToScreenInTab(navigation, 'Favoris')} />
            ),
          })}
        />
      </Stack.Navigator>
    );
  };

  const UserStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name='User'
          component={User}
          options={({ navigation }) => ({
            headerRight: () => (
              <Icon onPress={() => navigateToScreenInTab(navigation, 'User')} />
            ),
          })}
        />
      </Stack.Navigator>
    );
  };

  const HistoryStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name='History'
          component={History}
          options={({ navigation }) => ({
            headerRight: () => (
              <Icon onPress={() => navigateToScreenInTab(navigation, 'User')} />
            ),
          })}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          tabStyle: {
            backgroundColor: 'transparent',
          },
          showLabel: false,
          activeTintColor: '#FA4A0C',
          inactiveTintColor: '#ADADAF',
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name='Favoris'
          component={FavorisStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="heart" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name='User'
          component={UserStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name='History'
          component={HistoryStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="history" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppComponent;

const styles = StyleSheet.create({});
