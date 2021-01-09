import React from 'react';
import { View, Image, StyleSheet , TouchableWithoutFeedback} from 'react-native';

function LogoComponent({onPress,image}) {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onPress }>
         <Image style = {styles.logo} source = {image}/>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  
  logo: {
      width: 200,
      height: 200,
      alignSelf:'center',
      marginTop:45,
      marginBottom: 40,
  
    },
});

export default LogoComponent;