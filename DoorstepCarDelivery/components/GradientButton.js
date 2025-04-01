import { light } from '@/assets/colors/colors'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


//Button component to use, variables are 'style' to add styling, 'text' appears on box and 'navigate' is for button effect 
//  <GradientButton text={'Browse Cars'} navigate={navigateToCarDetails}/> */}
const GradientButton = ({ text, navigate, style }) => {
  return (
      <TouchableOpacity
        style={styles.container}
        onPress={navigate}
      >
        <LinearGradient
          colors={[light.accent, light.fade]}
          start={{ x: 0.4, y: 0.7 }}
          style={[styles.button, style]}
        >
          <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  elevation: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: 10

  },
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 25,
  }
});

export default GradientButton
