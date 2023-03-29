import React from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
import Button from '../components/Button';

function isUnhealthyCategory(category) {
    return (category == "Dessert" || category == "Fried food")
}

export default function Food({ route, navigation }) {
    const {imagePath, responseData} = route.params;
    let yourFood = responseData[0][0];
    if(yourFood.includes("_")){
        temp = yourFood.split("_")
        yourFood = "";
        temp.forEach((val, index) =>{
            yourFood+=val
            if(index!=temp.length-1) yourFood+=" ";
        })
    }

    
    const foodSuggestions = responseData[0].slice(1).map((foodClass) => {
        //if(foodClass.contains("Vegetable")) foodClass = "Fruits and Vegetables"
        //if(foodClass.contains(""))
        return (
            <Text style={styles.listText}>{'\u2022 ' + foodClass}</Text>
            );
        });
        
    let numUnhealthyCategories = 0;
    const foodClasses = responseData[1].map((foodClass, index) => {
        if (isUnhealthyCategory(foodClass))
            numUnhealthyCategories++;
            
        return (
            <Text style={styles.listText} key={index}>{'\u2022 ' + foodClass}</Text>
        );
    });

    return (
        <ScrollView>
            <View style={{ paddingTop: 40, alignItems: 'center', justifyContent: 'flex-start', backgroundColor:"#fffbef", width:"100%", paddingBottom:5, borderColor:"black", borderWidth:2, marginBottom:0}}>
                <Text style={{ fontSize: 36 }}>Breakdown</Text>
            </View>
            <View
                style={{
                    paddingTop: 10,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                    paddingBottom: 10,
                }}
            >
                <Text style={{ fontSize: 16, paddingBottom:10, paddingLeft:5, paddingRight:5 }}>Your meal was classified as {numUnhealthyCategories >= 1 ? "unhealthy" : "healthy!"}</Text>
                <Image source={{ uri: imagePath }} style={{ maxWidth: '40%', minHeight: "32%", backgroundColor: "blue", aspectRatio: 1 }}/>
            </View>
            <View style={{
                    paddingTop: 10,
                    paddingLeft: 15,
                    paddingRight: 15,
                    justifyContent: "flex-start",
                    width: "100%",
                }}>
                <Text style={{ fontSize: 15, alignSelf: "center", paddingBottom:10}}>Here are some of the food categories we detected in your meal</Text>
                <View style={{marginLeft:"10%"}}>
                    {foodClasses}
                </View>
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
                <Text style={{ fontSize: 15, alignSelf: "center" }}>{numUnhealthyCategories == 0 ? "Great job, your meal is considered healthy! We have noticed that you are eating a "+ yourFood+" in your meal, which you could potentially replace with these alternatives for variety in the future: " : "There are various ways you can make your meal healthier. For example, we noticed that you are eating a "+ yourFood+". To make your meal more balanced, consider trying these alternatives next time: "}</Text>
                <View style={{marginLeft: "10%", marginTop: "5%"}}>
                    {foodSuggestions}
                </View>
            </View>
            <View style={{
                    paddingTop: 10,
                    alignSelf: "center",
                    justifyContent: "flex-start",
                    width: "50%",
                    paddingBottom: 10,
                }}>
                <Button title="Return Home" onPress={() => { navigation.navigate("Home")} } borderRadius={10}/> 
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    listText: {
        marginLeft: "7%",
        marginVertical: "2%"
    }
})