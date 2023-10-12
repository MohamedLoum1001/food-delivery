import React from 'react'
import { View, Text, StyleSheet,  } from 'react-native'
import { Image } from 'react-native';


const Section6 = () => {
    return (
        <View style={styles.Section2}>

          
                <Image style={styles.Image}
                    source={require('../../assets/chevron-left.png')}
                />
                <Text style={styles.Para}>My offers</Text>

            <Image style={styles.Ima}
                // source={require('../../assets/search.png')}

            />
            <Text style={styles.Par}>ohh snap!  No offers yet </Text>
            <Text style={styles.Pa}>Bella dose have any offers yet please check again. </Text>

          
        </View>
    );
}

const styles = StyleSheet.create({
    Section2: {


    },
   
    Image: {
        marginLeft: 50,
        marginTop: 80,
    },
    Para: {
      
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50,
        marginBottom: 150,
        marginTop: 20,

    },
    Ima: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 130,
        marginTop: 50,

    },
    Par: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 140,
        marginTop: 30,
    },
    Pa: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 100,
        marginTop: 20,
    },
   

});

export default Section6
