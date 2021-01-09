import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from 'react';

import ContactScreen from "../screens/ContactScreen";
import ResourcesScreen from "../screens/ResourcesScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

import TeamNavigator from "../navigation/TeamNavigator";
import VideoNavigator from "../navigation/VideoNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={VideoNavigator}  options={{tabBarIcon:({color,size}) => <MaterialCommunityIcons name="home" color={color} size={size}/>}}></Tab.Screen>
        <Tab.Screen name="Contact" component={ContactScreen} options={{tabBarIcon:({color,size}) => <MaterialCommunityIcons name="contacts" color={color} size={size}/>}}></Tab.Screen>
        <Tab.Screen name="Team" component={TeamNavigator} options={{tabBarIcon:({color,size}) => <MaterialIcons name="people" color={color} size={size}/>}}></Tab.Screen>
        <Tab.Screen name="Resources" component={ResourcesScreen} options={{tabBarIcon:({color,size}) => <Entypo name="address" color={color} size={size}/>}}></Tab.Screen>
    </Tab.Navigator>


)


export default AppNavigator;
