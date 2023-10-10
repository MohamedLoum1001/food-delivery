import React from 'react';
import { StyleSheet, Sta, Text, View } from "react-native";
// import { Provider } from "react-native-paper";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/login/Login";
import Profil from "./components/Profil/Profil";
import SignIn from './components/login/SignUp';
import Product from "./components/Product/Product";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>


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
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 15,
    margin: 0,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    height: 850,
  },
});
