import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { navlink } from "../../Data/Data";

export default function MenU() {
  
  return (
    <View style={styles.container}>
      {navlink.map(link => (
        <View style={styles.link}>
          <TouchableOpacity key={link.id} style={styles.menu}>
            <Text style={styles.navLink}>{link.lien}</Text>
          </TouchableOpacity>

        </View>
      ))}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -50,
    marginRight: 15
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    // marginLeft: 50,
    // marginRight: 5
  },

  navLink: {
    color: '#9A9A9D',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 'normal',
    // lineHeight: 'normal'

  }
});