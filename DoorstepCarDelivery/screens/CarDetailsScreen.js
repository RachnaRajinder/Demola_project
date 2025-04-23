import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Text, Image, ScrollView } from 'react-native';
import { light, dark } from "../assets/colors/colors"
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import GradientButton from '@/components/GradientButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from 'expo-router';

function CarDetailsScreen() {
    const navigation = useNavigation();

    const route = useRoute()
    const { id, name, fueltype, image, rating, price, topSpeed, 
            enginePower, acceleration, bodyType, numOfCylinders, 
            trans, seats, fuelConsumption } = route.params || { id: 1 }
    console.log("toimiiko", id, name)

    const navigateToBooking = () => {
      navigation.navigate('BookingScreen')
      console.log('navgoid booking');
    }

    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor={light.accent}></StatusBar>
          <Text style={styles.header}>{name}</Text>
          <Text style={styles.EngineHeader}>{fueltype}</Text>
          <Image style={styles.image} source={image} />
          <Text style={styles.bodyType}> {bodyType} </Text>
          <Text style={styles.BodyHeader}> Body Type </Text>
          <Text style={styles.smallHeader}> Features </Text>
          <View style={[styles.infoBox, {justifyContent: 'center'}]}>
            <View style={styles.box}>
              <Ionicons
                name={"speedometer-outline"}
                size={42}
                color={light.accent}
                style={styles.icon}
              />
              <Text style={styles.specs}>{topSpeed} km/h</Text>
              <Text style={styles.specsHeader}>Top speed</Text>
            </View>

            <View style={styles.box}>
              <Ionicons
                name={"stats-chart-outline"}
                size={42}
                color={light.accent}
                style={styles.icon}
              />
              <Text style={styles.specs}>{enginePower} kw</Text>
              <Text style={styles.specsHeader}>Engine Power</Text>
            </View>

            <View style={styles.box}>
              <Ionicons
                name={"cellular-outline"}
                size={42}
                color={light.accent}
                style={styles.icon}
              />
              <Text style={styles.specs}>{acceleration} s</Text>
              <Text style={styles.specsHeader}>Acceleration 0 - 100 km/h</Text>
            </View>

            <View style={styles.box}>
              <Ionicons
                name={"cog-outline"}
                size={42}
                color={light.accent}
                style={styles.icon}
              />
              <Text style={styles.specs}>{numOfCylinders}</Text>
              <Text style={styles.specsHeader}>Number of cylinders</Text>
            </View>

            <View style={styles.box}>
              <Ionicons
                name={"git-branch-outline"}
                size={42}
                color={light.accent}
                style={styles.icon}
              />
              <Text style={styles.specs}>{trans}</Text>
              <Text style={styles.specsHeader}>Transmission</Text>
            </View>

            <View style={styles.box}>
              <Ionicons
                name={"man-outline"}
                size={42}
                color={light.accent}
                style={styles.icon}
              />
              <Text style={styles.specs}>{seats}</Text>
              <Text style={styles.specsHeader}>Seats</Text>
            </View>
          </View>

          <View style={styles.booking}>
                <View>
                <Text style={styles.priceHeader}>Total price: </Text>
                <Text style={styles.price}>{price}</Text>
                </View>
                <GradientButton text={'Book now'} style={styles.BookButton} navigate = {navigateToBooking}/>
            </View>
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
        flex: 1,
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
        marginBottom: 14,
    },
    BodyHeader: {
        color:'#9a9897',
        textAlign: 'center',
    },
    EngineHeader: {
        backgroundColor:light.box,
        textAlign: 'center',
        borderRadius: 10,
        width: 'auto',
        alignSelf: 'center',  
        padding: 10,
        margin: 10,  
        fontWeight: 'bold',
    },
    BookButton: {
        borderRadius: 10,
        backgroundColor: light.accent,
        width: 'auto',
        marginBottom: 14,
        marginRight: 14, 
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: '12%',
        paddingHorizontal: 32,
    },
    bodyType: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
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

    },
    priceHeader: {
        color:'#9a9897',
        paddingLeft: 10,
    },
    price:{
        fontWeight: 'bold',
        color: light.accent,
        fontSize: 24,
        paddingLeft: 10,
        paddingBottom: 10,
    },
    booking: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row-reverse',
        display: "flex",
        justifyContent: "space-between",
        minWidth: '100%',
        flexDirection: "row",

    },
})

export default CarDetailsScreen;
