import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import Button from '../components/Button';

export default function Home({ openCamera, getHelp }) {
    return (
        <>
                <View style={{ paddingTop: 50, alignItems: 'center', justifyContent: 'flex-start', backgroundColor:"#fffbef", width:"100%", paddingBottom:10, borderColor:"black", borderWidth:"2px"}}>
                    <Text style={{fontSize : 24}} >NAME OF THE THING</Text>
                    <Text>Home</Text>
                </View>
            <ImageBackground
                source={require('../assets/FOOD.webp')}
                style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', width:"100%" }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderColor:"black", borderWidth:"2px"}}>
                    <Button title="Take Picture" onPress={openCamera} paddingVertical={20} paddingHorizontal={50} borderRadius={10} marginBottom={10}/>
                    <Button title="Help" onPress={getHelp} paddingVertical={15} paddingHorizontal={35} borderRadius={10}/>
                </View>
            </ImageBackground>
        </>
    )
}