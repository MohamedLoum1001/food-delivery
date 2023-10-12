import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import History from './Screens/History';
import User from './Screens/User';
import Favoris from './Screens/Favoris';
import Home from './Screens/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [isReady, setIsReady] = useState(false);

  async function loadFonts() {
    await Promise.all([
      Ionicons.loadAsync({}),
      MaterialIcons.loadAsync({}),
      FontAwesome.loadAsync({
        'FontAwesome': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf'),
      }),
      // Chargez d'autres polices si nécessaire
    ]);
    setIsReady(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  const HomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name='HomeStack'
          component={Home}
          options={{
            headerRight: () => <Icon />,
          }}
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
        <Stack.Screen name='FavorisStack' component={Favoris} />
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
         <Stack.Screen name='UserStack' component={User} />
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
        <Stack.Screen name='HistoryStack' component={History} />
      </Stack.Navigator>
    );
  };

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
