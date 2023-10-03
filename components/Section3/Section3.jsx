import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Image } from 'react-native';


const Section3 = () => {
    return (
        <View style={styles.Section2}>

            <View >
                <Image style={styles.Image}
                    source={require('../../assets/chevron-left.png')}
                />

            </View>
            <View>
                <Text style={styles.Para}>Orders</Text>

            </View>
            <Image style={styles.Ima}
                source={require('../../assets/Order.png')}

            />
            <Text style={styles.Par}>No orders yet </Text>
            <Text style={styles.Pa}>Hit the orange button down below to Create an order </Text>

            <TouchableOpacity style={styles.Btn}>
                <Text style={{ color: 'white' }}>Start odering</Text>
            </TouchableOpacity>
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
    Btn: {
        backgroundColor: 'red',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 40,
        marginLeft: 80,
        marginTop: 150,
    }

});

export default Section3
