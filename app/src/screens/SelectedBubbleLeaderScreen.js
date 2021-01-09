import React from 'react';
import {StyleSheet , Image} from 'react-native';

import TextComponent from '../components/TextComponent';
import ScreenComponent from "../components/ScreenComponent";

function SelectedBubbleLeaderScreen({route}) {

  const team = route.params;

  return (
    <ScreenComponent style={styles.container}>
       <Image style={styles.profilePicture} source={team.image}/> 
        <TextComponent style={styles.team_hobby}>Hobbies:{team.hobby}</TextComponent>
        <TextComponent style={styles.team_major}>Major:{team.major}</TextComponent>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:70,
    flex:1,
    backgroundColor:"white",
  },
  team_name:{
    marginTop:50,
    marginBottom:80,
    fontSize:20,
    marginLeft:-50,
     
  },
  team_hobby:{
    fontSize:20,
    marginTop:90,
    

  },
  team_major:{
    fontSize:20,
    marginTop:90,
  },
  profilePicture:{
    marginTop:-50,
    marginLeft:45,
    width:140,
    height:140,
    borderWidth:2,
    borderRadius:64,
    
  
  },
  
});

export default SelectedBubbleLeaderScreen;