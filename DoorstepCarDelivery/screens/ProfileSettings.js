import React, { useState } from "react";
import { StyleSheet, View, Image, Text, Switch, StatusBar, Button, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { light, dark } from "../assets/colors/colors"
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from '@/components/GradientButton';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale, textScale, verticalScale } from '@/components/ScreenScaling';

const ProfileSettings = () =>{

    const route = useRoute()
    const [Spotify, setSpotify] = useState(false)
    const [YT, setYT] = useState(false)
    const [Maps, setMaps] = useState(false)
    const [Messages, setMessages] = useState(false)
    const [Calls, setCalls] = useState(false)
    const { name1 } = route.params || { id: 1 }
    
    return(
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.heading}> {name1} </Text>
                <Text> user info, names, age, address, email,</Text>
                
                <Text> Connected apps </Text>
                <CustomSwitch label={Spotify? 'Spotify connected' : 'Spotify not connected'} value={Spotify} onToggle={setSpotify}/>
                <CustomSwitch label={YT? 'YouTube connected' : 'YouTube not connected'} value={YT} onToggle={setYT}/>
                <CustomSwitch label={Maps? 'Maps connected' : 'Maps not connected'} value={Maps} onToggle={setMaps}/>
                <CustomSwitch label={Messages? 'Messages connected' : 'Messages not connected'} value={Messages} onToggle={setMessages}/>
                <CustomSwitch label={Calls? 'Calls connected' : 'Calls not connected'} value={Calls} onToggle={setCalls}/>

                <Text> payment methods </Text>
                <Text> km's driven</Text>
                <Text> password </Text>
                <Text> location </Text>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
};

const CustomSwitch = ({ label, value, onToggle }) => (
    <View style={styles.controlRow}>
        <Text style={styles.label}>{label}</Text>
        <Switch
            value={value}
            onValueChange={onToggle}
            trackColor={{ false: dark.box, true: light.accent }}
            thumbColor={value ? '#fff' : '#f4f3f4'}
        />
    </View>
);

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: light.box,
    },
    heading: {
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold',
    },
    box: {
        flexDirection: 'column',
        backgroundColor: light.box,
        fontWeight: 'bold',
        paddingHorizontal: '8%',

    },
    controlRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 12,
        borderBottomColor: light.background,
        borderBottomWidth: 3,
        
    },
    label: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'left',
    },
})

export default ProfileSettings;