<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import Section6 from './components/Section6/Section6';

export default function App() {
  return (
    <View style={styles.container}>
       <Section1 />
       {/* <Section2 /> */}
       {/* <Section3 /> */}
       {/* <Section4 /> */}
       {/* <Section5 /> */}
       {/* <Section6 /> */}

      <StatusBar style="auto" />
    </View>
)};
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//     paddingBottom: 15,
//     margin: 0,
//     backgroundColor: "#f2f2f2",
//     alignItems: "center",
//     justifyContent: "center",
//     height: 850,
//   },
// });
=======
import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import History from './Screens/History';
import User from './Screens/User';
import Favoris from './Screens/Favoris';
import Home from './Screens/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const navigateToScreenInTab = (navigation, screenName) => {
    navigation.navigate(screenName);
  };

<<<<<<< HEAD
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
=======
export default function App() {
  return (
    // <View style={{ backgroundColor: "#f2f2f2"}}>
    //   {/* <Login /> */}
    //   <Product />
    //   {/* <Product /> */}

    // </View>

    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Profil" component={Profil} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
>>>>>>> 9ede97e82993b9b5f3706964c090d924d3c72abf
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
<<<<<<< HEAD
=======


    // <Provider>
    //   <NavigationContainer>
    //     <Stack.Navigator
    //       initialRouteName="StartScreen"
    //       screenOptions={{
    //         headerShown: false,
    //       }}
    //     >
    //       <Stack.Screen name="Login" component={Login} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </Provider>

    // <View style={styles.container}>
    //   <Login/>
    // </View>
>>>>>>> 9ede97e82993b9b5f3706964c090d924d3c72abf
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
>>>>>>> b48915c6957ccd44da75fc2f5463adbd7bdddd12
