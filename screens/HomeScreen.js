import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, StatusBar, Button } from 'react-native';
import { light, dark } from "../assets/colors/colors"
import { SafeAreaView } from 'react-native-safe-area-context';
// import {Porsche-Taycan.png} from "../../assets/images"


function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={light.accent}></StatusBar>
            <View style={[styles.box, styles.elevation]}>
                <Text style={styles.header}>Porshce Taycan</Text>
                <Image style={styles.image} source={require('../assets/images/Porsche-Taycan.png')} />
                <View style={styles.info}>

                    <Text style={styles.own_button}>Car Details</Text>
                </View>
                <View style={styles.interactions}>

                    <View style={styles.small_box_up}>
                        <Text style={styles.own_button}>Car Details</Text>
                    </View>
                    <View style={styles.small_box_up}>
                        <Text style={styles.own_button}>Range</Text>

                    </View>
                    <View style={styles.small_box_up}>

                        <Text style={styles.own_button} >Control Car</Text>
                    </View>
                </View>
                <View style={styles.interactions}>

                    <View style={styles.small_box_down}>
                        <Text style={styles.own_button} >Browse Cars</Text>

                    </View>
                    <View style={styles.small_box_down}>
                        <Text style={styles.own_button}>Manage Membership</Text>

                    </View>
                    <View style={styles.small_box_down}>

                        <Text style={styles.own_button}>User Setting</Text>
                    </View>
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
        alignItems: 'center',
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
    interactions: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
        
    },
    info: {
        backgroundColor: 'green',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        height: '20%',
        
    },
    small_box_up: {
        backgroundColor: 'orange',
        borderColor: 'black',
        borderWidth: 1,
        elevation: 5,
        padding: 20,
        marginTop: 15,
        marginLeft: 8,
        marginRight: 8,
        width: '30%',
        height: '70%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    small_box_down: {
        backgroundColor: 'orange',
        borderColor: 'black',
        borderWidth: 1,
        elevation: 5,
        padding: 20,
        marginLeft: 8,
        marginRight: 8,
        width: '30%',
        height: '70%',
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
    header: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: '200',
        marginTop: 20,

        // resizeMode: 'contain',
        // backgroundColor: 'red',
    },
    own_button: {
        textAlign: 'center',
    },

})

export default HomeScreen;
