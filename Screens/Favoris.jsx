import React from 'react'
import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";
// import CustomButton from '../components/ressources/Button';
// import Slider from '../components/Product/Slider';


const Favoris = () => {
  const handleButtonPress = () => {
    Alert.alert("Bouton appuyé !");
  };
  return (
    <View>
      <Text>Favoris</Text>
    </View>
    // <View style={styles.cart}>
    //   <SafeAreaView>
    //     <View style={styles.image}>
    //       <View style={styles.fleche}>
    //         <Image source={require("../assets/chevron-left.png")} />
    //       </View>
    //       <View style={styles.coeur}>
    //         <Image source={require("../assets/Favorite.png")} />
    //       </View>
    //     </View>
    //     <Slider
    //       images={[
    //         require("../assets/Plat.png"),
    //       ]}
    //     />
    //     <View style={styles.desc}>
    //       <Text style={styles.titre}>Veggie tomato mix</Text>
    //       <Text style={styles.price}>N1,900</Text>
    //       <View>
    //         <Text style={styles.soustitre}>Delivery info</Text>
    //         <Text style={styles.description}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text>
    //       </View>
    //       <View>
    //         <Text style={styles.soustitre}>Delivery info</Text>
    //         <Text style={styles.description}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text>
    //       </View>
    //       <View style={{ marginLeft: 20 }}>
    //         <CustomButton title="Add to cart" onPress={handleButtonPress} />
    //       </View>
    //     </View>
    //   </SafeAreaView>
    // </View>
  );
}

export default Favoris

const styles = StyleSheet.create({
  image: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25
    
  },
  fleche: {
display: 'flex',
justifyContent: 'flex-start',
marginRight: 290
  },
  coeur: {
    display: 'flex',
    justifyContent: 'flex-end'
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
    backgroundColor: "#f2f2f2",
    flex: 0.5,
    position: 'relative',
    marginStart: 20,
    width: 350,
  },
  titre: {
    fontSize: 28,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  price: {
    color: 'red',
    fontSize: 22,
    fontWeight: 700,
    textAlign: 'center',
  },
  soustitre: {
    fontSize: 17,
    fontWeight: 600,
  },
  description: {
    fontSize: 15,
    fontWeight: 400,
    marginBottom: 20,
  },
});