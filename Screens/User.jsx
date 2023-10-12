import React,{useState} from 'react'
import { Image, Text, Alert, TextInput, View, StyleSheet } from "react-native";
import { CheckBox, Icon } from "@rneui/themed";
import HeaderFilArien from '../components/ressources/header';
import CustomButton from '../components/ressources/Button';

const User = () => {
  const handleButtonPress = () => {
    Alert.alert("Bouton appuyé !");
  };
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  return (
    <View style={{ display: "flex", marginTop: 40, position: "relative", display: 'flex', height: 500,}}>
      <HeaderFilArien title="My Profil" />

      <View style={{ display: 'flex', flex: 1, top: 0, alignItems: 'center'}}>
        <View>
          <Text style={styles.titre}>Information</Text>
          <View style={styles.container}>
            <Image
              source={require("../assets/Profil.png")}
              style={styles.image}
            />
            <View style={styles.column}>
              <Text style={{fontSize: 16, fontWeight: 'bold',}}>Marvis Ighedosa</Text>
              <Text style={{fontSize: 13, marginTop: 6,}}>dosamarvis@gmail.com</Text>
              <Text style={{fontSize: 12, marginTop: 10, position: "relative",}}>
                No 15 uti street off ovie palace road effurun delta state
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.titre}>Payment Method</Text>
          <View style={{ padding: 10, backgroundColor: "#fff", borderRadius: 15, }}>
            <View style={styles.option}>
              <CheckBox
                checkedIcon={
                  <Icon
                    name="radio-button-checked"
                    type="material"
                    color="red"
                    size={15}
                  />
                }
                uncheckedIcon={
                  <Icon
                    name="radio-button-unchecked"
                    type="material"
                    color="grey"
                    size={15}
                  />
                }
                checked={check1}
                onPress={() => setCheck1(!check1)}
              />
              <View style={styles.right}>
                <View style={styles.logo}>
                  <Image source={require("../assets/Card.png")} style={styles.icons} />
                </View>
                <Text style={styles.libele}>Card</Text>
              </View>
            </View>

            <View style={styles.option}>
              <CheckBox
                checkedIcon={
                  <Icon
                    name="radio-button-checked"
                    type="material"
                    color="red"
                    size={15}
                  />
                }
                uncheckedIcon={
                  <Icon
                    name="radio-button-unchecked"
                    type="material"
                    color="grey"
                    size={15}
                  />
                }
                checked={check2}
                onPress={() => setCheck2(!check2)}
              />
              <View style={styles.right}>
                <View style={styles.logo2}>
                  <Image source={require("../assets/Bank.png")} />
                </View>
                <Text style={styles.libele}>Bank account</Text>
              </View>
            </View>

            <View style={styles.option}>
              <CheckBox
                checkedIcon={
                  <Icon
                    name="radio-button-checked"
                    type="material"
                    color="red"
                    size={15}
                  />
                }
                uncheckedIcon={
                  <Icon
                    name="radio-button-unchecked"
                    type="material"
                    color="grey"
                    size={15}
                  />
                }
                checked={check3}
                onPress={() => setCheck3(!check3)}
              />
              <View style={styles.right}>
                <View style={styles.logo3}>
                  <Image source={require("../assets/Paypal.png")} style={styles.icons3} />
                </View>
                <Text style={styles.libele}>Paypal</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginLeft: 30, }}>
        <CustomButton title="Updatet" onPress={handleButtonPress} />
      </View>
    </View>
  );
}

export default User

const styles = StyleSheet.create({
  titre: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    display: "flex",
    left: 0,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    marginBottom: 30,
  },
  image: {
    marginRight: 10,
  },
  column: {
    margin: 10,
    marginRight: 50,
    paddingRight: 15,
  },
  option: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 10,
    width: 300,
  },
  logo: {
    backgroundColor: '#F47B0A',
    padding: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  logo2: {
    backgroundColor: '#EB4796',
    padding: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  logo3: {
    backgroundColor: '#0038FF',
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  icons: {
    width: 18,
    height: 18,
  },
  icons3: {
    width: 12,
    height: 12,
  },
  libele: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginLeft: 10, 
    marginTop: 10, 
    fontSize: 16,
  },
  right: {
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderColor: 'grey',
    width: 220,
  },
});