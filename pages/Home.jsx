import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import Button from '../components/Button';

export default function Home({navigation}) {
    return (
        <>
            <View style={{ paddingTop: 40, alignItems: 'center', justifyContent: 'flex-start', backgroundColor:"#fffbef", width:"100%", paddingBottom:10, borderColor:"black", borderWidth:2}}>
                <Text style={{fontSize : 30}} >Foodify</Text>
            </View>
            <ImageBackground
                source={require('../assets/FOOD.webp')}
                style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', width:"100%" }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Button title="Take A Picture" onPress={() => { navigation.navigate("FoodScanner")}} paddingVertical={20} paddingHorizontal={50} marginBottom={10}/>
                    <Button title="View History" onPress={() => { navigation.navigate("History")}} paddingVertical={20} paddingHorizontal={50} marginBottom={10}/>
                    <Button title="Help" onPress={() => { navigation.push("Help")}} paddingVertical={15} paddingHorizontal={35}/>
                </View>
            </ImageBackground>
        </>
    )
}
