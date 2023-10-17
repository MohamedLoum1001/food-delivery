import { StyleSheet, View, Image, Text, TextInput, ScrollView, } from 'react-native';
import React from 'react';
import MenU from '../components/Menu/Menu';
import CardMenu from '../components/CardMenu/CardMenu';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.image} >
          <View style={styles.toggler}>
            <Image source={require('../assets/icons/toggler.png')} />
          </View>
          <View style={styles.panier}>
            <Image source={require('../assets/icons/panier.png')} />
          </View>
        </View>
      
        <View style={styles.form}>
          <View style={styles.titre}>
            <Text style={styles.texte}>Delicious</Text>
            <Text style={styles.texte}>food for you</Text>
          </View>
         
          <View style={styles.input}>
            <Image source={require('../assets/icons/icon-recherche.png')} style={styles.recherche} />
            <TextInput placeholder='Search' style={styles.placeholder} />
          </View>
        </View>
        
        <View>
        
          <View>
            <MenU />
          </View>
       
          <View>
            <CardMenu />
          </View>
        </View>
        {/* <View>
        <Text style={styles.seeMore}>see more</Text>
      </View> */}

      </ScrollView>
    </View>

  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  image: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
    marginTop: -50
  },
  toggler: {
    marginRight: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 20
  },
  panier: {
    marginRight: 20,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",

  },
  titre: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 120,
    marginTop: -50


  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texte: {
    fontSize: 34,
    fontWeight: '700'

  },
  // input
  input: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    border: 'none',
    marginBottom: 100,
    borderRadius: 30,
    backgroundColor: '#EFEEEE',
    padding: 10,
    marginTop: 20,
    width: 314,
    height: 60,
  },
  recherche: {
    marginLeft: 10,
    marginTop: 10
  },
  placeholder: {
    color: '#000000',
    marginLeft: 20,
    fontSize: 17,
    fontWeight: '600',
    width: 250

  },
  seeMore: {
    color: '#FA4A0C',
    fontSize: 15,
    fontWeight: 400
  },
  Tab: {
    backgroundColor: 'tranparent',
    position: 'fixed',
    marginTop: 370,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none'
  }
});
