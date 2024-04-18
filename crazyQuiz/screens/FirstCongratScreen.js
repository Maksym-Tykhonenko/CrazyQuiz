import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from 'react-native';

const FirstCongratScreen = ({navigation}) => {
  const [confetiState, setConfetiState] = useState(false);

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
            style={{color: '#ffd97a', fontFamily: 'Starnberg', fontSize: 45}}>
            Hello
          </Text>
          <Text
            style={{color: '#ffd97a', fontFamily: 'Starnberg', fontSize: 45}}>
            It's
          </Text>
          <Text
            style={{
              color: '#ffd97a',
              fontFamily: 'Starnberg',
              fontSize: 55,
              marginTop: 40,
            }}>
            CRAZY
          </Text>
          <Text
            style={{color: '#ffd97a', fontFamily: 'Starnberg', fontSize: 55}}>
            COMEDY QUIZ
          </Text>
          {/**BTN NEXT */}
        </Animated.View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SecondCongratScreen');
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

export default FirstCongratScreen;
