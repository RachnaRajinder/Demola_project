import { light } from "@/assets/colors/colors";
import React, {useState} from "react";
import { StyleSheet, View, Text, StatusBar, Button, TouchableOpacity, Alert, ScrollView, Modal, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';

function SubscriptionsScreen() {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <ScrollView>
            <SafeAreaView>
                <StatusBar backgroundColor={light.accent}></StatusBar>
                <View style={styles.container}>
                    <View style={styles.box}>
                    <Text>Normal</Text>
                    
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                    
                        <View style={styles.modalView}>   
                            <View style={styles.booking}>
                            <Text style={styles.price}>Normal</Text>  
                            <View>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Ionicons name={'close-outline'} size={26} color={light.box} style={styles.icon}/>
                            </Pressable>
                            </View>
                            </View>

                            <View style={styles.infoBox}>
                            <Text style={styles.header}>Details</Text>
                            <View style={styles.greyBox}>
                                <Text style={styles.InfoText}>With the normal subscription you gain access to car leasing and poopyy peepeee vittu perkele paskaa en tiiä.</Text>
                            </View>

                            <Text style={styles.header}>Payment plan</Text>
                            <Text>Lenght</Text>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}>
                        <Text style={styles.textStyle}>More information</Text>
                    </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: light.background,
    },
    box: {
        flex: 1,
        flexDirection: 'column',
        width: '92%',
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: light.box,
        borderRadius: 10,
        paddingBottom: '1%',
    },
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
    },
    button: {
        borderRadius: 20,
        padding: 8,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: light.accent,
        margin: '6%',
        borderRadius: 10,
      },
      buttonClose: {
        backgroundColor: light.accent,
        alignSelf: 'flex-end',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
      },
      price:{
        fontWeight: 'bold',
        fontSize: 24,
        paddingLeft: 10,
        paddingBottom: 10,
        textAlign: 'center',
        textDecorationColor: light.accent,
        textDecorationLine: 'underline',
    },
    booking: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row-reverse',
        display: "flex",
        justifyContent: "space-between",
        minWidth: '100%',
        flexDirection: "row",
    },
    header: {
        textAlign: 'center',
        fontSize: 24,
        paddingTop: 20,
    },
    infoBox: {
        flexDirection: 'column',
        marginTop: 20,
        marginBottom: 20,
        paddingBottom: '1%',
    },
    greyBox: {
        flexDirection: 'column',
        marginTop: 20,
        backgroundColor: light.background,
        width: '92%',
        borderRadius: 10,
        padding: '2%',
    },
    InfoText: {
        textAlign: 'left',
        fontSize: 18,
    },
    
})

export default SubscriptionsScreen;