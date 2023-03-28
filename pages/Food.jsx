import React from "react";
import { Text, View, Image } from "react-native";
import Button from '../components/Button';

export default function Food({ navigation, categoriesPresent, categoriesMissing, foodSuggestions }) {
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
                <Image source={require('../assets/meal.png')} />
                <Text style={{ fontSize: 24 }}>Breakdown</Text>
            </View>
            <View>
                <Text style={{ fontSize: 20 }}>
                    Present Food Categories
                </Text>
                { /* categoriesPresent should be an unordered list */}
                {categoriesPresent}
                <Text style={{ fontSize: 20 }}>
                    Missing Food Categories
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
            <Button title="Return Home" onPress={() => { navigation.navigate("Home")}} />
        </>
    );
}
