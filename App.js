// App.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import Favoris from './Screens/Favoris';
import User from './Screens/User';
import History from './Screens/History';
import HoverImage from './components/HoverImage/HoverImage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Import des icônes
const house = require('./assets/icons/home.png');
const favorite = require('./assets/icons/heart.png');
const users = require('./assets/icons/user.png');
const historie = require('./assets/icons/history.png');

const iconSize = 24; // Taille commune des icônes

const App = () => {
  const HomeStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );

  const FavorisStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Favoris' component={Favoris} />
    </Stack.Navigator>
  );
  
  

  const UserStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='User' component={User} />
    </Stack.Navigator>
  );

  const HistoryStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='History' component={History} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FA4A0C',
          tabBarInactiveTintColor: '#ADADAF',
          tabBarShowLabel: false,
          tabBarItemStyle: {
            backgroundColor: 'transparent',
          },
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
        }}
      >
        <Tab.Screen
          name='HomeStack'
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <HoverImage
                source={house}
                size={24}
                activeColor="#FA4A0C"
                inactiveColor={focused ? '#FA4A0C' : '#ADADAF'}
                screenName="HomeStack" 
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='FavorisStack'
          component={FavorisStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <HoverImage
                source={favorite}
                size={24}
                activeColor="#FA4A0C"
                inactiveColor={focused ? '#FA4A0C' : '#ADADAF'}
                screenName="FavorisStack"
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='UserStack'
          component={UserStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <HoverImage
                source={users}
                size={iconSize}
                activeColor='#FA4A0C'
                inactiveColor={focused ? '#FA4A0C' : '#ADADAF'}
                screenName="UserStack" 
              />
            ),
            headerShown: false,
          }}
        />
         <Tab.Screen
          name='HistoryStack'
          component={HistoryStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <HoverImage
                source={historie}
                size={24}
                activeColor="#FA4A0C"
                inactiveColor={focused ? '#FA4A0C' : '#ADADAF'}
                screenName="HistoryStack" 
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
