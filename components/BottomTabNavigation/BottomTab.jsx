import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../../Screens/Home';
import Favoris from '../../Screens/Favoris';
import User from '../../Screens/User';
import History from '../../Screens/History';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTab = () => {
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
                  <Icon
                    onPress={() => navigateToScreenInTab(navigation, 'Home')}
                  />
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
            <Stack.Screen name='Favoris' component={Favoris} />
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
            <Stack.Screen name='User' component={User} />
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
            <Stack.Screen name='History' component={History} />
          </Stack.Navigator>
        );
      };
  return (
    <NavigationContainer>
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
              <FontAwesome name='home' size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='Favoris'
          component={FavorisStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name='heart' size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='User'
          component={UserStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name='user' size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='History'
          component={HistoryStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name='history' size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTab

const styles = StyleSheet.create({});