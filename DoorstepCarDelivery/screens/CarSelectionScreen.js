import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { dark, light } from "../assets/colors/colors";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";


const DATA = [
  {
    id: 1,
    name: "718 Spyder RS",
    fueltype: "Gasoline",
    image: require("../assets/images/porsche-model-1.png"),
    rating: 5,
    price: "$100",
    topSpeed:'308',
    enginePower:'368',
    acceleration:'3,4',
    bodyType:'Roadster', 
    numOfCylinders: 6,
    trans: 'automatic',
    seats: 2,
    fuelConsumption: '12.7 l/100 km',
  },
  {
    id: 2,
    name: "911 GT3 RS",
    fueltype: "Gasoline",
    image: require("../assets/images/porsche-model-2.png"),
    rating: 4.5,
    price: "$120",
    topSpeed:'296',
    enginePower:'518',
    acceleration:'3',
    bodyType:'GT', 
    numOfCylinders: 6,
    trans: 'automatic',
    seats: 2,
    fuelConsumption: '13.8 l/100 km',
  },
  {
    id: 3,
    name: "911 Carrera 4 GTS",
    fueltype: "Gasoline",
    image: require("../assets/images/porsche-model-3.png"),
    rating: 4.5,
    price: "$120",
    topSpeed:'312',
    enginePower:'398',
    acceleration:'3',
    bodyType:'2 door coupe', 
    numOfCylinders: 6,
    trans: 'automatic',
    seats: 2,
    fuelConsumption: '12.7 l/100 km',
  },
  {
    id: 4,
    name: "911 GT3 with Touring Package",
    fueltype: "Gasoline",
    image: require("../assets/images/porsche-model-4.png"),
    rating: 4.5,
    price: "$120",
    topSpeed:'313',
    enginePower:'375',
    acceleration:'3,9',
    bodyType:'GT',
    numOfCylinders: 6,
    trans: 'automatic',
    seats: 2,
    fuelConsumption: '12.7 l/100 km', 
  },
  {
    id: 5,
    name: "911 Dakar",
    fueltype: "Gasoline",
    image: require("../assets/images/porsche-model-5.png"),
    rating: 4.5,
    price: "$120",
    topSpeed:'240',
    enginePower:'353',
    acceleration:'3,4',
    bodyType:'coupe', 
    numOfCylinders: 6,
    trans: 'automatic',
    seats: 2,
    fuelConsumption: '12.7 l/100 km',
  },
  {
    id: 6,
    name: "Taycan 4 Cross Turismo",
    fueltype: "Electric",
    image: require("../assets/images/taycan_4_cross_turismo.png"),
    rating: 3.5,
    price: "$100",
    topSpeed:'220',
    enginePower:'320',
    acceleration:'4,7',
    bodyType:'Cross Turismo', 
    numOfCylinders: 0,
    trans: 'automatic',
    seats: 5,
    fuelConsumption: '12.7 l/100 km',
  },
];
const CarItem = ({ car }) => {
    const navigation = useNavigation();

    const NavigateToCarDetails = (
      id, name, fueltype, image, rating, price, 
      topSpeed, enginePower, acceleration, bodyType, 
      numOfCylinders, trans, seats, fuelConsumption) => {
        navigation.navigate('Car details', {
          car:car, id:id, name:name, fueltype:fueltype, image:image, 
          rating:rating, price:price, topSpeed:topSpeed, enginePower:enginePower, 
          acceleration:acceleration, bodyType:bodyType, numOfCylinders:numOfCylinders, 
          trans:trans, seats:seats, fuelConsumption:fuelConsumption})
        console.log("toimiii", id)
    }

  return (
    <TouchableOpacity onPress ={() => NavigateToCarDetails(car.id, car.name, car.fueltype, car.image, car.rating, car.price, car.topSpeed, car.enginePower, car.acceleration, car.bodyType, car.numOfCylinders, car.trans, car.seats, car.fuelConsumption)}>
    <View style={styles.carBox}>
      <Image
        style={styles.image}
        source={car.image}
        resizeMode="cover" // This keeps the aspect ratio and fills the box
      />
      <Text style={styles.carName}>{car.name}</Text>
      <Text style={styles.fueltype}>FuelType: {car.fueltype}</Text>
      <Text style={styles.rating}>Rating: {car.rating} ⭐⭐⭐⭐⭐</Text>
      <Text style={styles.price}>Price: {car.price}</Text>

      {/* Custom styled button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert(`Booking ${car.name}`)}
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
    </TouchableOpacity>
  );
};

function CarSelectionScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={light.accent} />
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CarItem car={item} />}
          contentContainerStyle={styles.flatListContainer} // Add some padding to the FlatList
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.background,
  },
  flatListContainer: {
    padding: 10,
  },
  carBox: {
    backgroundColor: "#F3F3F4",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: "100%",
  },
  carName: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
  fueltype: {
    fontSize: 14,
    color: "#555",
  },
  rating: {
    fontSize: 14,
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: dark.background,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginTop: 10, // Add some space above the button
  },
  buttonText: {
    color: "#FFFFFF", // White text color
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CarSelectionScreen;
