import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Image } from 'react-native';


const Section5 = () => {
    return (
        <View style={styles.Section2}>

           
            <Image style={styles.Ima}
                source={require('../../assets/wifi.png')}

            />
            <Text style={styles.Par}>No internet Connection </Text>
            <Text style={styles.Pa}>Your internet connection is currently not available please check or try again.</Text>

            <TouchableOpacity style={styles.Btn}>
                <Text style={{ color: 'white' }}>Try again</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    Section2: {
        marginTop: 150,

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
    Btn: {
        backgroundColor: 'red',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 40,
        marginLeft: 80,
        marginTop: 100,
    }

});

export default Section5
