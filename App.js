import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';

import { post } from 'axios';

function openCamera() {
    return 'paart';
}

function aiAPI(image, username) {
  let responseStuff;

  post('https://mvhs-fuhsd.org/john_conlin/CalcBC/HW_folder_BC/HW_22-23/BC_AugSept22.html', {
      user : username
      img : image
    }
  )
  .then(function(response) {
    alert('http works');

    reponseStuff = response.data;
  })
  .catch(function (error) {
    alert('no work');
  });

  alert('response from johnny c\'s website: ' + responseStuff)
}

export default function App() {
  return (
    <View style={styles.container}>
      <Home openCamera={() => alert(openCamera())}></Home>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
