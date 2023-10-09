import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Importez l'icône FontAwesome (vous pouvez utiliser d'autres icônes aussi)


const HeaderFilArien = ({ title }) => {
  return (
    <View style={styles.entete}>
      <Image source={require("../../assets/chevron-left.png")} />
      <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: 150,}}>
        <Text style={{ fontSize: 16, fontWeight: "bold"}}>{title}</Text>
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

export default HeaderFilArien;
