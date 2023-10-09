import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { View } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <View style= {{ display: 'flex', alignItems: 'center', }}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    width: 300,
    borderRadius: 20,
    position: 'absolute',
    alignItems: "center",
    top: 100,
    left: 7,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 50,

  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomButton;
