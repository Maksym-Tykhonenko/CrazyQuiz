import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from 'react-native';

const SecondCongratScreen = ({navigation}) => {
  //////////// LOADER
  const appearingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{flex: 1, position: 'relative'}}>
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
          <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 55}}>
            Here you can
          </Text>
          <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 55}}>
            test your
          </Text>
          <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 55}}>
            knowledge
          </Text>
          <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 55}}>
            in various
          </Text>
          <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 55}}>
            strange
          </Text>
          <Text
            style={{
              color: '#d8ab45',
              fontWeight: 'bold',
              fontSize: 55,
            }}>
            comedy areas
          </Text>
        </Animated.View>

        {/**BTN NEXT */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('FirdCongratScreen');
          }}
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            borderColor: '#d8ab45',
            borderWidth: 3,
            width: 120,
            height: 60,
            //borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(60,11,103,0.7)',
            paddingVertical: 8,
            shadowColor: '#d8ab45',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
          }}>
          <Text style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 25}}>
            NEXT
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SecondCongratScreen;
