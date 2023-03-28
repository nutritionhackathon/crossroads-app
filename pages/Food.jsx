import React from "react";
import { Text, View, ImageBackground } from "react-native";

export default function Food(categoriesPresent, categoriesMissing) {
    return (
        <>
            <View
                style={{
                    paddingTop: 50,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    backgroundColor: "#fffbef",
                    width: "100%",
                    paddingBottom: 10,
                }}
            >
                <Text style={{ fontSize: 24 }}>Breakdown of Your Meal</Text>
            </View>
            <View>
                <Text style={{ fontSize: 20 }}>
                    Food Categories that your meal has:
                </Text>
                categoriesPresent
                <Text style={{ fontSize: 20 }}>
                    Food Categories that your meal is missing:
                </Text>
                categoriesMissing
            </View>
        </>
    );
}
