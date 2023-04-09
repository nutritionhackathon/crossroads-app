import React from "react";
import { Text, View, Image } from "react-native";

import Button from '../components/Button';

export default function Help({navigation}) {
    return (
        <>
            <View style={{ paddingTop: 40, alignItems: 'center', justifyContent: 'flex-start', backgroundColor:"#fffbef", width:"100%", paddingBottom:10, borderColor:"black", borderWidth:2}}>
                <Text style={{fontSize : 30}} >Help</Text>
            </View>
            <View style={{ flex: 1, padding: "2%"}}>
                <Text>
                    This app can help you to improve your meal by identifying food categories that are present and whether your meal is healthy or not.
                    Additionally, we will provide suggestions with healthy alternative meals.
                </Text>
                <Text>
                    Start by pressing the 'Take Picture' button.
                    Ensure that your photo clearly has food displayed and is in view.
                    Shown below is an example of a good photo.
                </Text>
                <Text>
                    Afterwards, you can view your history by pressing 'View History'.
                    On this page, you will be able to see your previous entries submitted to Foodify.
                    You can click on any entry to view more information about it.
                </Text>
                <Image source={require('../assets/goodExample.png')} style={{width: '100%', height: 300, resizeMode: 'contain'}} />
            </View>
            <View style={{alignItems: 'center', padding: "2%"}}>
                <Button title="Return Home" onPress={() => { navigation.goBack()}} />
            </View>
        </>
    );
}
