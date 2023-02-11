import React, { useState, useEffect } from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleSheet, View, Dimensions} from 'react-native';
import {BusStopIcon} from "./custom_svg"

export default function Map({data}) {
    const [pin, setPin] = useState({
        latitude: 41.8417716,
        longitude: 140.7667037,
      })

    const [busstop, setBusstop] = useState();

    useEffect(() => { 
      setBusstop(BusStopIcon);
    }, []);
      
    return (
    <View 
    style={styles.container}
  >
    <MapView 
      style={styles.map}
      provider={PROVIDER_GOOGLE} 
      showsUserLocation = {true}
      initialRegion = {{
        latitude: 36.204824,
        longitude: 138.252924,
        latitudeDelta: 15.0,
        longitudeDelta: 15.0,
      }}
      onUserLocationChange={(e) =>{
        console.log('location changed')
        setPin({
          latitude : e.nativeEvent.coordinate.latitude,
          longitude : e.nativeEvent.coordinate.longitude,
        })
      }}
      >
      {data.map(item => (
        <Marker
          key={item.id}
          coordinate={{
            latitude: item.latitude,
            longitude: item.longitude,
          }}
          title={item.name}
          description={item.address}
        >
          <BusStopIcon />
        </Marker>
        ))}
    </MapView>
  </View>
);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });