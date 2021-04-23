import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,Image} from 'react-native';
import {Header}  from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TextInput} from 'react-native'
import db from './localdb';
import { Button } from 'react-native';
import  PhonicSoundbutton from './components/PhonicSoundbutton'
console.log(db['the'].chunks)

export default class App extends React.Component {
    constructor(props){
      super(props);
      this.state={
        text:'',
        chunks:[],
        phonicSounds:[]
      }
    }
  render() {
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
        <Header
         leftComponent={{ icon: 'menu', color: '#fff' }}
         centerComponent={{text:'Monkey Chunky',style:{color:'red'}}}
         rightComponent={{ icon: 'home', color: '#fff' }}
         />
         <Image
             style={styles.imageIcon}
             source={{uri:'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'}}
             />
         <TextInput
         style={styles.inputBox}
           onChangeText={(info)=>{
             this.setState({
               text:info
             })
           }}
           value={this.state.text}/>
           <TouchableOpacity style={styles.goButton} onPress={()=>{
             this.setState({chunks:db[this.state.text].chunks})
             this.setState({phonicSounds:db[this.state.text].phones})
           }}>
                  <Text style={[styles.submit,{color:'red'}]}> 
                    Submit
                  </Text>
             </TouchableOpacity>
             <Text style={styles.displayText}>
                {this.state.displayText}
             </Text>
           <View>
             {this.state.chunks.map((item,index) =>{
                return(
                  <View>
                    <PhonicSoundbutton  wordChunk={this.state.chunks[index]} 
                      soundChunk={this.state.phonicSounds[index]}
                      />
                  </View>
                )
             })}
           </View>
      </View>
      </SafeAreaProvider>
    );
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
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
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
    width:150,
    height:50,
    backgroundColor:'#2D2926FF',
    borderColor:'#118DF0'
    },
});