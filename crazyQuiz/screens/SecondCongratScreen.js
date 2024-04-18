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
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <ImageBackground
        source={require('../assets/rediz/newBgr.jpg')}
        style={{flex: 1}}>
        <Animated.View
          style={{
            opacity: appearingAnim,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{color: '#ffd97a', fontFamily: 'Starnberg', fontSize: 55}}>
            Here you can
          </Text>
          <Text
            style={{color: '#ffd97a', fontFamily: 'Starnberg', fontSize: 55}}>
            check your
          </Text>
          <Text
            style={{color: '#ffd97a', fontFamily: 'Starnberg', fontSize: 55}}>
            knowledge
          </Text>
          <Text
            style={{color: '#ffd97a', fontFamily: 'Starnberg', fontSize: 55}}>
            in various
          </Text>
          <Text
            style={{color: '#ffd97a', fontFamily: 'Starnberg', fontSize: 55}}>
            comedy
          </Text>
          <Text
            style={{
              color: '#ffd97a',
              fontFamily: 'Starnberg',
              fontSize: 55,
            }}>
            situations
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
            borderColor: '#ffd97a',
            borderWidth: 3,
            borderRadius: 15,
            paddingHorizontal: 15,
            paddingVertical: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffd97a',
            paddingVertical: 8,
            shadowColor: '#ffd97a',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
          }}>
          <Text style={{fontSize: 40, fontFamily: 'Starnberg'}}>NEXT</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SecondCongratScreen;
