import {useNavigationContainerRef} from '@react-navigation/native';
import {
  Button,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  PermissionsAndroid,
  Platform,
  View,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {useEffect, useState} from 'react';

export default function HomePage() {
  const [userLocation, setUserLocation] = useState({});
  const [search, setSearch] = useState('');

  //get userLocation
  useEffect(() => {
    async function requestLocationPermission() {
      if (Platform.OS === 'ios') {
        Geolocation.requestAuthorization('whenInUse');
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
          },
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission denied');
          return;
        }
      }
    }
    async function getLocation() {
      await requestLocationPermission();

      Geolocation.getCurrentPosition(
        position => {
          setUserLocation((userLatitude = position.coords.latitude));
          setUserLocation((userLongitude = position.coords.longitude));
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
          console.log(userLocation);
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
      );
    }

    // Call this function to get the current location
    getLocation();
  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/OIG4.jpeg')}
      style={styles.image}>
              <View style={styles.container}>
          <Text style={styles.text}>SELAM</Text>
          <TextInput
            placeholder="Type Here..."
            onChangeText={t => setSearch(t)}
            value={search}
            style={styles.inputStyle}
          />
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4EC',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    opacity: 0.9,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  inputStyle: {
    padding: 10,
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 20,
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 15,
  },
});
