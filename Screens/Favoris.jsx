import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Favoris = () => {
  const navigation = useNavigation();
 
  return (
    <View>
      <Text>Bonjour Favoris</Text>
      <Button
        title="Go to UserProfile"
        onPress={() => navigation.navigate('UserProfile')}
      />
    </View>
  );
}

export default Favoris

const styles = StyleSheet.create({
});