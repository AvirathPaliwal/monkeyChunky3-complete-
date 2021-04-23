 import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,Image} from 'react-native';
import {Audio} from 'expo-av'

export default class PhonicSoundbutton extends React.Component{
   playSound=async(soundbox)=>{
       var soundlink = 'https://s3-whitehatjrcontent.whjr.online/phones/'+soundbox+'.mp3'
      await Audio.Sound.createAsync(
          {uri:soundlink},
          { shouldPlay : true }
      )
   }
    render(){
        return(
            <TouchableOpacity style={styles.chunkButton} onPress={()=>{
                this.playSound(this.props.soundChunk)
            }} >
                <Text style={styles.displayText}>{this.props.soundChunk}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b8b8b8',
    },
    inputBox: {
      marginTop: 200,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
    },
    displayText: {
      textAlign: 'center',
      fontSize: 30,
    },
    imageIcon: {
      width: 150,
      height: 150,
      marginLeft: 705,
    },
    chunkButton: {
      width: '60%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      margin: 5,
      backgroundColor: 'red',
    },
    submit:{
      marginTop: 30,
      textAlign: 'center',
      alignSelf: 'center',
      borderWidth: 4,
      borderRadius:50,
      width:450,
      height:1050,
      backgroundColor:'#2D2926FF',
      borderColor:'#118DF0'
      },
  });