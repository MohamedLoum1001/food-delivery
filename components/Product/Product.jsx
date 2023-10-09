import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Product () {
  return (
    <View style={{ display: "flex", flex: 1,  flexDirection: "row", position: "relative", marginBottom: 40,}}>
      <View style={styles.entete}>
        <Image source={require("../../assets/chevron-left.png")} style={{display: 'flex', position: 'absolute', right: 150}} />
        <Image source={require("../../assets/Favorite.png")} style={{display: 'flex', position: 'absolute', left: 130}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  entete: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    marginBottom: 40,
  },
});
