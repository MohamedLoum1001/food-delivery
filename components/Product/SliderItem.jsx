import React, { useEffect } from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const SliderItem = ({ image, onSlideChange }) => {
  useEffect(() => {
    // Appeler la fonction de rappel lorsque la diapositive change
    onSlideChange();
  }, []);

  return (
    <Image source={image} resizeMode="cover" style={styles.image} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 400, // Ajustez la hauteur selon vos besoins
  },
});

export default SliderItem;