import React from "react";
import { Text, View, Image } from "react-native";

import Button from '../components/Button';

export default function Help({navigation}) {
    return (
        <>
            <View style={{ paddingTop: 40, alignItems: 'center', justifyContent: 'flex-start', backgroundColor:"#fffbef", width:"100%", paddingBottom:10, borderColor:"black", borderWidth:2}}>
                <Text style={{fontSize : 30}} >Help Page</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: "2%"}}>
                <Text>
                    This app can help you to improve your meal by identifying food categories that are present or missing.
                    Additionally, we will provide suggestions with healthy alternative meals.
                </Text>
                <Text>
                    Start by pressing the 'Take Picture' button.
                    You can choose to upload an existing photo or use your camera.
                    Ensure that your photo clearly has food displayed and is in view.
                    Below is an example of a good photo.
                </Text>
                <Image source={require('../assets/goodExample.png')} style={{width: '100%', height: 300, resizeMode: 'contain'}} />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', padding: "2%", marginBottom : "5%"}}>
                <Button title="Return Home" onPress={() => { navigation.goBack()}} borderRadius={10}></Button>
            </View>
        </>
    );
}
