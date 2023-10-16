import React from 'react'
import { Text, View, StyleSheet, Button  } from "react-native";

const User = ({navigation}) => {
  return (
    <View>
      <Text>Bonjour User</Text>
      <Button
        title="Go to UserProfile"
        onPress={() => navigation.navigate('UserProfile')}
      />
    </View>
  );
}

export default User

const styles = StyleSheet.create({});