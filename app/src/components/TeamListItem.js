import React from 'react';
import { View, StyleSheet , Image,TouchableWithoutFeedback} from 'react-native';

import TextComponent from "../components/TextComponent";
import ScreenComponent from "../components/ScreenComponent";

function TeamListItem({image,hobby,major,name,onPress}) {
  return (
  
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
     <Image style={styles.image} source={image} resizeMode = "contain"/>
      <View>
     <TextComponent style={styles.name}>{name}</TextComponent>
     <TextComponent style={styles.hobby}>{hobby}</TextComponent>
     <TextComponent style={styles.major}>{major}</TextComponent>
    </View>
  </View>
  </TouchableWithoutFeedback>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    borderWidth:2,
    borderColor:"grey",
    margin:5,
  },
  image:{
    width:100,
    height:100,
    borderRadius:90,
    marginRight:10,
    marginLeft:10,
    marginTop:10,
    marginBottom:10,
    
   
  },
  name:{
    marginLeft:5,
    fontSize:20,
    margin:8,
  },
  hobby:{
    marginLeft:5,
    fontSize:17,
  },
  major:{
    marginLeft:6,
    fontSize:17,
    margin:8,
  },
});

export default TeamListItem;