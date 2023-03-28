import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/Home';
import FoodScanner from './components/FoodScanner';
import Help from './pages/Help';
import Food from './pages/Food';

import { post } from 'axios';

let showResponsePage = false;
let showHelpPage = false;
// place holder variables
let categoriesPresent = (
  <>
    <Text>Grain</Text>
  </>
);
let categoriesMissing = (
  <>
    <Text>Veggies</Text>
    <Text>Fruit</Text>
  </>
);
let foodSuggestions = (
  <>
    <Text>Replace x with y</Text>
  </>
);

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Home openCamera={() => alert(openCamera())} getHelp={() => getHelp()}></Home>
      <StatusBar style="auto" />
    </View>
  );
}

function HelpScreen() {
  return (
    <View style={styles.container}>
      <Help goBack={() => returnHome()} />
      <StatusBar style="auto" />
    </View>
  );
}

function ResponseScreen() {
  return (
    <View style={styles.container}>
      <Food returnHome={() => returnHome()} categoriesPresent={categoriesPresent} categoriesMissing={categoriesMissing} foodSuggestions={foodSuggestions}/>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function openCamera() {
  return 'paart';
}

function getHelp() {
showHelpPage = true;
}

function returnHome() {
showResponsePage = false;
showHelpPage = false;
}

function aiAPI(image, username) {
let responseStuff;

// use ip address as the param
post('https://mvhs-fuhsd.org/john_conlin/CalcBC/HW_folder_BC/HW_22-23/BC_AugSept22.html', {
    user : username,
    img : image
  }
)
.then(function(response) {
  alert('http works');

  responseStuff = response.data;

  // place holder
  categoriesMissing = (
    <ul>
      <Text>Veggies</Text>
      <Text>Fruit</Text>
    </ul>
  );

  categoriesPresent = (
    <ul>
      <Text>Grain</Text>
    </ul>
  );

  showResponsePage = true;
})
.catch(function (error) {
  alert('no work');
});
}