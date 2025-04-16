import React, { Component, useState } from 'react';
import { StyleSheet, View, Image, Text, StatusBar, Button, TouchableOpacity, Alert, Modal, Pressable, Dimensions } from 'react-native';
import { light, dark } from "../assets/colors/colors"
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from '@/components/GradientButton';
import { moderateScale, moderateScaleVertical, scale, textScale, verticalScale } from '@/components/ScreenScaling';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {Porsche-Taycan.png} from "../../assets/images"

const { width, height } = Dimensions.get('window')
1015
508
function HomeScreen() {
    const { width, height } = Dimensions.get('window')
    const name1 = 'Hannu'
    const name2 = 'Julie'
    const navigation = useNavigation();
    const [profile, setProfile] = useState(name1);
    const [modalVisible, setModalVisible] = useState(false);

    const navigateToCarDetails = () => {
        navigation.navigate('Car details', {
            id: 1,
            name: "718 Spyder RS",
            fueltype: "Gasoline",
            image: require("../assets/images/porsche-model-1.png"),
            rating: 5,
            price: "$100",
            topSpeed: '308',
            enginePower: '368',
            acceleration: '3,4',
            bodyType: 'Roadster',
            numOfCylinders: 6,
            trans: 'automatic',
            seats: 2,
            fuelConsumption: '12.7 l/100 km',
        })
    }
    const navigateToCarControl = () => {
        navigation.navigate('Car Control')
    }
    const navigateToProfileSettings = () => {
        navigation.navigate('Profile Settings', {
            name1,
        })
    }
    const navigateToMembership = () => {
        // navigation.navigate('Membership')
        Alert.alert('Navigating', 'to membership screen')
    }
    const addNewProfile = () => {
        // navigation.navigate('open modal')
        Alert.alert('Add or Connect', 'Add New profile or Connect to a new car')
    }

    const hideModal = () => {
        setModalVisible(!modalVisible)
    }

    const handleProfileChange = (name) => {
        setProfile(name);
        hideModal();
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#fcc951'></StatusBar>
            <View style={[styles.box, styles.elevation]}>
                <View style={{ flex: .6, width: '95%', flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity style={[styles.buttonChange, { zIndex: 999 }]}>
                        <GradientButton
                            text={''}
                            navigate={addNewProfile}
                            icon='add-circle-outline'
                            style={[styles.buttonChange]}
                        />
                    </TouchableOpacity>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: scale(50) }}>
                        <Text style={styles.header}>Porshce 718</Text>
                    </View>
                </View>
                <View style={{ flex: 1.2, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image resizeMode='contain' style={styles.image} source={require('../assets/images/porsche-model-1.png')} />
                </View>
                <LinearGradient
                    colors={['rgba(255, 255, 255, 0)', light.accent, 'rgba(255, 255, 255, 0)']}
                    style={styles.divider}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                />
                <View style={styles.info}>

                    <View style={styles.infoUp}>

                        <Text style={styles.infoText}> 718 Spyder RS</Text>
                        <Text style={styles.infoHeader}>Model </Text>
                        <Text style={styles.infoText}> 148km</Text>
                        <Text style={styles.infoHeader}>Range </Text>
                    </View>
                    <View style={styles.infoDown}>
                        <Text style={styles.infoText}>Work</Text>
                        <Text style={styles.infoHeader}>Location</Text>
                        <View>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <View style={styles.modalView}>
                                    <View style={[styles.modal, styles.elevation]}>

                                        <Text style={styles.headerModal}>Current: {profile}</Text>

                                        <View style={styles.profileChoices}>
                                            <TouchableOpacity onPress={() => handleProfileChange(name1)}>
                                                <Text style={styles.choiceText}>{name1}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => handleProfileChange(name2)}>
                                                <Text style={styles.choiceText}>{name2}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.buttonElevationModal}>
                                            <GradientButton text="Close" navigate={hideModal} style={styles.buttonModal} />
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                            <LinearGradient
                                colors={['transparent', 'rgba(252,194,0,.2)', 'transparent']}
                                style={styles.fadingBorderBox}
                                start={{ x: 0.1, y: 0.1 }}
                                end={{ x: 1, y: 1 }}
                            >
                                <Pressable onPress={() => setModalVisible(true)}>
                                    <View style={styles.boxContent}>
                                    </View>
                                    <Text style={styles.infoText}>{profile}</Text>
                                    <Text style={styles.infoHeader}>Change Profile</Text>
                                </Pressable>
                            </LinearGradient>
                        </View>
                    </View>
                </View>
                <LinearGradient
                    colors={['rgba(255, 255, 255, 0)', light.accent, 'rgba(255, 255, 255, 0)']}
                    style={styles.divider}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                />

                <View style={styles.interactions}>

                    <View style={styles.buttonElevation}>
                        <GradientButton text={'Car Details'} navigate={navigateToCarDetails} style={styles.button} icon='car-outline' />
                    </View>
                    <View style={styles.buttonElevation}>
                        <GradientButton text={'Car Control'} navigate={navigateToCarControl} style={styles.button} icon='build-outline' />
                    </View>


                    <View style={styles.buttonElevation}>
                        <GradientButton text={'Profile Settings'} navigate={navigateToProfileSettings} style={styles.button} icon='settings-outline' />
                    </View>
                    <View style={styles.buttonElevation}>
                        <GradientButton text={'Manage Membership'} navigate={navigateToMembership} style={styles.button} icon='at-outline' />
                    </View>

                </View>
            </View>

        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: light.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: light.box,
        justifyContent: 'center',
        alignItems: 'center',
        height: verticalScale(300),
        width: scale(300),
        borderRadius: 10,
    },
    modalButton: {
        height: verticalScale(50),
        width: scale(50),
    },
    box: {
        flex: 1,
        flexDirection: 'column',
        width: '90%',
        marginVertical: verticalScale(20),
        backgroundColor: light.box,
        borderRadius: 10,
        paddingBottom: verticalScale(15),
        justifyContent: 'center',
        alignItems: 'center',
    },
    interactions: {
        flex: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        // backgroundColor: 'red'
    },
    elevation: {
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: .25,
        shadowRadius: 5,
        elevation: 7,
    },
    header: {
        marginTop: scale(10),
        fontWeight: 'bold',
        fontSize: textScale(30),
        textAlign: 'center',
        height: scale(50),
    },
    headerModal: {
        marginTop: scale(10),
        fontWeight: 'bold',
        fontSize: textScale(25),
        textAlign: 'center',
        height: scale(50),
    },
    image: {
        width: '100%',
        height: '200%',
        marginBottom: verticalScale(5),
    },
    infoText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: textScale(20)
    },
    infoHeader: {
        flexWrap: 'wrap',
        color: '#9a9897',
        textAlign: 'center',
        paddingBottom: scale(10),
        fontSize: textScale(18),

    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: scale(20),
        marginBottom: verticalScale(20)
    },
    infoUp: {
        justifyContent: 'center',
        width: '50%',
        marginTop: 25,

    },
    infoDown: {
        justifyContent: 'center',
        width: '50%',
        marginTop: 25,
    },
    button: {
        padding: '5%',
        width: '100%',
        height: '100%',
        fontSize: 25,

    },
    buttonModal: {
        padding: '5%',
        width: '100%',
        height: '100%',
    },
    buttonElevation: {
        width: '45%',
        height: '40%',
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: .2,
        shadowRadius: 15,
        elevation: 5,
        borderRadius: 10,
        margin: '1%',
        backgroundColor: 'white',
        marginTop: verticalScale(20),
    },
    buttonElevationModal: {
        marginTop: verticalScale(20),
        width: scale(195),
        height: verticalScale(50),
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: .2,
        shadowRadius: 15,
        elevation: 5,
        borderRadius: 10,
        marginHorizontal: moderateScale(10),
        backgroundColor: 'white',
    },
    profileChoices: {
        marginBottom: verticalScale(20),
    },
    choiceText: {
        marginTop: verticalScale(10),
        fontSize: textScale(20),
        marginBottom: verticalScale(10),
        textAlign: 'center',
    },
    divider: {
        height: 3,
        width: '90%',
        marginVertical: verticalScale(20),
    },
    fadingBorderBox: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonChange: {
        width: scale(60),
        height: verticalScale(60),
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: .2,
        shadowRadius: 15,
        // elevation: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },


})

export default HomeScreen;
