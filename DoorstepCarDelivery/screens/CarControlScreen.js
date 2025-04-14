import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Switch, Button, ScrollView } from 'react-native';
import { light, dark } from "../assets/colors/colors"
import { scale, textScale, verticalScale } from '@/components/ScreenScaling';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from '@/components/GradientButton';


const { width, height } = Dimensions.get('window')
1015
508
const CarControlScreen = () => {
    const [engine, setEngine] = useState(false);
    const [climate, setClimate] = useState(false);
    const [frontDefrost, setFrontDefrost] = useState(false);
    const [rearDefrost, setRearDefrost] = useState(false);
    const [trunkOpen, setTrunkOpen] = useState(false);
    const [lightMode, setLightMode] = useState('auto');
    const [chargingLimit, setChargingLimit] = useState(80);
    const [temperature, setTemperature] = useState(22);
    const [lock, setLock] = useState(false);

    return (
        <ScrollView>

            <View style={styles.container}>
                <View style={[styles.box, styles.elevation]}>

                    <Text style={styles.header}>Car Controls</Text>
                    <CustomSwitch label={engine ? 'Engine on' : 'Engine off'} value={engine} onToggle={setEngine} />
                    <CustomSwitch label={lock ? 'Locked' : 'Unlocked'} value={lock} onToggle={setLock} />
                    <View style={{ alignItems: 'center', marginBottom: 20}}>
                        <View style={[styles.buttonElevation]}>
                            <GradientButton text='Open Trunk' style={styles.button} />
                        </View>
                    </View>
                    <Text style={styles.label}>Charging Limit: {chargingLimit}%</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={30}
                        maximumValue={100}
                        step={5}
                        minimumTrackTintColor={light.accent}
                        thumbTintColor={light.accent}
                        value={chargingLimit}
                        onValueChange={setChargingLimit}
                    />
                    <CustomDivider />

                    <Text style={styles.header}>Heat Controls</Text>
                    <CustomSwitch label="Turn A/C On" value={climate} onToggle={setClimate} />
                    <Text style={styles.label}>Temperature: {temperature}°C</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={16}
                        maximumValue={30}
                        step={1}
                        minimumTrackTintColor={light.accent}
                        thumbTintColor={light.accent}
                        value={temperature}
                        onValueChange={setTemperature}
                    />

                    <CustomSlider label='Driver' />
                    <CustomSlider label='Vänkäri' />
                    <CustomSlider label='Back' />

                    <CustomSwitch label="Front Defrost" value={frontDefrost} onToggle={setFrontDefrost} />
                    <CustomSwitch label="Rear Defrost" value={rearDefrost} onToggle={setRearDefrost} />
                    <CustomDivider />

                    <Text style={[styles.label, { textAlign: 'center' }]}>Light Mode: {lightMode.toUpperCase()}</Text>

                    <View style={styles.lightButtons}>
                        <View style={styles.buttonElevationLights}>
                            {['off', 'auto', 'on'].map(mode => (
                                <Button
                                    key={mode}
                                    title={mode.toUpperCase()}
                                    color={lightMode === mode ? light.accent : '#999'}
                                    onPress={() => setLightMode(mode)}
                                />
                            ))}
                        </View>
                    </View>

                    <View style={styles.inlineButtons}>
                        <View style={styles.buttonElevation}>
                            <GradientButton style={styles.button} text="Flash Lights" onPress={() => console.log('Lights flashed')} />
                        </View>
                        <View style={styles.buttonElevation}>
                            <GradientButton style={styles.button} text="Honk" onPress={() => console.log('Horn activated')} />
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
};

const CustomDivider = () => {
    return (
        <LinearGradient
            colors={['rgba(0, 0, 0, 0)', dark.background, 'rgba(0, 0, 0, 0)']}
            style={styles.divider}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        />
    )
}
const CustomSlider = ({ label }) => {
    const [temperature, setTemperature] = useState(22);
    const [seatHeat, setSeatHeat] = useState(1);

    return (
        <>
            <Text style={styles.label}>{label} seat heating: Level {seatHeat}</Text>
            <Text style={styles.label}>Temperature: {temperature}°C</Text>

            <Slider
                style={styles.slider}
                minimumValue={16}
                maximumValue={30}
                step={1}
                minimumTrackTintColor={light.accent}
                thumbTintColor={light.accent}
                value={temperature}
                onValueChange={setTemperature}
            />
        </>
    )
}

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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: light.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        flex: 1,
        flexDirection: 'column',
        width: '90%',
        marginVertical: verticalScale(20),
        backgroundColor: light.box,
        borderRadius: 10,
        paddingBottom: verticalScale(15),
        padding: 50,
    },
    elevation: {
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: .25,
        shadowRadius: 5,
        elevation: 7,
    },
    controlRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    header: {
        textAlign: 'center',
        fontSize: textScale(20),
        fontWeight: '500',
    },
    label: {
        fontSize: 18,
        fontWeight: '500',
    },
    slider: {
        width: '100%',
        height: 60,
    },
    divider: {
        height: 5,
        width: '90%',
        marginVertical: verticalScale(20),
    },
    inlineButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 16,
    },
    buttonElevation: {
        width: scale(150),
        height: scale(50),
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: .2,
        shadowRadius: 15,
        elevation: 5,
        borderRadius: 10,
        margin: '1%',
        backgroundColor: 'white',
    },
    buttonElevationLights: {
        width: scale(150),
        height: scale(50),
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: .2,
        shadowRadius: 15,
        elevation: 5,
        borderRadius: 10,
        margin: '1%',
        backgroundColor: 'white',
        flexDirection: 'column',
        marginTop: 8,
        marginBottom: 70,

    },
    button: {
        padding: '5%',
        width: '100%',
        height: '100%',
        fontSize: textScale(25),
    },
    lightButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        justifyContent: 'center',

    },
});

export default CarControlScreen;