import React from "react";
import { Text, View, Image, ScrollView } from "react-native";

import Button from '../components/Button';
import TitleBar from '../components/TitleBar'

export default function Help({navigation}) {
    return (
        <>
            <TitleBar title="Help" />
            <ScrollView style={{ padding: "2%"}}>
                <Text style={{padding: 5}}>
                    This app can help you to improve your meal by identifying food categories that are present and whether your meal is healthy or not.
                    Additionally, we will provide suggestions with healthy alternative meals.
                </Text>
                <Text style={{padding: 5}}>
                    Start by pressing the 'Take Picture' button.
                    Ensure that your photo clearly has food displayed and is in view.
                    Shown below is an example of a good photo.
                </Text>
                <Text style={{padding: 5}}>
                    Afterwards, you can view your history by pressing 'View History'.
                    On this page, you will be able to see your previous entries submitted to Foodify.
                    You can click on any entry to view more information about it.
                </Text>
                <Image source={require('../assets/goodExample.png')} style={{width: '100%', height: 200, resizeMode: 'contain'}} />
            </ScrollView>
            <View style={{alignItems: 'center', padding: "2%"}}>
                <Button title="Return Home" onPress={() => { navigation.goBack()}} />
            </View>
        </>
    );
}
