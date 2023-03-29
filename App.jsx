import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/Home';
import Help from './pages/Help';
import Food from './pages/Food'
import FoodScanner from './components/FoodScanner';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="FoodScanner" component={FoodScanner} options={{headerShown: false}}/>
        <Stack.Screen name="Food" component={Food} options={{headerShown: false}}/>
        <Stack.Screen name="Help" component={Help} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

/* export default function App() {
  if (showResponsePage)
    return (
      <View style={styles.container}>
        <Food returnHome={() => returnHome()} categoriesPresent={categoriesPresent} categoriesMissing={categoriesMissing} foodSuggestions={foodSuggestions}/>
        <StatusBar style="auto" />
      </View>
    );

    if (showHelpPage)
      return (
        <View style={styles.container}>
          <Help goBack={() => returnHome()} />
          <StatusBar style="auto" />
        </View>
      );

  return (
    <View style={styles.container}>
      <FoodScanner/>
      <StatusBar style="auto" />
    </View>
  );
} */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
