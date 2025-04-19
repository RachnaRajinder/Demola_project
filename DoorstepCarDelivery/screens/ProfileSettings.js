import React, { useState } from "react";
import { StyleSheet, View, Image, Text, Switch, StatusBar, Button, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';
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
    const { name1, name2, lastName, Age, Address, Email, Password } = route.params || { id: 1 }
    const [name, onChangeName] = React.useState(name1);
    const [Lname, onChangeLname] = React.useState(lastName);
    const [age, onChangeAge] = React.useState(Age);
    const [address, onChangeAddress] = React.useState(Address);
    const [email, onChangeEmail] = React.useState(Email);
    const [pass, onChangePass] = React.useState(Password);

    
    return(
        <ScrollView>
        <SafeAreaView style={styles.container}>
            
                <View style={styles.box}>
                    <Text style={styles.heading}> {name1} {lastName} </Text>
                    <Text style={styles.infoHeading}> First name</Text>
                    <TextInput 
                    style={styles.TextInput}
                    onChangeText={onChangeName}
                    value={name}
                    
                    />
                    <Text style={styles.infoHeading}> Last name</Text>
                    <TextInput 
                    style={styles.TextInput}
                    onChangeText={onChangeLname}
                    value={Lname}
                    />
                    <Text style={styles.infoHeading}> Password</Text>
                    <TextInput 
                    style={styles.TextInput}
                    onChangeText={onChangePass}
                    value={pass}
                    secureTextEntry
                    />
                    <Text style={styles.infoHeading}> Age</Text>
                    <TextInput 
                    style={styles.TextInput}
                    onChangeText={onChangeAge}
                    value={age}
                    />
                    <Text style={styles.infoHeading}> Address</Text>
                    <TextInput 
                    style={styles.TextInput}
                    onChangeText={onChangeAddress}
                    value={address}
                    />
                    <Text style={styles.infoHeading}> Email</Text>
                    <TextInput 
                    style={styles.TextInput}
                    onChangeText={onChangeEmail}
                    value={email}
                    />
                </View>

                <View style={styles.box}>
                <Text> Connected apps </Text>
                    <CustomSwitch label={Spotify? 'Spotify connected' : 'Spotify not connected'} value={Spotify} onToggle={setSpotify}/>
                    <CustomSwitch label={YT? 'YouTube connected' : 'YouTube not connected'} value={YT} onToggle={setYT}/>
                    <CustomSwitch label={Maps? 'Maps connected' : 'Maps not connected'} value={Maps} onToggle={setMaps}/>
                    <CustomSwitch label={Messages? 'Messages connected' : 'Messages not connected'} value={Messages} onToggle={setMessages}/>
                    <CustomSwitch label={Calls? 'Calls connected' : 'Calls not connected'} value={Calls} onToggle={setCalls}/>
                </View>

                <Text> payment methods </Text>
                <Text> location </Text>
            
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
        paddingVertical: '5%'

    },
    controlRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: 12,
        paddingBottom: 2,
        borderBottomColor: light.background,
        borderBottomWidth: 3,
        
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'left',
    },
    infoHeading: {
        color: '#9a9897',
        paddingTop: '8%',
    },
    TextInput: {
        height: 40,
        borderBottomWidth: 3,
        borderBottomColor: light.background ,
      },
})

export default ProfileSettings;