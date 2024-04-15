import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Animated,
} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {
  //////////// LOADER
  const appearingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/bcgr.jpeg')}
        style={{flex: 1}}>
        <Animated.View
          style={{
            opacity: appearingAnim,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 250,
              height: 80,
              borderWidth: 3,
              //borderRadius: 20,
              marginBottom: 20,
              borderColor: '#d8ab45',
              backgroundColor: 'rgba(60,11,103,0.7)',
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#d8ab45',
              shadowOffset: {width: 0, height: 8},
              shadowOpacity: 0.8,
              shadowRadius: 20,
              elevation: 10,
            }}
            onPress={() => {
              navigation.navigate('LelSelectionScreen');
            }}>
            <Text style={{color: '#d8ab45', fontSize: 30, fontWeight: 'bold'}}>
              PLAY
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 250,
              height: 80,
              borderWidth: 3,
              //borderRadius: 20,
              marginBottom: 20,
              borderColor: '#d8ab45',
              backgroundColor: 'rgba(60,11,103,0.7)',
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#d8ab45',
              shadowOffset: {width: 0, height: 8},
              shadowOpacity: 0.8,
              shadowRadius: 20,
              elevation: 10,
            }}
            onPress={() => {
              navigation.navigate('RulseScreen');
            }}>
            <Text style={{color: '#d8ab45', fontSize: 30, fontWeight: 'bold'}}>
              RULES
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 250,
              height: 80,
              borderWidth: 3,
              //borderRadius: 20,
              marginBottom: 20,
              borderColor: '#d8ab45',
              backgroundColor: 'rgba(60,11,103,0.7)',
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#d8ab45',
              shadowOffset: {width: 0, height: 8},
              shadowOpacity: 0.8,
              shadowRadius: 20,
              elevation: 10,
            }}
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}>
            <Text style={{color: '#d8ab45', fontSize: 30, fontWeight: 'bold'}}>
              PROFILE
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
