import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';
import { cardImage } from '../../Data/Data';

export default function CardMenu() {
    return (
        <View style={styles.container}>
            {cardImage.map(item => (
                <View style={styles.card} key={item.id}>
                    {/* Section pour l'en-tête de la carte */}
                    <View style={styles.cardHeader}>
                        <Image source={item.img} style={styles.img} />
                    </View>

                    {/* Section pour le titre et le texte */}
                    <View style={styles.title}>
                        <Text style={styles.titre}>{item.titre}</Text>
                        <Text style={styles.texte}>{item.texte}</Text>
                    </View>

                    {/* Section pour le prix */}
                    <View style={styles.viewPrix}>
                        <Text style={styles.prix}>{item.prix}</Text>
                    </View>
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
        alignItems: 'center',
    },
    card: {
        width: 170,
        height: 250,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 30,
        position: 'relative',
        zIndex: 1,
        marginLeft: 70,
        marginTop: 50,
        // padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -350,
        position: 'relative',
        zIndex: 1
    },
    cardHeader: {
        elevation: 5,
        position: 'absolute',
        zIndex: 300,
        paddingTop: 20
    },
    img: {
        borderRadius: 30,
        marginTop: -170,
        width: 100,
        height: 100,

        display: 'flex'
    },
    title: {
        // marginTop: 70,
        paddingTop: 20
    },
    titre: {
        fontWeight: '600',
        fontSize: 22,
        textAlign: 'center'
    },
    texte: {
        fontWeight: '600',
        // padding: 20,
        fontSize: 22,
        textAlign: 'center'
    },
    viewPrix: {
        marginTop: 20,
    },
    prix: {
        color: '#FA4A0C',
        fontSize: 17,
        fontWeight: '700',
        fontStyle: 'normal',
        textAlign: 'center'
    }
});
