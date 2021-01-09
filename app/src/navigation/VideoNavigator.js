import {createStackNavigator, HeaderBackButton} from "@react-navigation/stack";
import React  from 'react';

import HomeScreen from "../screens/HomeScreen";
import VideoScreen from "../screens/VideoScreen";

const Stack = createStackNavigator();

const VideoNavigator  = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}></Stack.Screen>
       <Stack.Screen name="Video" component={VideoScreen} ></Stack.Screen>
    </Stack.Navigator>


)

export default VideoNavigator;