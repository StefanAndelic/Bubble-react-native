import {createStackNavigator} from "@react-navigation/stack";
import React , {useState} from 'react';

import TeamScreen from "../screens/TeamScreen";
import SelectedBubbleLeaderScreen from "../screens/SelectedBubbleLeaderScreen";

const Stack = createStackNavigator();

const TeamNavigator  = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Team" component={TeamScreen}></Stack.Screen>
        <Stack.Screen name="BubbleLeader" component={SelectedBubbleLeaderScreen}  options={{headerShown:true}}></Stack.Screen>
    </Stack.Navigator>


)

export default TeamNavigator;