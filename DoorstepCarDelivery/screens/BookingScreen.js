import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Calendar } from "react-native-calendars";
import { width } from "@/components/ScreenScaling";

const BookingScreen = () => {
  return (
    <View style={styles.container}>

        <Calendar
          // Customize the appearance of the calendar
          style={{
            borderWidth: 1,
            borderColor: "gray",
            height: 350,
            width: 350,
          }}
          current={"2023-03-01"}
          // Callback that gets called when the user selects a day
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          markedDates={{
            "2023-03-01": {
              selected: true,
              marked: true,
              selectedColor: "blue",
            },
            "2023-03-02": { marked: true },
            "2023-03-03": {
              selected: true,
              marked: true,
              selectedColor: "blue",
            },
          }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: "blue",
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default BookingScreen;
