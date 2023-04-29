import React from 'react';
import { View, ImageBackground } from 'react-native';
import Button from '../components/Button';
import TitleBar from '../components/TitleBar'

export default function Home({ navigation }) {
  return (
    <>
      <TitleBar title="Foodify" />
      <ImageBackground
        source={require('../assets/foodbg.jpg')}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', width: "100%" }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Take A Picture" onPress={() => { navigation.navigate("FoodScanner") }} paddingVertical={20} paddingHorizontal={50} marginBottom={10} />
          <Button title="View History" onPress={() => { navigation.navigate("History") }} paddingVertical={20} paddingHorizontal={50} marginBottom={10} />
          <Button title="Help" onPress={() => { navigation.push("Help") }} paddingVertical={15} paddingHorizontal={35} />
        </View>
      </ImageBackground>
    </>
  )
}
