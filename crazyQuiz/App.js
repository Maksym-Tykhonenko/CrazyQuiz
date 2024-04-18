import React, {useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, View, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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

const Stack = createNativeStackNavigator();

const App = () => {
  const [louderIsEnded, setLouderIsEnded] = useState(false);
  //////////// LOADER
  const appearingAnim = useRef(new Animated.Value(0)).current;
  const appearingSecondAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(appearingSecondAnim, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }).start();
      //setLouderIsEnded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLouderIsEnded(true);
    }, 4000);
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
      )}
    </NavigationContainer>
  );
};

export default App;
