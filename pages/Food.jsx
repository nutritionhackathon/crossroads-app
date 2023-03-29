import React from "react";
import { Text, View, Image } from "react-native";
import Button from '../components/Button';

export default function Food({ route, navigation }) {
    const {imagePath, responseData}=route.params;

    const yourFood = responseData[0][0];
    
    const foodSuggestions = responseData[0].map((foodClass) => {
        return (
            <Text>
                {foodClass}
            </Text>
        );
    }).slice(1);
    
    const foodClasses = responseData[1].map((foodClass) => {
        return (
            <Text>
                {foodClass}
            </Text>
        );
    });

    console.log(imagePath);
    return (
        <>
            <View
                style={{
                    paddingTop: 50,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                    paddingBottom: 10,
                }}
            >
                <Text style={{ fontSize: 36 }}>Breakdown</Text>
                <Text style={{ fontSize: 16 }}>Your Food was classified as {yourFood}</Text>
                <Image source={{ uri: imagePath }} style={{ maxWidth: '40%', minHeight: "32%", backgroundColor: "blue", aspectRatio: 1 }}/>
            </View>
            <View style={{
                    paddingTop: 10,
                    paddingLeft: 15,
                    paddingRight: 15,
                    justifyContent: "flex-start",
                    width: "100%",
                }}>
                <Text style={{ fontSize: 20, alignSelf: "center" }}>
                    Present Food Categories
                </Text>
                { /* categoriesPresent should be an unordered list */}
                {foodClasses}
            </View>

            <View
                style={{
                    paddingTop: 10,
                    paddingLeft: 15,
                    paddingRight: 15,
                    justifyContent: "flex-start",
                    width: "100%",
                    paddingBottom: 10,
                }}
            >
                <Text style={{ fontSize: 20, alignSelf: "center" }}>Suggestions</Text>
                {foodSuggestions}
            </View>
            <View style={{
                    paddingTop: 10,
                    alignSelf: "center",
                    justifyContent: "flex-start",
                    width: "50%",
                    paddingBottom: 10,
                }}>
                <Button title="Return Home" onPress={() => { navigation.navigate("Home")}} borderRadius={10}/>
            </View>
        </>
    );
}
