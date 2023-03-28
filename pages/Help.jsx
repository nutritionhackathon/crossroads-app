import React from "react";
import { Text, View, Image } from "react-native";

import Button from '../components/Button';

export default function Help({navigation}) {
    return (
        <>
            <View>
                <Text style={{fontSize : 24}} >Help Page</Text>
                <Text>
                    This app can help you to improve your meal by identifying food categories that are present or missing
                </Text>
                <Text>
                    Additionally, we will provide suggestions with healthy alternative meals
                </Text>
                <Text>
                    Start by pressing the 'Take Picture' button
                </Text>
                <Text>
                    You can choose to upload an existing photo or use your camera
                </Text>
                <Text>
                    Ensure that your photo clearly has food displayed and is in view
                </Text>
                <Text>
                    Example of a good photo
                </Text>
                <Image source={require('../assets/goodExample.png')} />
                <Button title="Return Home" onPress={() => { navigation.goBack()}}></Button>
            </View>
        </>
    );
}
