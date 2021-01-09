import React from 'react';
import {StyleSheet,FlatList,Linking} from 'react-native';

import ResourcesListItem from '../components/ResourcesListItem';
import ScreenComponent from "../components/ScreenComponent";

const resources = [
  {
    id:1,
    image: require("../assets/SWAT.jpg"),
    url:"https://www.wgtn.ac.nz/students/campus/health/wellbeing/team",
  },
  {
    id:2,
    image: require("../assets/Mind.jpg"),
    url:"https://www.wgtn.ac.nz/students/campus/health/wellbeing/fuel",
  },
  {
    id:3,
    image: require("../assets/Life.jpg"),
    url:"https://www.wgtn.ac.nz/students/campus/health/wellbeing/managing-your-wellbeing",
  },
  {
    id:4,
    image: require("../assets/Money.jpg"),
    url:"https://www.wgtn.ac.nz/students/campus/health/wellbeing/money",
  },
  {
    id:5,
    image: require("../assets/Pressure.jpg"),
    url:"https://www.wgtn.ac.nz/students/campus/health/wellbeing/pressure",
  },
  
  {
    id:6,
    image: require("../assets/identity.png"),
    url:"https://www.wgtn.ac.nz/students/campus/health/wellbeing/identity",
  }

];



function ResourcesScreen(props) {
    return (
 
    <ScreenComponent style={styles.container}>
      <FlatList       
      data={resources}
      keyExtractor={resources => resources.id.toString()}
      renderItem={({item}) =>
      <ResourcesListItem 
      image={item.image}
      onPress={()=>{ Linking.openURL(item.url)}}/>
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

export default ResourcesScreen;