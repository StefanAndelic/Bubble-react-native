import React from 'react';
import {StyleSheet} from 'react-native';
import { Video } from 'expo-av';

import TheBubble from "../assets/TheBubble.mp4";
import ScreenComponent from "../components/ScreenComponent";
import {useDimensions,useDeviceOrientation} from "@react-native-community/hooks";

function VideoScreen(props) {

  //console.log(/*useDimensions()*/ useDeviceOrientation());

  const {landscape} = useDeviceOrientation();
    
  return (
      
  <ScreenComponent>
  <Video
  source={TheBubble}
  // rate={1.0}
  // volume={1.0}
  isMuted={true}
  resizeMode="contain"
  shouldPlay
  useNativeControls={true}
  style={{ width: "100%", height: landscape ? "100%" : "50%" }}
  
  />
     
   
	
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white"
  },
  
});

export default VideoScreen;