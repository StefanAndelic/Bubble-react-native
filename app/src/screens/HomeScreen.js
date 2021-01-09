import React from 'react';
import {StyleSheet,Image,TouchableWithoutFeedback,View,ScrollView } from 'react-native';
import TextComponent from '../components/TextComponent';
import LogoComponent from '../components/LogoComponent';
import ScreenComponent from "../components/ScreenComponent";

function HomeScreen({navigation}) {
  return (
    <ScreenComponent style={styles.container}>
      <ScrollView>
     <LogoComponent onPress={() => navigation.navigate("Video")} image={require("../assets/bubble_white.jpg")}/>
     <TextComponent style={styles.text}>{"The Bubble is a comfortable, friendly place on campus for students to take time out and connect with other students.At the Bubble, you're invited to enjoy a free cup of tea or coffee, a piece of fruit, or heat up your lunch in the kitchen. There's space to relax in a bean bag, play guitar, or chill out to a relaxing playlist. Take a break from study and join in on a board game or try out origami, Sudoku, and mindful colouring to rest and reset."}</TextComponent>
     </ScrollView>
     </ScreenComponent>
  ); 
}

const styles = StyleSheet.create({
  container: {
    //padding:33,
    backgroundColor:"white",
    flex:1,
    
  },
  text:{
    padding:60,
    fontSize:15,
    textAlign:"justify",
    lineHeight:25,
  }
});

export default HomeScreen;