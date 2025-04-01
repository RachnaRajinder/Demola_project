import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Text, Image, ScrollView, Button, TouchableOpacity, Alert } from 'react-native';
import { light, dark } from "../assets/colors/colors"
import { SafeAreaView } from 'react-native-safe-area-context';
import CarSelectionScreen from './CarSelectionScreen';
import { useRoute } from '@react-navigation/native';
import GradientButton from '@/components/GradientButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

function CarDetailsScreen() {
    const route = useRoute()
    const { id, name, fueltype, image, rating, price, topSpeed, 
            enginePower, acceleration, bodyType, numOfCylinders, 
            trans, seats, fuelConsumption } = route.params || { id: 1 }
    console.log("toimiiko", id, name)

    const BookNow = () => {
        Alert.alert('booking page')
    }

    return (
    <ScrollView>
        <SafeAreaView style={styles.container}>
            
            <StatusBar backgroundColor={light.accent}></StatusBar>
                    <Text style={styles.header}>{name}</Text>
                    <Text style={styles.EngineHeader}>{fueltype}</Text>
                    <Image style={styles.image} source={(image)} />
                    <Text style={styles.bodyType}> {bodyType} </Text>
                    <Text style={styles.BodyHeader}> Body Type </Text>

                    <Text style={styles.smallHeader}> Features </Text>

                    <View style={styles.infoBox}>
                    
                    <View style={styles.box}>
                    <Ionicons name={'speedometer-outline'} size={42} color={light.accent} style={styles.icon}/>
                    <Text style={styles.specs}>{topSpeed} km/h</Text>
                    <Text style={styles.specsHeader}>Top speed</Text>
                    </View>

                    <View style={styles.box}>
                    <Ionicons name={'stats-chart-outline'} size={42} color={light.accent} style={styles.icon}/>
                    <Text style={styles.specs}>{enginePower} kw</Text>
                    <Text style={styles.specsHeader}>Engine Power</Text>
                    </View>

                    <View style={styles.box}>
                    <Ionicons name={'cellular-outline'} size={42} color={light.accent} style={styles.icon}/>
                    <Text style={styles.specs}>{acceleration} s</Text>
                    <Text style={styles.specsHeader}>Acceleration 0 - 100 km/h</Text>
                    </View>

                    <View style={styles.box}>
                    <Ionicons name={'cog-outline'} size={42} color={light.accent} style={styles.icon}/>
                    <Text style={styles.specs}>{numOfCylinders}</Text>
                    <Text style={styles.specsHeader}>Number of cylinders</Text>
                    </View>

                    <View style={styles.box}>
                    <Ionicons name={'git-branch-outline'} size={42} color={light.accent} style={styles.icon}/>
                    <Text style={styles.specs}>{trans}</Text>
                    <Text style={styles.specsHeader}>Transmission</Text>
                    </View>

                    <View style={styles.box}>
                    <Ionicons name={'man-outline'} size={42} color={light.accent} style={styles.icon}/>
                    <Text style={styles.specs}>{seats}</Text>
                    <Text style={styles.specsHeader}>Seats</Text>
                    </View>
                    
                    </View>

                    <GradientButton text={'Book now'} style={styles.BookButton} onPress={() => alert(`Booking ${name}`)}/>
        </SafeAreaView>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: light.background,
    },
    box: {
        width: '43%',
        height: '28%',
        margin: 12,
        backgroundColor: light.box,
        borderRadius: 10,
    },
    infoBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: light.accent,
        borderTopWidth: 2,
    },
    elevation: {
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 7,
    },
    image: {
        width: '100%',
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
        paddingTop: 10
    },
    specsHeader: {
        color:'#9a9897',
        paddingLeft: 10,
        marginBottom: 20,
    },
    BodyHeader: {
        color:'#9a9897',
        textAlign: 'center',
    },
    EngineHeader: {
        backgroundColor:'#D8D6D5',
        textAlign: 'center',
        borderRadius: 10,
        width: 'auto',
        alignSelf: 'center',  
        padding: 10,
        margin: 10,  
        fontWeight: 'bold',
    },
    BookButton: {
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: light.accent,
        width: '64%',
        marginTop: 14,
        marginBottom: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 8,
        fontWeight: 'bold',
    },
    ButtonText: {
        textAlign: 'center',
        padding: 8,
        fontWeight: 'bold',
        fontSize: 18,
    },
    bodyType: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    smallHeader:
    {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 18,
    },
    icon: {
        paddingLeft: 10,
        paddingTop: 10,

    }
})

export default CarDetailsScreen;
