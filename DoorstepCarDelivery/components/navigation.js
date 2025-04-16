import * as React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CarDetailsScreen from '../screens/CarDetailsScreen';
import CarSelectionScreen from '../screens/CarSelectionScreen';
import SubscriptionsScreen from '../screens/SubscriptionsScreen';
import CarControlScreen from '../screens/CarControlScreen';
import ProfileSettings from '@/screens/ProfileSettings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { light, dark } from "../assets/colors/colors"
import BookingScreen from '@/screens/BookingScreen';

const home = 'Home';
const carDetails = 'Car details';
const carSelection = 'Car selection';
const subscriptions = 'Subscriptions';
const bookingScreen = 'BookingScreen'
const carControl = 'Car Control'
const profileSettings = 'Profile Settings'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function OGNavigation() {

  return (
    <Tab.Navigator
      initialRouteName={home}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === home) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === carSelection) {
            iconName = focused ? "car-sport" : "car-sport-outline";
          } else if (rn === subscriptions) {
            iconName = focused ? "cart" : "cart-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: light.accent,
        tabBarInactiveTintColor: "#545454",
        labelStyle: { paddingBottom: 4, fontSize: 10 },
        tabBarStyle: { backgroundColor: light.box },
        headerStyle: { backgroundColor: light.box },
        headerTitleAlign: "center",
      })}
    >
      <Tab.Screen name={home} component={HomeScreen} />
      <Tab.Screen name={subscriptions} component={SubscriptionsScreen} />
      <Tab.Screen name={carSelection} component={CarSelectionScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {

  return (
    <Stack.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#545454',
        labelStyle: { paddingBottom: 4, fontSize: 10 },
        headerStyle: { backgroundColor: light.box },
        headerTitleAlign: 'center',
      })}
    >
      <Stack.Screen
        name="OGNavigation"
        component={OGNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={carDetails} component={CarDetailsScreen} />
      <Stack.Screen name={bookingScreen} component={BookingScreen} />
      <Stack.Screen name={carControl} component={CarControlScreen} />
      <Stack.Screen name={profileSettings} component={ProfileSettings} />

    </Stack.Navigator>
  )
}