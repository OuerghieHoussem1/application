import React from 'react'
import {StyleSheet,View,Image,StatusBar,Platform,Text} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

import ReadyButton from "../Components/ReadyButton"


export default function ErrorPage({navigation}) {

    return (
        <LinearGradient colors={["#212093","transparent"]} style={styles.container}>
                <Image source={require("../assets/avatarNo.png")}></Image>
                <View style={styles.content}>
                    <View style={styles.data}>
                        <Text style={styles.text}>Aucune Reservation, verifier les lettres majuscules</Text>
                    </View>
                </View>
                <ReadyButton toDo={()=>navigation.navigate("HOME")} text="Rescan"/>
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
        marginTop:50,
        marginBottom:30,
        width:"90%",
        height:"30%",
        display:"flex",
        justifyContent:"center"

    },
    data:{
        paddingLeft:20
    },
    text:{
        fontSize:20,
        marginBottom:10
    }
  });
  
