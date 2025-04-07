import { Modal, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import DataPicker from 'react-native-date-picker'
import { getToday, getFormatDate } from 'react-native-modern-datepicker'


const BookingScreen = () => {
  
  const [open, setopen] = useState(false)

  function handlePress()  {
    setopen(!open);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text>open</Text>
      </TouchableOpacity>
      
      <Modal
        animationType='slide'
        transparent={true}
        visible={open}
       >

      <View style={styles.centeredview}>
       <View style={styles.modalView}></View>
      </View>
    
      </Modal>
        
    </View>
  );
}
export default BookingScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredview: {
   margin:20,
   backgroundColor: 'red',
   width: '90%',
   padding: 35,
  }
});