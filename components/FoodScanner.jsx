import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function FoodScanner({navigation}) {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [image, setImage] = useState('');
    const [camera, setCamera] = useState();

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
        </View>
        );
    }
    if(image && image.length>0){
        return(
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={{ maxWidth: '100%', minHeight: "80%", backgroundColor: "blue", aspectRatio: 1 }} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={(() => setImage(''))} style={styles.retakeButton}>
                        <Text style={styles.buttonText}>
                            Retake Photo
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={styles.buttonText}>
                            Upload Photo
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } 
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ratio={'1:1'} ref={ref => setCamera(ref)}/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.captureButton}
                    onPress={async () => {
                        if (camera) {
                            const data = await camera.takePictureAsync({ base64: true });
                            setImage(data.uri);
                        }
                    }}
                    >
                    <Text style={styles.buttonText}>
                        Take Photo!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    height: "auto"
  },
  imageContainer: {
    zIndex: 1,
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    height: "auto"
  },
  camera: {
    flex: 1,
    width: "100%",
    height: "50%"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    marginHorizontal: 64,
    marginTop: 64,
    height: "10%",
  },
  buttonText: {
    color: "floralwhite",
  },
  button: {
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  retakeButton: {
    elevation: 8,
    backgroundColor: 'green',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  submitButton: {
    elevation: 8,
    backgroundColor: 'green',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  captureButton: {
    elevation: 8,
    backgroundColor: 'green',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
})