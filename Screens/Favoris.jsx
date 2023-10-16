import React from "react";
import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";
import CustomButton from "../components/ressources/Button";

const Favoris = () => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View style={styles.icone}>
          <View style={styles.chevron}>
            <Image source={require("../assets/chevron-left.png")} />
          </View>
          <View style={styles.favorite}>
            <Image source={require("../assets/Favorite.png")} />
          </View>
        </View>

        <View  style={styles.image}>
          <Image source={require("../assets/Plat.png")} />
        </View>
        <View style={styles.desc}>
          <Text style={styles.titre}>Veggie tomato mix</Text>
          <Text style={styles.price}>N1,900</Text>
          <View>
            <Text style={styles.soustitre}>Delivery info</Text>
            <Text style={styles.description}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text>
          </View>
          <View>
            <Text style={styles.soustitre}>Delivery info</Text>
            <Text style={styles.description}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text>
          </View>
          <View style={{ marginLeft: 20, marginTop: -80 }}>
            <CustomButton title="Add to cart" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Favoris

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  icone: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chevron: {
    display: 'flex',
    marginLeft: 10
  },
  favorite: {
    display: 'flex',
    marginRight: 10
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200
  },
  cart: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  desc: {
    // backgroundColor: "#f2f2f2",
    // flex: 0.5,
    position: 'relative',
    marginStart: 20,
    width: 350,
    marginTop: 100
  },
  titre: {
    fontSize: 28,
    fontWeight: '900',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  price: {
    color: 'red',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  soustitre: {
    fontSize: 17,
    fontWeight: '600',
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 20,
  },
});