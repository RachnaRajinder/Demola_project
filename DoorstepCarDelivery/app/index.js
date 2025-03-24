import { Text, View, StyleSheet } from "react-native";
import { light, dark } from "../assets/colors/colors";
import CarSelection from "@/Screens/CarSelectionScreen";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.background,
    justifyContent: "center",
    alignItems: "center",
  }
})
