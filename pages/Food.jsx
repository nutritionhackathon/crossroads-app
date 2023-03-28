import React from "react";
import { Text, View, img } from "react-native";
import Button from '../components/Button';

export default function Food({ returnHome, categoriesPresent, categoriesMissing, foodSuggestions }) {
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
                {/* <img src={require('../assets/meal.png') /}> */}
                <Text style={{ fontSize: 24 }}>Breakdown</Text>
            </View>
            <View>
                <Text style={{ fontSize: 20 }}>
                    Food Categories that your meal has:
                </Text>
                {categoriesPresent}
                <Text style={{ fontSize: 20 }}>
                    Food Categories that your meal is missing:
                </Text>
                {categoriesMissing}
            </View>

            <View
                style={{
                    paddingTop: 50,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                    paddingBottom: 10,
                }}
            >
                <Text style={{ fontSize: 24 }}>Suggestions</Text>
                {foodSuggestions}
            </View>
            <Button title="Return Home" onPress={returnHome}></Button>
        </>

    );
}
