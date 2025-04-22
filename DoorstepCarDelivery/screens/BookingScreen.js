import { StyleSheet, View, Text, Button } from "react-native";
import { useState } from "react";
import { Calendar } from "react-native-calendars";

const BookingScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [displayedDate, setDisplayedDate] = useState("");

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    setDisplayedDate(day.dateString); // Display the selected date
  };

  const handleConfirm = () => {
    alert(`You have selected: ${displayedDate}`); 
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={{
          borderWidth: 1,
          borderColor: "gray",
          height: 350,
          width: 350,
        }}
        current={"2025-04-01"}
        onDayPress={handleDayPress}
      />
      {selectedDate && (
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>Selected Date: {displayedDate}</Text>
          <Button title="Confirm Booking" onPress={handleConfirm} />
        </View>
      )}
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
  dateBox: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
  },
  dateText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default BookingScreen;
