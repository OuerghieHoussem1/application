import React from 'react'
import {StyleSheet,View,Text,StatusBar,Platform,Button} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { useDispatch } from 'react-redux';


import { checkReservation } from '../actions/reservations';

export default function QRScan({navigation}) {

    const [hasPermission, setHasPermission] = React.useState(null);
    const [scanned, setScanned] = React.useState(false);

    const dispatch = useDispatch()

    React.useEffect(() => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        console.log(data)
        dispatch(checkReservation({code:data},navigation))
    };
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
      );

   /*  return (
        <LinearGradient colors={["#ACD6FD","transparent"]} style={styles.container}>
            <View style={styles.content}>
                <Text>qr scan</Text>
            </View>
        </LinearGradient>
    ) */
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
        marginTop:200
    }
  });
  
