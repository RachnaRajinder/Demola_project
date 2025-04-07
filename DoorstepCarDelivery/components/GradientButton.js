import { light } from '@/assets/colors/colors'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { textScale } from './ScreenScaling'
import Ionicons from 'react-native-vector-icons/Ionicons';


//Button component to use, variables are 'style' to add styling, 'text' appears on box and 'navigate' is for button effect 
//  <GradientButton text={'Browse Cars'} navigate={navigateToCarDetails}/> */}
const GradientButton = ({ text, navigate, style, icon }) => {
  return (

    // <View style={styles.elevation}>
    <TouchableOpacity
      style={styles.container}
      onPress={navigate}
    >
      <LinearGradient
        colors={[light.accent, light.fade]}
        start={{ x: 0.4, y: 0.7 }}
        style={[styles.button, style]}
      >
        {icon && <Ionicons name={icon} size={42} color={light.box} style={styles.icon} />}
        {text && <Text style={styles.buttonText}>{text}</Text>}
      </LinearGradient>
    </TouchableOpacity>
    // </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: textScale(18),
    textAlign: 'center',
  },
});

export default GradientButton
