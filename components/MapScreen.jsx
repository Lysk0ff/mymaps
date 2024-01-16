import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

import { Marker } from 'react-native-maps';
import { useState } from 'react';

export default function MapScreen({ navigation }) {
    const markers = [{
        latitude: 58.01,
        longitude: 56.2,
        title: "Marker title",
        description: "Marker desc"
    },
    {
        latitude: 58.012,
        longitude: 56.22,
        title: "2Marker title",
        description: "2Marker desc"
    }]

    const [data, setData] = useState(markers)

    const onMapPressed = (e) => {
        const coordsPressed = e.nativeEvent.coordinate;
        const marker = {
            latitude: coordsPressed.latitude,
            longitude: coordsPressed.longitude
        };
        setData(data => [...data, marker])
    }

    const onMarkerPressed = (e) => {
        const coordsPressed = e.nativeEvent.coordinate;

        //alert(JSON.stringify(coordsPressed))
        navigation.navigate('Hello', {
            coords: coordsPressed,
        })
    }

    const markersDisplayed = data.map((marker, index) => (
        <Marker
            key={index}
            coordinate={marker}
            title={marker.title}
            description={marker.description}
            onPress={onMarkerPressed}
        />
    ))

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: 58.01,
                    longitude: 56.2,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00421,
                }}
                style={styles.map}
                onPress={onMapPressed}
            >
                {markersDisplayed}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
