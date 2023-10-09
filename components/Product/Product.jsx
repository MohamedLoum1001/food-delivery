import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Swiper from 'react-native-swiper';

export default function Product () {
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide}>
        <Image
          source={require('../../assets/Plat.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../../assets/Plat2.jpeg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../../assets/Plat3.jpeg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
