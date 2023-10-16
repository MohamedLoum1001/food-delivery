import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Dimensions, View, TouchableOpacity } from "react-native";
import SliderItem from "./SliderItem";

const { width } = Dimensions.get("window");

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <SliderItem image={item} onSlideChange={() => handleSlideChange(index)} />
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
          );
          setCurrentIndex(newIndex);
        }}
      />
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              { backgroundColor: index === currentIndex ? "#fff" : "rgba(255, 255, 255, 0.5)" },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Pour positionner les indicateurs
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 10, // Ajustez la position verticale selon vos besoins
    left: 0,
    right: 0,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5, // Ajustez l'espacement horizontal selon vos besoins
  },
});

export default Slider;