import React from 'react'
import {StyleSheet,View,Image,StatusBar,Platform,Text} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

import ReadyButton from "../Components/ReadyButton"

import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux';

import {enterReservation,startEatingPauseCafé,startEatingDejeuner} from "../actions/reservations"

export default function Result({navigation}) {

    const reservation = useSelector(state => state.reservation)

    const dispatch = useDispatch()

    return (
        <LinearGradient colors={["#212093","transparent"]} style={styles.container}>
                <Image source={reservation.inside?require("../assets/avatarNo.png"):require("../assets/avatarYes.png")}></Image>
                <View style={styles.content}>
                    <View style={styles.data}>
                        <Text style={styles.text}>Nom: {reservation.name}</Text>
                        <Text style={styles.text}>Code: {reservation.code}</Text>
                        <Text style={styles.text}>Accés: {reservation.inside?"refusé":"accepté"}</Text>
                        <Text style={styles.text}>Pause café: {reservation.petitDej?"refusé": reservation.inside?"accepté":"n'a pas participé le matin"}</Text>
                        <Text style={styles.text}>Déjeuner: {reservation.food?"refusé":reservation.inside?"accepté":"n'a pas participé le matin"}</Text>
                    </View>
                </View>
                {reservation.inside?<ReadyButton toDo={()=>navigation.navigate("HOME")} text="Retourner"/>:<ReadyButton toDo={()=>dispatch(enterReservation({code:reservation.code},navigation))} text="Entrer"/>}
                {reservation.petitDej || !reservation.inside?<></>:<ReadyButton toDo={()=>dispatch(startEatingPauseCafé({code:reservation.code},navigation))} text="Pause café"/>}
                {reservation.food || !reservation.inside?<></>:<ReadyButton toDo={()=>dispatch(startEatingDejeuner({code:reservation.code},navigation))} text="Déjeuner"/>}
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
        backgroundColor:"rgba(33,32,147,0)",
        marginTop:15,
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
  
