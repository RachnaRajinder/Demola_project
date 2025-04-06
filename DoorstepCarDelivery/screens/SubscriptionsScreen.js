import { light } from "@/assets/colors/colors";
import React, {useState} from "react";
import { StyleSheet, View, Text, StatusBar, Button, TouchableOpacity, Alert, ScrollView, Modal, Pressable, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient'


function SubscriptionsScreen() {
    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);
    const [modal3Visible, setModal3Visible] = useState(false);


    return(
        <ScrollView>
            <SafeAreaView>
                <StatusBar backgroundColor={light.accent}></StatusBar>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <View >  
                            <LinearGradient
                                colors={[light.accent, light.fade]}
                                start={{ x: 0.4, y: 0.7 }}
                                style={styles.ImageBackground}
                            ><Text style={styles.priceHeader}>NORMAL</Text>
                            </LinearGradient>
                         </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal1Visible}
                        onRequestClose={() => {
                            setModal1Visible(!modal1Visible);
                        }}>
                    
                        <View style={styles.modalView}>   
                            <View style={styles.booking}>
                            <Text style={styles.price}>Normal</Text>  
                            <View>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModal1Visible(!modal1Visible)}>
                                <Ionicons name={'close-outline'} size={26} color={light.box}/>
                            </Pressable>
                            </View>
                            </View>

                            <View style={styles.infoBox}>
                            <Text style={styles.header}>Details</Text>
                            <View style={styles.greyBox}>
                                <Text style={styles.InfoText}>You can change car monthly</Text>
                                <Text style={styles.InfoText}>When changing your car you take it to a nearby Changy carage and leave it there and take your new car with you</Text>
                                <Text style={styles.InfoText}>you gain access to car control</Text>

                            </View>

                            <Text style={styles.header}>Payment plan</Text>
                            <View style={styles.sideBySide}>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}> maksaaa vitusti</Text>
                                </View>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}> maksaaa vitusti enemmän pitempään</Text>
                                </View>
                            </View>

                            <Text style={styles.header}>Lenght</Text>
                            <View style={styles.sideBySide}>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}>1 month</Text>
                                </View>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}> 6 months </Text>
                                </View>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}> 1 year </Text>
                                </View>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}> 2 years</Text>
                                </View>
                            </View>

                            </View>
                        </View>
                    </Modal>
                    <Text style={styles.priceM}>1000€</Text>
                    
                    <Text style={styles.previewText}>
                    <Ionicons name={'car-sport-outline'} size={28} color={'black'}/>
                    Change car monthly</Text>
                    <Text style={styles.previewText}>
                    <Ionicons name={'construct-outline'} size={28} color={'black'}/>
                    Change car at garage</Text>
                    <Text style={styles.previewText}>
                    <Ionicons name={'phone-portrait-outline'} size={28} color={'black'}/>
                    Car control</Text>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModal1Visible(true)}>
                        <Text style={styles.textStyle}>More information</Text>
                    </Pressable>
                    </View>

















                    <View style={styles.box}>
                        <View>  
                            <LinearGradient
                                colors={[light.accent, light.fade]}
                                start={{ x: 0.4, y: 0.7 }}
                                style={styles.ImageBackground}
                            ><Text style={styles.priceHeader}>MEDIUM</Text>
                            </LinearGradient>
                         </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal2Visible}
                        onRequestClose={() => {
                            setModal2Visible(!modal2Visible);
                        }}>
                    
                        <View style={styles.modalView}>   
                            <View style={styles.booking}>
                            <Text style={styles.price}>Medium</Text>  
                            <View>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModal2Visible(!modal2Visible)}>
                                <Ionicons name={'close-outline'} size={26} color={light.box}/>
                            </Pressable>
                            </View>
                            </View>

                            <View style={styles.infoBox}>
                            <Text style={styles.header}>Details</Text>
                            <View style={styles.greyBox}>
                                <Text style={styles.InfoText}>You can change car monthly</Text>
                                <Text style={styles.InfoText}>When changing your car you take it to a nearby Changy carage and leave it there and take your new car with you</Text>
                                <Text style={styles.InfoText}>you gain access to car control</Text>

                            </View>

                            <Text style={styles.header}>Payment plan</Text>
                            <View style={styles.sideBySide}>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}> maksaaa vitusti</Text>
                                </View>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}> maksaaa vitusti enemmän pitempään</Text>
                                </View>
                            </View>

                            <Text style={styles.header}>Lenght</Text>
                            <View style={styles.sideBySide}>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}>1 month</Text>
                                </View>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}> 6 months </Text>
                                </View>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}> 1 year </Text>
                                </View>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}> 2 years</Text>
                                </View>
                            </View>

                            </View>
                        </View>
                    </Modal>
                    <Text style={styles.priceM}>2500€</Text>
                    
                    <Text style={styles.previewText}>
                    <Ionicons name={'car-sport-outline'} size={28} color={'black'}/>
                    Change car weekly</Text>
                    <Text style={styles.previewText}>
                    <Ionicons name={'construct-outline'} size={28} color={'black'}/>
                    Change car at garage or home</Text>
                    <Text style={styles.previewText}>
                    <Ionicons name={'phone-portrait-outline'} size={28} color={'black'}/>
                    Car control and customization</Text>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModal2Visible(true)}>
                        <Text style={styles.textStyle}>More information</Text>
                    </Pressable>
                    </View>


                    
                    
                    
                    
                    
                    
                    <View style={styles.box}>
                        <View >  
                            <LinearGradient
                                colors={[light.accent, light.fade]}
                                start={{ x: 0.4, y: 0.7 }}
                                style={styles.ImageBackground}
                            ><Text style={styles.priceHeader}>PREMIUM</Text>
                            </LinearGradient>
                         </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal3Visible}
                        onRequestClose={() => {
                            setModal3Visible(!modal3Visible);
                        }}>
                    
                        <View style={styles.modalView}>   
                            <View style={styles.booking}>
                            <Text style={styles.price}>Premium</Text>  
                            <View>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModal3Visible(!modal3Visible)}>
                                <Ionicons name={'close-outline'} size={26} color={light.box}/>
                            </Pressable>
                            </View>
                            </View>

                            <View style={styles.infoBox}>
                            <Text style={styles.header}>Details</Text>
                            <View style={styles.greyBox}>
                                <Text style={styles.InfoText}>You can change car monthly</Text>
                                <Text style={styles.InfoText}>When changing your car you take it to a nearby Changy carage and leave it there and take your new car with you</Text>
                                <Text style={styles.InfoText}>you gain access to car control</Text>

                            </View>

                            <Text style={styles.header}>Payment plan</Text>
                            <View style={styles.sideBySide}>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}> maksaaa vitusti</Text>
                                </View>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}> maksaaa vitusti enemmän pitempään</Text>
                                </View>
                            </View>

                            <Text style={styles.header}>Lenght</Text>
                            <View style={styles.sideBySide}>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}>1 month</Text>
                                </View>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}> 6 months </Text>
                                </View>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}> 1 year </Text>
                                </View>
                                <View style={styles.greyBoxSmall}>
                                    <Text style={styles.InfoText}> 2 years</Text>
                                </View>
                            </View>

                            </View>
                        </View>
                    </Modal>
                    <Text style={styles.priceM}>4000€</Text>
                    
                    <Text style={styles.previewText}>
                    <Ionicons name={'car-sport-outline'} size={28} color={'black'}/>
                    Change car daily</Text>
                    <Text style={styles.previewText}>
                    <Ionicons name={'construct-outline'} size={28} color={'black'}/>
                    Change car where ever</Text>
                    <Text style={styles.previewText}>
                    <Ionicons name={'phone-portrait-outline'} size={28} color={'black'}/>
                    Car control and parts customization</Text>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModal3Visible(true)}>
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
        textDecorationLine: 'underline',
    },
    priceM:{
        fontWeight: 'bold',
        fontSize: 35,
        color: light.accent,
        paddingBottom: 10,
        textAlign: 'center',
        borderBottomWidth: 3,
        borderColor: light.accent,
        marginLeft:'20%',
        marginRight:'20%',
        marginTop:'10%',
        marginBottom:'10%',
    },
    previewText:{
        fontSize: 18,
        paddingBottom: 10,
        paddingLeft:'10%',
        textAlign: 'left',
        borderBottomWidth: 3,
        borderColor: light.background,
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:'1%',
    },
    priceHeader:{
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        color: light.box,
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
    sideBySide: {
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
        width: 'auto',
        borderRadius: 10,
        padding: '2%',
    },
    greyBoxSmall: {
        flexDirection: 'column',
        marginTop: 20,
        backgroundColor: light.background,
        width: '40%',
        borderRadius: 10,
        padding: '2%',
    },
    InfoText: {
        textAlign: 'left',
        fontSize: 18,
    },
    image: {
        height: 150,
        width: "100%",
      },
      ImageBackground: {
        backgroundColor: light.accent,
        borderCurve: 'circular',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
        padding:'40'
      },


})

export default SubscriptionsScreen;