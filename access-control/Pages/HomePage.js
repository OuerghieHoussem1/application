import React from 'react'
import {StyleSheet,StatusBar, View ,Platform,Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import ReadyButton from '../Components/ReadyButton';

export default function HomePage({navigation}) {
    return (
        <LinearGradient colors={["#212093","transparent"]} style={styles.container}>
            <Image source={require("../assets/Logo.png")} style={{width:200,height:200}}></Image>
            <View style={styles.content}>
                <ReadyButton toDo={()=>navigation.navigate("QRSCAN")} text="Scan"/>
                <ReadyButton toDo={()=>navigation.navigate("CODE_INPUT")} text="Code"/>
            </View>
        </LinearGradient>
    )


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      alignItems:"center",
      justifyContent:"center",
    },
    content:{
        marginTop:100
    }
  });
  

