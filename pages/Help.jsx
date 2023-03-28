import React from "react";
import { Text, View, ImageBackground } from "react-native";

import Button from '../components/Button';

export default function Help({navigation}) {
    return (
        <>
            <View>
                <Text>
                    Just press 'Take Picture' and add an image
                </Text>
                <Text>
                    its not that hard
                </Text>
                <Button title="Return Home" onPress={() => { navigation.navigate("Home")}}></Button>
            </View>
        </>
    );
}
