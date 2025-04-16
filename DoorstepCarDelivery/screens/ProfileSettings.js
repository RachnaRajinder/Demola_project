import React, { useState } from "react";
import { StyleSheet, View, Image, Text, StatusBar, Button, TouchableOpacity, Alert, Modal, Pressable, Dimensions } from 'react-native';
import { light, dark } from "../assets/colors/colors"
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from '@/components/GradientButton';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileSettings = () =>{

    const route = useRoute()
    const { name1 } = route.params || { id: 1 }
    
    return(
        <SafeAreaView style={styles.container}>
            <Text> {name1} </Text>
            <Text> Connected apps </Text>
            <Text> payment methods </Text>
            <Text> user info, names, age, address, email,</Text>
            <Text> km's driven</Text>
            <Text> password </Text>
            <Text> location </Text>
        </SafeAreaView>
    )
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: light.background,
    },
    heading: {
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold',
        
    },
})

export default ProfileSettings;