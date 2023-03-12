import React from 'react'
import { StyleSheet, View,Text, TextInput } from 'react-native'
export default function ReadyInput(props) {
    return (
        <View style={styles.container}>
            <TextInput onChangeText={props.changeValue} style={styles.text} value={props.value} placeholder={props.text}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"transparent",
        width:327,
        height:36,
        borderRadius:9,
        borderBottomColor:"#212093",
        borderBottomWidth:3
    },
    text:{
        marginLeft:15,
        fontSize:31,
        color:"white"
    }
})
