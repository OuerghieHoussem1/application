import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
export default function ReadyButton(props) {
    return (
        <TouchableOpacity onPress={props.toDo} style={styles.container} >
            <Text style={{color:"#212093",fontSize:23}}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"transparent",
        alignItems:"center",
        borderColor:"#212093",
        borderWidth:2,
        justifyContent:"center",
        borderRadius:19,
        width:238,
        height:48,
        marginBottom:30,
    }
})
