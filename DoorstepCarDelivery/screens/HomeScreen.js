import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, StatusBar, Button, TouchableOpacity, Alert } from 'react-native';
import { light, dark } from "../assets/colors/colors"
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from '@/components/GradientButton';
// import {Porsche-Taycan.png} from "../../assets/images"


function HomeScreen() {
    const navigation = useNavigation();

    const navigateToCarDetails = () => {
        navigation.navigate('Car details')
    }
    const navigateToCarControl = () => {
        // navigation.navigate('CarControl')
        Alert.alert('Navigating', 'to car control screen')
    }
    const navigateToUserSettings = () => {
        // navigation.navigate('UserSettings')
        Alert.alert('Navigating', 'to user settings screen')
    }
    const navigateToMembership = () => {
        // navigation.navigate('Membership')
        Alert.alert('Navigating', 'to membership screen')
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#fcc951'></StatusBar>
            <View style={[styles.box, styles.elevation]}>
                <Text style={styles.header}>Porshce Panamera</Text>
                <Image style={styles.image} source={require('../assets/images/Porsche-Taycan.png')} />
                <View style={styles.info}>

                    <View style={styles.infoUp}>

                        <Text style={styles.infoText}> Panamera 4 E-Hybrid</Text>
                        <Text style={styles.infoHeader}>Model </Text>
                        <Text style={styles.infoText}> 148km</Text>
                        <Text style={styles.infoHeader}>Range </Text>
                    </View>
                    <View style={styles.infoDown}>
                        <Text style={styles.infoText}>Work</Text>
                        <Text style={styles.infoHeader}>Location</Text>
                        <Text style={styles.infoText}>Hannu</Text>
                        <Text style={styles.infoHeader}>Current Profile</Text>
                    </View>
                </View>

                <View style={styles.interactions}>

                    <View style={styles.buttonElevation}>
                        <GradientButton text={'Car Details'} navigate={navigateToCarDetails} style={styles.button} />
                    </View>
                    <View style={styles.buttonElevation}>
                        <GradientButton text={'Car Control'} navigate={navigateToCarControl} style={styles.button} />
                    </View>

                </View>
                <View style={styles.interactions}>

                    <View style={styles.buttonElevation}>
                        <GradientButton text={'User Settings'} navigate={navigateToUserSettings} style={styles.button} />
                    </View>
                    <View style={styles.buttonElevation}>
                        <GradientButton text={'Manage Membership'} navigate={navigateToMembership} style={styles.button} />
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
        borderRadius: 10,
        paddingBottom: 30,

    },
    interactions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '4%',
        height: '20%'
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
    },
    infoText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    infoHeader: {
        flexWrap: 'wrap',
        color: '#9a9897',
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 20,

    },
    info: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft: 20,
        marginRight: 20,

    },
    infoUp: {
        justifyContent: 'center',
        width: '50%',
    },
    infoDown: {
        justifyContent: 'center',
        width: '50%',
    },
    button: {
        padding: '5%',
        width: '100%',
        height: '100%',
        textOverflow: ''
    },
    buttonElevation: {
        width: '50%',
        height: '100%',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 10,
        marginHorizontal: '1%',

    },


})

export default HomeScreen;
