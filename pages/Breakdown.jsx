import React from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
import Button from '../components/Button';
import TitleBar from '../components/TitleBar'

function isUnhealthyCategory(category) {
    return (category == "Dessert" || category == "Fried food")
}

export default function Breakdown({ route, navigation }) {
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
    <>
      <TitleBar title="Breakdown" />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.summary}>
          <Text style={styles.healthyNotifier}>Your meal was classified as {numUnhealthyCategories >= 1 ? "unhealthy" : "healthy!"}</Text>
          <Image source={{ uri: imagePath }} style={styles.image}/>
        </View>
        <View style={styles.paragraphView}>
          <Text style={styles.paragraphText}>Here are some of the food categories we detected in your meal</Text>
          {foodClasses}
        </View>
        <View style={styles.paragraphView}>
          <Text style={styles.paragraphText}>
          {numUnhealthyCategories == 0 ? "Great job, your meal is considered healthy! We have noticed that you are eating a "+ yourFood+" in your meal, which you could potentially replace with these alternatives for variety in the future: " : "There are various ways you can make your meal healthier. For example, we noticed that you are eating a "+ yourFood+". To make your meal more balanced, consider trying these alternatives next time: "}
          </Text>
          {foodSuggestions}
        </View>
      </ScrollView>
      <View style={{alignItems: 'center', padding: "2%"}}>
        <Button title="Go Back" onPress={() => { navigation.goBack()}} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  listText: {
    marginLeft: "15%",
    marginVertical: "1%"
  },
  healthyNotifier: { 
    fontSize: 16, 
    paddingBottom: 10, 
    paddingLeft: 5, 
    paddingRight: 5 
  },
  paragraphView: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "flex-start",
    width: "100%",
  },
  paragraphText: {
    fontSize: 15, 
    alignSelf: "center"
  },
  image: { 
    maxWidth: '40%', 
    minHeight: "32%",
    height: 150,
    backgroundColor: "blue", 
    aspectRatio: 1 
  },
  summary: {
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    // height: "45%",
    paddingBottom: 10,
  }
})