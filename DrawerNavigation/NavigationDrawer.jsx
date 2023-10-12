import { StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../SidebarScreen/Profile';
import Order from '../SidebarScreen/Order';
import OfferAndPromo from '../SidebarScreen/OfferAndPromo';
import PrivacyPolicy from '../SidebarScreen/PrivacyPolicy';
import Security from '../SidebarScreen/Security';

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen
      name="Profile"
      component={Profile}
      options={{
        drawerIcon: ({ color, size }) => (
          <FontAwesome name="profile" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="Order"
      component={Order}
      options={{
        drawerIcon: ({ color, size }) => (
          <FontAwesome name="buy" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="OfferAndPromo"
      component={OfferAndPromo}
      options={{
        drawerIcon: ({ color, size }) => (
          <FontAwesome name="offer" size={size} color={color} />
        ),
      }}
    />
     <Drawer.Screen
      name="PrivacyPolicy"
      component={PrivacyPolicy}
      options={{
        drawerIcon: ({ color, size }) => (
          <FontAwesome name="privacy" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="Security"
      component={Security}
      options={{
        drawerIcon: ({ color, size }) => (
          <FontAwesome name="security" size={size} color={color} />
        ),
      }}
    />
  </Drawer.Navigator>
  )
}

export default NavigationDrawer

const styles = StyleSheet.create({})