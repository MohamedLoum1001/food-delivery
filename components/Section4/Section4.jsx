import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { Image } from 'react-native';


const Section4 = () => {
    return (
        <View style={styles.Section2}>

            <View >
                <Image style={styles.Image}
                    source={require('../../assets/chevron-left.png')}
                />

            </View>
            <View>
                <Text style={styles.Para}>Spicy chieckns</Text>

            </View>
            <Image style={styles.Ima}
                source={require('../../assets/search.png')}

            />
            <Text style={styles.Par}>Item not found </Text>
            <Text style={styles.Pa}>Try searching the item with a different keyword. </Text>

          
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 150,
        marginBottom: 150,
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

export default Section4
