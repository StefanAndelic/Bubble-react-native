import React from 'react';
import {StyleSheet,FlatList} from 'react-native';

import TeamListItem from "../components/TeamListItem";
import ScreenComponent from "../components/ScreenComponent";


const team = [
  {
    id:1,
    image: require("../assets/profilepicture.png"),
    name:"T",
    hobby:"Watching movies",
    major:"BA Media in Politics",
  },
  {
    id:2,
    image: require("../assets/profilepicture.png"),
    name:"A",
    hobby:"Drawing",
    major:"BA/LLB French and Law",
  },
  {
    id:3,
    image: require("../assets/profilepicture.png"),
    name:"K",
    hobby:"Blogging",
    major:"BSc Psychology",
  },
  {
    id:4,
    image: require("../assets/profilepicture.png"),
    name:"K",
    hobby:"Accounting",
    major:"BA Commerce",
  },
  {
    id:5,
    image: require("../assets/profilepicture.png"),
    name:"R",
    hobby:"Walking",
    major:"BSc Psychology",
  },
  {
    id:6,
    image: require("../assets/profilepicture.png"),
    name:"S",
    hobby:"Reading books",
    major:"BSc CS and Psychology",
  }

];


function TeamScreen({navigation}) {
  
  
  return (
   
    <ScreenComponent style={styles.container}>
      <FlatList 
      data={team}
      keyExtractor={team => team.id.toString()}
      renderItem={({item}) =>
      <TeamListItem 
      image={item.image}
      name={item.name}
      hobby = {item.hobby}
      major = {item.major}
      onPress={() =>  navigation.navigate("BubbleLeader",item)}
      />
      }
      
      />

    </ScreenComponent>
   
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    
  },
});

export default TeamScreen;