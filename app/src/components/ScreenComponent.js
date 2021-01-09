import React from 'react';
import {StyleSheet,SafeAreaView,View} from 'react-native';
import Constants from 'expo-constants'

function ScreenComponent ({children,style}){
    return(
        <SafeAreaView style={styles.screen}>
            <View style={[styles.view,style]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    screen:{
        paddingTop:Constants.statusBarHeight,
        flex:1,
        backgroundColor:"white",
    },
    view:{
        flex:1,

    }
      
});

export default ScreenComponent;