import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Sidebar = ({ navigation }) => {
  const closeSidebar = () => {
    navigation.closeDrawer();
  };

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    closeSidebar(); // Fermer le sidebar après la navigation
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
        <Icon name="profile" size={20} color="#FFF" />
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Order')}>
        <Icon name="shopping-cart" size={20} color="#FFF" />
        <Text style={styles.text}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('OfferAndPromo')}>
        <Icon name="tag" size={20} color="#FFF" />
        <Text style={styles.text}>Offer and promo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('PrivacyPolicy')}>
        <Icon name="shield" size={20} color="#FFF" />
        <Text style={styles.text}>Privacy policy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Security')}>
        <Icon name="lock" size={20} color="#FFF" />
        <Text style={styles.text}>Security</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa4a0c',
    color: '#fff',
    padding: 20,
  },
  text: {
    color: '#FFF',
    marginLeft: 10, // Espacement entre l'icône et le texte
  },
});

export default Sidebar;