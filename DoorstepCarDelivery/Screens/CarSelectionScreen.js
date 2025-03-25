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

const DATA = [
  {
    id: 1,
    name: "Porsche Taycan",
    fueltype: "Gasoline",
    image: require("../assets/images/porsche-model-1.png"),
    rating: 5,
    price: "$100",
  },
  {
    id: 2,
    name: "911 GT3 RS",
    fueltype: "Gasoline",
    image: require("../assets/images/porsche-model-2.png"),
    rating: 4.5,
    price: "$120",
  },
  {
    id: 3,
    name: "911 Carrera 4 GTS",
    fueltype: "Gasoline",
    image: require("../assets/images/porsche-model-3.png"),
    rating: 4.5,
    price: "$120",
  },
  {
    id: 4,
    name: "911 GT3 with Touring Package",
    fueltype: "Gasoline",
    image: require("../assets/images/porsche-model-4.png"),
    rating: 4.5,
    price: "$120",
  },
  {
    id: 5,
    name: "911 Darker",
    fueltype: "Gasoline",
    image: require("../assets/images/porsche-model-5.png"),
    rating: 4.5,
    price: "$120",
  },
];
const CarItem = ({ car }) => {
  return (
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
  );
};

function CarSelectionScreen() {

    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: light.background,
    },
})

export default CarSelectionScreen;
