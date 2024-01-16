import React from 'react';
import { Text } from 'react-native';

export default function HelloWorldScreen({ route, navigation }) {
    const { coords } = route.params;

    return (
        <Text>
            Hello {JSON.stringify(coords)}
        </Text>
    );
}