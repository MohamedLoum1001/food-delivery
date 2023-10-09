import React, { useState } from "react";
import { Image, Text, Alert, TextInput, View, StyleSheet } from "react-native";
import CustomButton from "../ressources/Button";

export default function SignIn() {
  
  return (
    <View
      style={{
        padding: 10,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingBottom: 80,
      }}
    >
      <View style={styles.login}>
        <View>
          <Text style={{ paddingTop: 20 }}>Email address</Text>
          <TextInput style={styles.input} placeholder="Enter your email" />
        </View>
        <View>
          <Text style={{ paddingTop: 20 }}>Password</Text>
          <TextInput style={styles.input} placeholder="*  *  *  *  *  *  * " />
        </View>
        <Text style={{ color: "#FA4A0C", paddingTop: 20 }}>
          Forgot password ?
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 60,
        }}
      >
        <CustomButton title="Login"
          onPress={() =>
            this.props.navigation.navigate('Profil')
          } />
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  login: {
    display: "flex",
    alignItems: "space-beetwen",
    paddingTop: 10,
    width: 300,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
  },
});
