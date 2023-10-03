import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import Section6 from './components/Section6/Section6';

export default function App() {
  return (
    <View style={styles.container}>
       {/* <Section1 /> */}
       {/* <Section2 /> */}
       {/* <Section3 /> */}
       {/* <Section4 /> */}
       {/* <Section5 /> */}
       <Section6 />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#FF4B3A',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
