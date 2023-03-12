import React from 'react'
import {StyleSheet,View,Text,StatusBar,Platform} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import ReadyInput from '../Components/readyInput';
import ReadyButton from '../Components/ReadyButton';

import { checkReservation } from '../actions/reservations';
import { useDispatch } from 'react-redux';


export default function CodeInput({navigation}) {
    const [code,setCode] = React.useState("")

    const dispatch = useDispatch()

    return (
        <LinearGradient colors={["#212093","transparent"]} style={styles.container}>
            <ReadyInput text="Inserer code" value={code} changeValue={setCode} />
            <View style={styles.content}>
                <ReadyButton text="Confirmer" toDo = {() => dispatch(checkReservation({code},navigation))}/>
                <ReadyButton text="Retourner" toDo = {() => navigation.navigate("HOME")}/>
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
      justifyContent:"flex-end",
    },
    content:{
        marginBottom:80,
        marginTop:100
    }
  });
  
