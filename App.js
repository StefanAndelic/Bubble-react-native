import React from 'react';
import {View } from 'react-native';

import {NavigationContainer} from "@react-navigation/native"
import AppNavigator from "./app/src/navigation/AppNavigator";


export default function App() {
  return (

    <NavigationContainer >
      <AppNavigator />
    </NavigationContainer>

  );
}


