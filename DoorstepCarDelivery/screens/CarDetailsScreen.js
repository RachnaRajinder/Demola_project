import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Text, Image } from 'react-native';
import { light, dark } from "../assets/colors/colors"
import { SafeAreaView } from 'react-native-safe-area-context';
import CarSelectionScreen from './CarSelectionScreen';
import { useRoute } from '@react-navigation/native';

function CarDetailsScreen() {
    const route = useRoute()
    const { id, name, fueltype, image, rating, price, topSpeed, enginePower, acceleration, bodyType } = route.params || { id: 1 }
    console.log("toimiiko", id, name)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={light.accent}></StatusBar>
                <View style={[styles.box, styles.elevation]}>
                    <Text style={styles.header}>{name}</Text>
                    <Text style={styles.EngineHeader}>{fueltype}</Text>
                    <Image style={styles.image} source={(image)} />
                    <View style={styles.box}>
                    <Text style={styles.specs}>{topSpeed} km/h</Text>
                    <Text style={styles.specsHeader}>Top speed</Text>
                    <Text style={styles.specs}>{enginePower} kw</Text>
                    <Text style={styles.specsHeader}>Engine Power</Text>
                    <Text style={styles.specs}>{acceleration} s</Text>
                    <Text style={styles.specsHeader}>acceleration 0 - 100 km/h</Text>
                    </View>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: light.background,
        justifyContent: 'center',
        alignItems:'center',
    },
    box: {
        flex: 1,
        flexDirection: 'column',
        width: '90%',
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: light.box,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    },
    elevation: {
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 7,
    },
    image: {
        width: '90%',
        height: '200',
        marginTop: 10,
        paddingHorizontal: 10,
        alignContent: 'center',
    },
    header: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
    },
    specs: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingLeft: 10,
        paddingTop: 20
    },
    specsHeader: {
        color:'#9a9897',
        paddingLeft: 10,

    },
    EngineHeader: {
        color:'#9a9897',
        paddingLeft: 10,
        textAlign: 'center',
    },
})

export default CarDetailsScreen;
