import React, {useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, View, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactNativeIdfaAaid, {
  AdvertisingInfoResponse,
} from '@sparkfabrik/react-native-idfa-aaid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LogLevel, OneSignal} from 'react-native-onesignal';

import HomeScreen from './screens/HomeScreen';
import RulseScreen from './screens/RulseScreen';
import LelSelectionScreen from './screens/LelSelectionScreen';
import ProfileScreen from './screens/ProfileScreen';
import FirstCongratScreen from './screens/FirstCongratScreen';
import SecondCongratScreen from './screens/SecondCongratScreen';
import FirdCongratScreen from './screens/FirdCongratScreen';
import Lvl1 from './screens/Lvl1';
import Lvl2 from './screens/Lvl2';
import Lvl3 from './screens/Lvl3';
import Lvl4 from './screens/Lvl4';
import Lvl5 from './screens/Lvl5';
import Lvl6 from './screens/Lvl6';
import Lvl7 from './screens/Lvl7';
import Lvl8 from './screens/Lvl8';
import Lvl9 from './screens/Lvl9';
import Lvl10 from './screens/Lvl10';
import WinnerScreen from './screens/WinnerScreen';
import Prod from './screens/Prod';

const Stack = createNativeStackNavigator();

const App = () => {
  ///////////// Отримання IDFA
  const [idfa, setIdfa] = useState(null);
  console.log('idfa==>', idfa);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [idfa]);

  const setData = async () => {
    try {
      const data = {
        idfa,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('App', jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('App');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('Дані дістаються в AsyncStorage');
        console.log('parsedData in App==>', parsedData);
        setIdfa(parsedData.idfa);
      } else {
        await fetchIdfa();
        await someFunction();
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const fetchIdfa = async () => {
    try {
      const res = await ReactNativeIdfaAaid.getAdvertisingInfo();
      if (!res.isAdTrackingLimited) {
        setIdfa(res.id);
      } else {
        setIdfa(true);
      }
    } catch (err) {
      console.log('err', err);
      setIdfa(null);
      fetchIdfa(); //???
    }
  };

  //  OneSignall
  //  d96c95fa-9f3c-454f-80d4-2035da621d75
  const requestPermission = () => {
    return new Promise((resolve, reject) => {
      try {
        OneSignal.Notifications.requestPermission(true);
        resolve(); // Викликаємо resolve(), оскільки OneSignal.Notifications.requestPermission не повертає проміс
      } catch (error) {
        reject(error); // Викликаємо reject() у разі помилки
      }
    });
  };

  // Виклик асинхронної функції requestPermission() з використанням async/await
  const someFunction = async () => {
    try {
      await requestPermission();
      // Якщо все Ok
    } catch (error) {
      console.log('err в someFunction==> ', error);
    }
  };

  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize('d96c95fa-9f3c-454f-80d4-2035da621d75');

  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal: notification clicked:', event);
  });
  //Add Data Tags
  OneSignal.User.addTag('key', 'value');

  //Route
  const [route, setRoute] = useState();
  const Route = ({isFatch}) => {
    if (isFatch) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="Prod"
            component={Prod}
            options={{headerShown: false}}
            initialParams={{idfa: idfa}}
          />
        </Stack.Navigator>
      );
    } else {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="FirstCongratScreen"
            component={FirstCongratScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SecondCongratScreen"
            component={SecondCongratScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FirdCongratScreen"
            component={FirdCongratScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LelSelectionScreen"
            component={LelSelectionScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RulseScreen"
            component={RulseScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvl1"
            component={Lvl1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvl2"
            component={Lvl2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvl3"
            component={Lvl3}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvl4"
            component={Lvl4}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvl5"
            component={Lvl5}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvl6"
            component={Lvl6}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvl7"
            component={Lvl7}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvl8"
            component={Lvl8}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvl9"
            component={Lvl9}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lvl10"
            component={Lvl10}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="WinnerScreen"
            component={WinnerScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      );
    }
  };

  //////////// useEffect що виріш який шлях включати
  //  https://terrific-eminent-win.space/FG8hKVbd
  useEffect(() => {
    const url = `https://terrific-eminent-win.space/FG8hKVbd`;
    const targetD = new Date('2024-04-29T12:00:00'); //дата з якої поч працювати prod
    const currentD = new Date(); //текущая дата

    if (currentD <= targetD) {
      setRoute(false);
    } else {
      fetch(url)
        .then(r => {
          if (r.status === 200) {
            setRoute(true);
          } else {
            setRoute(false);
          }
        })
        .catch(e => {
          console.log('errar', e);
          setRoute(false);
        });
    }
  }, []);

  //////////// LOADER
  const [louderIsEnded, setLouderIsEnded] = useState(false);

  const appearingAnim = useRef(new Animated.Value(0)).current;
  const appearingSecondAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(appearingSecondAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
      //setLouderIsEnded(true);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLouderIsEnded(true);
    }, 7000);
  }, []);

  return (
    <NavigationContainer>
      {!louderIsEnded ? (
        <View
          style={{
            position: 'relative',
            flex: 1,
            //backgroundColor: 'rgba(225, 7, 6, 255)',
          }}>
          <Animated.Image
            source={require('./assets/rediz/loader1.jpg')} // Special animatable View
            style={{
              //...props.style,
              opacity: appearingAnim,
              height: '100%',
              position: 'absolute', // Bind opacity to animated value
            }}
          />
          <Animated.Image
            source={require('./assets/rediz/loader2.jpg')} // Special animatable View
            style={{
              //...props.style,
              opacity: appearingSecondAnim,
              height: '100%',
              position: 'absolute', // Bind opacity to animated value
            }}
          />
        </View>
      ) : (
        <Route isFatch={route} />
      )}
    </NavigationContainer>
  );
};

export default App;
