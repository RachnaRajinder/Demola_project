import { StyleSheet, View, Text, Button } from "react-native";
import { useState } from "react";
import { Calendar } from "react-native-calendars";
import { Picker } from "@react-native-picker/picker";

const generateTimeOptions = () => {
  const options = [];
  for (let hour = 0; hour < 24; hour++) {
    const period = hour < 12 ? "AM" : "PM";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    options.push(`${displayHour}:00 ${period}`);
    options.push(`${displayHour}:30 ${period}`);
  }
  return options;
};

const BookingScreen = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [pickupTime, setPickupTime] = useState("12:00 AM");
  const [returnTime, setReturnTime] = useState("12:00 AM");
  const [displayedStartDate, setDisplayedStartDate] = useState("");
  const [displayedEndDate, setDisplayedEndDate] = useState("");
  const timeOptions = generateTimeOptions();

  const handleDatePress = (day) => {
    if (selectedStartDate) {
      if (!selectedEndDate || day.dateString > selectedStartDate) {
        setSelectedEndDate(day.dateString);
        setDisplayedEndDate(day.dateString);
      } else {
        Alert.alert("Invalid End Date", "End date should be after start date.");
      }
    } else {
      setSelectedStartDate(day.dateString);
      setDisplayedStartDate(day.dateString);
    }
  };
  const isValidBooking = () => {
    if (!selectedStartDate || !selectedEndDate) return false;
    return new Date(selectedStartDate) < new Date(selectedEndDate);
  };

  const handleConfirm = () => {
    if (!isValidBooking()) {
      Alert.alert("Invalid Booking", "End date must be after start date.");
      return;
    }
    alert(
      `You have selected:\nStart Date: ${displayedStartDate}\nEnd Date: ${displayedEndDate}\nPickup Time: ${pickupTime}\nReturn Time: ${returnTime}`
    );
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        current={"2025-04-01"}
        onDayPress={handleDatePress}
        markedDates={{
          [selectedStartDate]: { selected: true, dotColor: "blue" },
          [selectedEndDate]: { selected: true, dotColor: "green" },
        }}
      />
      {selectedStartDate && selectedEndDate && (
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>Start Date: {displayedStartDate}</Text>
          <Text style={styles.dateText}>End Date: {displayedEndDate}</Text>
          <Text style={styles.timeText}>Pickup Time:</Text>
          <Picker
            selectedValue={pickupTime}
            style={styles.picker}
            onValueChange={(itemValue) => setPickupTime(itemValue)}
          >
            {timeOptions.map((time) => (
              <Picker.Item key={time} label={time} value={time} />
            ))}
          </Picker>

          <Text style={styles.timeText}>Return Time:</Text>
          <Picker
            selectedValue={returnTime}
            style={styles.picker}
            onValueChange={(itemValue) => setReturnTime(itemValue)}
          >
            {timeOptions.map((time) => (
              <Picker.Item key={time} label={time} value={time} />
            ))}
          </Picker>

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
    justifyContent: "space-around", // Adjusted for better spacing
  },
  calendar: {
    borderWidth: 1,
    borderColor: "gray",
    height: 175,
    width: 300,
    marginBottom: 10,
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
    marginBottom: 5,
  },
  timeText: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: 150,
    marginBottom: 10,
  },
});

export default BookingScreen;
