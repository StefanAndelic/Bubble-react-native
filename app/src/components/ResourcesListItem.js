import React from 'react';
import { View, StyleSheet, Image , TouchableWithoutFeedback} from 'react-native';

function ResourcesListItem({image,onPress,url}) {
  return (    
    
    <View style={styles.container}>
          <TouchableWithoutFeedback onPress={onPress  }>
          <Image 
          style = {styles.imageContainer} 
          resizeMode = "contain" 
          source = {image} 
          url={url}
          />
        </TouchableWithoutFeedback>
    </View>
   



    );
}

const styles = StyleSheet.create({
  container: {
   margin:3,
   padding:3,
  },
  imageContainer:{
   
    width:356,
    height:200,
    borderWidth:3,
    borderColor:"grey"
  },
});

export default ResourcesListItem;