import React from 'react';
import { View, StyleSheet} from 'react-native';

import ScreenComponent from "../components/ScreenComponent";
import TextComponent from "../components/TextComponent";

function ContactScreen(props) {
 
  return (
    <ScreenComponent style={styles.container}>
     <View>
        <TextComponent style={styles.Title}>Contact:</TextComponent>
        <TextComponent style={styles.Subtitle}>Send email to the University's Wellbeing and Education Adviser, for all enquiries about the Bubble.</TextComponent>
      </View>
      <View>
      <TextComponent style={styles.Title}>Location:</TextComponent>
      <TextComponent style={styles.Subtitle}>To find the Bubble,head to level 2 of the Student Union Building.</TextComponent>
      </View> 
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:55,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white",
  },
  view:{
    backgroundColor:"white"
  },
  Title:{
    padding:20,
    fontSize:20,
    textAlign:"justify",
    fontWeight:"bold"
  
  },

  Subtitle:{
    padding:20,
    fontSize:20,
    textAlign:"justify",
  
  },
  
});

export default ContactScreen;