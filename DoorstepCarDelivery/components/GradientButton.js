import { light } from '@/assets/colors/colors'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


//Button component to use, variables are height and width to change size, text appears on box and navigate is for a function that navigates to different screen
{/* <GradientButton text={'Browse Cars'} navigate={navigateToCarDetails} width={195} height={145} /> */}
const GradientButton = ({ text, navigate, width, height }) => {
  return (
    <View style={styles.elevation}>
      <TouchableOpacity
        style={styles.container}
        onPress={navigate}
      >
        <LinearGradient
          colors={[light.accent, light.fade]}
          start={{ x: 0.4, y: 0.7 }}
          style={[styles.button, {width: width, height: height}]}
        >
          <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  elevation: {
    shadowColor: '#000',
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
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 25,
  }
});

export default GradientButton
